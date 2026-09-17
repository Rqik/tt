const robot = require("robotjs");
const { performance } = require("node:perf_hooks");

robot.setMouseDelay(0);

/**
 * Настройки.
 *
 * Скрипт предполагает:
 * - браузер на основном мониторе;
 * - окно игры развёрнуто;
 * - сама башня находится примерно в центре.
 */
const CONFIG = {
  // Какую часть экрана анализировать.
  roiLeft: 0.18,
  roiTop: 0.08,
  roiWidth: 0.64,
  roiHeight: 0.78,

  // Допуск цвета RobotJS.
  colorTolerance: 0.10,

  // Минимальное количество пикселей для найденного блока.
  minPixels: 50,

  // Максимальный допустимый разрыв строк внутри одного цветового кластера.
  yGap: 4,

  // Сколько подтверждений смены направления нужно для разворота.
  reversalConfirmSamples: 2,

  // Игнорировать очень маленькие движения.
  dxEpsilon: 0.35,

  // Минимальная экранная дистанция между левым и правым краем движения.
  minTravelPx: 50,

  // После установки этажа камера немного двигается.
  settleAfterClickMs: 850,

  // Компенсация задержки самого mouseClick.
  // Потом можем откалибровать.
  clickLeadMs: 3,

  // Первый системный клик запустит игру.
  autoStart: true,

  // false = реально кликает.
  // true = только пишет, когда хотел бы нажать.
  dryRun: false,
};

/**
 * ke[] из твоего JS.
 *
 * Первый неподвижный блок = индекс 0.
 * Первый движущийся = индекс 1.
 */
const PALETTE = [
  { left: "c2135c", right: "ff4392" },
  { left: "1e4acc", right: "4876ff" },
  { left: "65b23c", right: "aeff82" },
  { left: "c4c400", right: "fffe3d" },
  { left: "999999", right: "e6e6e6" },
  { left: "5b5b5b", right: "a3a3a3" },
  { left: "363636", right: "464646" },

  { left: "c2135c", right: "ff4392" },
  { left: "1e4acc", right: "4876ff" },
  { left: "65b23c", right: "aeff82" },
  { left: "c4c400", right: "fffe3d" },
  { left: "999999", right: "e6e6e6" },
  { left: "5b5b5b", right: "a3a3a3" },
  { left: "363636", right: "464646" },
];

const sleep = ms =>
  new Promise(resolve => setTimeout(resolve, ms));

const screenSize = robot.getScreenSize();

const ROI = {
  x: Math.round(screenSize.width * CONFIG.roiLeft),
  y: Math.round(screenSize.height * CONFIG.roiTop),
  width: Math.round(screenSize.width * CONFIG.roiWidth),
  height: Math.round(screenSize.height * CONFIG.roiHeight),
};

console.log("Screen:", screenSize);
console.log("ROI:", ROI);

/**
 * Берём точки двух цветов текущего блока и пытаемся выделить
 * верхний плотный горизонтальный кластер.
 */
function detectBlock(frame, floor) {
  const colors = PALETTE[floor % PALETTE.length];

  const searchY = Math.floor(frame.height * 0.08);
  const searchHeight = Math.floor(frame.height * 0.78);

  const searchOptions = {
    x: 0,
    y: searchY,
    width: frame.width,
    height: searchHeight,
    tolerance: CONFIG.colorTolerance,
  };

  const leftPoints = frame.findColors(
    colors.left,
    searchOptions,
  );

  const rightPoints = frame.findColors(
    colors.right,
    searchOptions,
  );

  const points = [...leftPoints, ...rightPoints];

  if (points.length < CONFIG.minPixels) {
    return null;
  }

  points.sort((a, b) => a.y - b.y);

  const bands = [];

  let current = null;

  for (const point of points) {
    if (
      !current ||
      point.y - current.maxY > CONFIG.yGap
    ) {
      current = {
        minY: point.y,
        maxY: point.y,
        minX: point.x,
        maxX: point.x,
        count: 0,
        sumX: 0,
        sumY: 0,
      };

      bands.push(current);
    }

    current.maxY = Math.max(current.maxY, point.y);
    current.minX = Math.min(current.minX, point.x);
    current.maxX = Math.max(current.maxX, point.x);

    current.count++;
    current.sumX += point.x;
    current.sumY += point.y;
  }

  const candidates = bands
    .filter(band => {
      if (band.count < CONFIG.minPixels) {
        return false;
      }

      const width = band.maxX - band.minX;

      // Отсекаем огромные фоновые области.
      if (width > frame.width * 0.65) {
        return false;
      }

      if (width < 8) {
        return false;
      }

      return true;
    })
    .map(band => ({
      x: band.sumX / band.count,
      y: band.sumY / band.count,
      count: band.count,
      minY: band.minY,
      maxY: band.maxY,
      width: band.maxX - band.minX,
    }))
    .sort((a, b) => {
      // Текущий блок должен быть одним из самых верхних.
      if (Math.abs(a.minY - b.minY) > 10) {
        return a.minY - b.minY;
      }

      return b.count - a.count;
    });

  return candidates[0] ?? null;
}

class ReversalTracker {
  constructor() {
    this.reset();
  }

  reset() {
    this.last = null;
    this.direction = 0;

    this.pendingDirection = 0;
    this.pendingCount = 0;

    this.extreme = null;
    this.reversals = [];
  }

  push(x, time) {
    if (!this.last) {
      this.last = { x, time };
      this.extreme = { x, time };
      return null;
    }

    const dx = x - this.last.x;

    this.last = { x, time };

    if (Math.abs(dx) < CONFIG.dxEpsilon) {
      return null;
    }

    const direction = Math.sign(dx);

    if (this.direction === 0) {
      this.direction = direction;
      this.extreme = { x, time };
      return null;
    }

    if (direction === this.direction) {
      this.pendingDirection = 0;
      this.pendingCount = 0;

      const isMoreExtreme =
        this.direction > 0
          ? x > this.extreme.x
          : x < this.extreme.x;

      if (isMoreExtreme) {
        this.extreme = { x, time };
      }

      return null;
    }

    // Возможно произошёл разворот.
    if (this.pendingDirection !== direction) {
      this.pendingDirection = direction;
      this.pendingCount = 1;
    } else {
      this.pendingCount++;
    }

    if (
      this.pendingCount <
      CONFIG.reversalConfirmSamples
    ) {
      return null;
    }

    const reversal = this.extreme;

    this.reversals.push(reversal);

    if (this.reversals.length > 4) {
      this.reversals.shift();
    }

    this.direction = direction;
    this.pendingDirection = 0;
    this.pendingCount = 0;

    this.extreme = { x, time };

    return reversal;
  }
}

async function waitUntil(targetTime) {
  while (true) {
    const remaining = targetTime - performance.now();

    if (remaining <= 0) {
      return;
    }

    // Сначала обычное ожидание.
    if (remaining > 15) {
      await sleep(Math.max(1, remaining - 8));
      continue;
    }

    // Последние миллисекунды — активное ожидание,
    // чтобы setTimeout не дал большую погрешность.
  }
}

function failsafeTriggered() {
  const mouse = robot.getMousePos();

  return mouse.x <= 5 && mouse.y <= 5;
}

async function countdown(seconds) {
  for (let i = seconds; i > 0; i--) {
    console.log(
      `Поставь мышь в пустую область игры. Старт через ${i}...`,
    );

    await sleep(1000);
  }
}

async function run() {
  console.log("");
  console.log("FAILSAFE: перемести мышь в левый верхний угол.");
  console.log("");

  await countdown(5);

  /**
   * Координата системного клика.
   *
   * Мы специально сохраняем положение мыши пользователя.
   * Поставь её в пустую область игрового canvas.
   */
  const clickPoint = robot.getMousePos();

  console.log("Click point:", clickPoint);

  if (CONFIG.autoStart) {
    console.log("Запускаю игру...");

    if (!CONFIG.dryRun) {
      robot.mouseClick();
    }

    await sleep(1500);
  }

  // Первая движущаяся плитка имеет index = 1.
  let floor = 1;

  while (true) {
    if (failsafeTriggered()) {
      console.log("FAILSAFE.");
      return;
    }

    console.log("");
    console.log(`=== FLOOR ${floor} ===`);

    const tracker = new ReversalTracker();

    const startedAt = performance.now();
    let nextDebugLog = 0;

    await sleep(CONFIG.settleAfterClickMs);

    while (true) {
      if (failsafeTriggered()) {
        console.log("FAILSAFE.");
        return;
      }

      const captureStart = performance.now();

      const frame = robot.screen.capture(
        ROI.x,
        ROI.y,
        ROI.width,
        ROI.height,
      );

      const captureEnd = performance.now();

      // Приблизительное время фактического кадра.
      const frameTime =
        (captureStart + captureEnd) / 2;

      const block = detectBlock(frame, floor);

      if (!block) {
        if (performance.now() > nextDebugLog) {
          console.log(
            `[${floor}] блок не найден`,
          );

          nextDebugLog =
            performance.now() + 500;
        }

        if (
          performance.now() - startedAt >
          8000
        ) {
          try {
            frame.save(
              `debug-floor-${floor}.png`,
            );

            console.log(
              `Сохранил debug-floor-${floor}.png`,
            );
          } catch {}

          console.log(
            "Детектор не смог найти блок.",
          );

          return;
        }

        await sleep(5);
        continue;
      }

      if (performance.now() > nextDebugLog) {
        console.log(
          `[${floor}] x=${block.x.toFixed(1)} ` +
          `y=${block.y.toFixed(1)} ` +
          `pixels=${block.count}`,
        );

        nextDebugLog =
          performance.now() + 250;
      }

      const reversal = tracker.push(
        block.x,
        frameTime,
      );

      if (reversal) {
        console.log(
          `[${floor}] reversal x=${reversal.x.toFixed(2)}`,
        );
      }

      const reversals = tracker.reversals;

      if (reversals.length < 2) {
        await sleep(2);
        continue;
      }

      const a =
        reversals[reversals.length - 2];

      const b =
        reversals[reversals.length - 1];

      const distance = Math.abs(b.x - a.x);

      if (distance < CONFIG.minTravelPx) {
        // Скорее всего ложный разворот.
        await sleep(2);
        continue;
      }

      /**
       * Между двумя разворотами блок прошёл:
       *
       * left extreme -> right extreme
       *
       * Движение в игре равномерное.
       *
       * Поэтому центр находится ровно через
       * половину времени после второго разворота.
       */
      const edgeToEdgeMs =
        b.time - a.time;

      const centerAfterSecondEdge =
        edgeToEdgeMs / 2;

      const clickAt =
        b.time +
        centerAfterSecondEdge -
        CONFIG.clickLeadMs;

      const remaining =
        clickAt - performance.now();

      if (remaining <= 30) {
        // Поздно заметили. Ждём следующий цикл.
        await sleep(2);
        continue;
      }

      console.log(
        `[${floor}] range=${distance.toFixed(1)}px`,
      );

      console.log(
        `[${floor}] edge→edge=${edgeToEdgeMs.toFixed(1)}ms`,
      );

      console.log(
        `[${floor}] клик через ${remaining.toFixed(1)}ms`,
      );

      await waitUntil(clickAt);

      if (failsafeTriggered()) {
        console.log("FAILSAFE.");
        return;
      }

      if (CONFIG.dryRun) {
        console.log(
          `[${floor}] DRY RUN CLICK`,
        );
      } else {
        /**
         * Возвращаем мышь в заранее выбранную
         * безопасную точку игрового поля.
         */
        robot.moveMouse(
          clickPoint.x,
          clickPoint.y,
        );

        robot.mouseClick();

        console.log(
          `[${floor}] CLICK`,
        );
      }

      floor++;

      break;
    }
  }
}

run().catch(error => {
  console.error(error);
  process.exitCode = 1;
});