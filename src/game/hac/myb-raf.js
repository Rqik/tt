/**
 * Проверяет фактические координаты блоков каждый кадр, не меняя их.
 * game — ссылка на экземпляр движка. Игру нужно предварительно запустить.
 * События синтетические (isTrusted=false): штатный ne.js их отклоняет.
 * Один клик на блок; maxClicks ограничивает отправки, а не принятые попадания.
 * Задержки — реальные, поля запросов не изменяются.
 * offset — положительный допуск клика относительно центра блока в единицах мира.
 * По умолчанию равен 0.08; больший допуск допускает partial и сужение.
 * minSkipPasses/maxSkipPasses — число пропускаемых окон совпадения на блок.
 */
const startBlockTestRAF = ({
  game,
  maxClicks = 50,
  minDelayMs = 350,
  maxDelayMs = 1000,
  positionJitterPx = 40,
  offset: clickTolerance = 0.08,
  minSkipPasses = 0,
  maxSkipPasses = 1,
  previousStop,
} = {}) => {
  const target = document.querySelector(".game-page-root");
  previousStop?.();

  let frameId;
  let stopped = false;
  let clickCount = 0;
  let lastSentAt = -Infinity;
  let hoverTarget = null;
  let hoverX;
  let hoverY;
  const ancestors = element => {
    const result = [];
    for (let node = element; node; node = node.parentElement) result.push(node);
    return result;
  };
  const movePointer = (receiver, common, pointer) => {
    const emitPair = (element, pointerName, mouseName, relatedTarget, bubbles = true) => {
      const options = {
        relatedTarget, bubbles, cancelable: bubbles, composed: bubbles,
        detail: 0, button: -1, buttons: 0, pressure: 0,
      };
      element.dispatchEvent(new PointerEvent(pointerName, { ...pointer, ...options }));
      element.dispatchEvent(new MouseEvent(mouseName, { ...common, ...options, button: 0 }));
    };
    if (hoverTarget !== receiver) {
      const oldPath = ancestors(hoverTarget);
      const newPath = ancestors(receiver);
      const oldSet = new Set(oldPath);
      const newSet = new Set(newPath);
      if (hoverTarget) {
        emitPair(hoverTarget, "pointerout", "mouseout", receiver);
        for (const element of oldPath) {
          if (!newSet.has(element)) emitPair(element, "pointerleave", "mouseleave", receiver, false);
        }
      }
      emitPair(receiver, "pointerover", "mouseover", hoverTarget);
      for (const element of newPath.reverse()) {
        if (!oldSet.has(element)) emitPair(element, "pointerenter", "mouseenter", hoverTarget, false);
      }
    }
    if (hoverTarget !== receiver || hoverX !== common.clientX || hoverY !== common.clientY) {
      const movementX = hoverX === undefined ? 0 : common.clientX - hoverX;
      const movementY = hoverY === undefined ? 0 : common.clientY - hoverY;
      receiver.dispatchEvent(new PointerEvent("pointermove", {
        ...pointer, detail: 0, button: -1, buttons: 0, pressure: 0, movementX, movementY,
      }));
      receiver.dispatchEvent(new MouseEvent("mousemove", {
        ...common, detail: 0, button: 0, buttons: 0, movementX, movementY,
      }));
    }
    hoverTarget = receiver;
    hoverX = common.clientX;
    hoverY = common.clientY;
  };
  const clickedBlocks = new WeakSet();
  const plans = new WeakMap();
  const randomBetween = (min, max) => min + Math.random() * (max - min);
  const stop = () => {
    stopped = true;
    cancelAnimationFrame(frameId);
  };

  const tick = () => {
    if (stopped) return;
    if (!target.isConnected || game.state === "gameover") return stop();
    // Сначала планируем следующий кадр: stop() сможет отменить его из обработчика.
    frameId = requestAnimationFrame(tick);
    if (document.hidden || game.paused || game.state !== "playing") return;
    const block = game.current;
    const previous = game.placed[game.placed.length - 1];
    if (!block || !previous || clickedBlocks.has(block)) return;
    if (block.axis !== "x" && block.axis !== "z") return;
    const now = performance.now();
    let plan = plans.get(block);
    if (!plan) {
      plan = {
        readyAt: now + randomBetween(minDelayMs, maxDelayMs),
        passesLeft: Math.floor(randomBetween(minSkipPasses, maxSkipPasses + 1)),
        inWindow: false,
        skipWindow: false,
        x: randomBetween(-positionJitterPx, positionJitterPx),
        y: randomBetween(-positionJitterPx, positionJitterPx),
      };
      plans.set(block, plan);
    }
    const position = block.mesh.position[block.axis];
    const center = block.axis === "x" ? previous.px : previous.pz;
    const offset = position - center;
    const overlapLimit = block.axis === "x"
      ? (block.sx + previous.sx) / 2
      : (block.sz + previous.sz) / 2;
    const inWindow = Number.isFinite(offset) && Number.isFinite(overlapLimit)
      && Math.abs(offset) < overlapLimit
      && Math.abs(offset) < clickTolerance;
    if (!inWindow) {
      plan.inWindow = false;
      return;
    }
    if (!plan.inWindow) {
      plan.inWindow = true;
      // Решение принимается один раз на проход, а не на каждом кадре.
      plan.skipWindow = now < plan.readyAt || plan.passesLeft > 0;
      if (plan.passesLeft > 0) plan.passesLeft -= 1;
    }
    // Истечение задержки внутри окна не вызывает клик: ждём следующего прохода.
    if (plan.skipWindow) return;
    const lastAccepted = Number.isFinite(game.lastTapAcceptedAt) ? game.lastTapAcceptedAt : -Infinity;
    if (now - Math.max(lastAccepted, lastSentAt) < 300) return;

    const rect = target.getBoundingClientRect();
    // Случайная точка возле центра видимой части области, фиксированная на блок.
    const left = Math.max(0, rect.left);
    const right = Math.min(window.innerWidth, rect.right);
    const top = Math.max(0, rect.top);
    const bottom = Math.min(window.innerHeight, rect.bottom);
    if (right <= left || bottom <= top) return;
    const clientX = (left + right) / 2
      + Math.max(-(right - left) / 4, Math.min((right - left) / 4, plan.x));
    const clientY = (top + bottom) / 2
      + Math.max(-(bottom - top) / 4, Math.min((bottom - top) / 4, plan.y));
    const receiver = document.elementFromPoint(clientX, clientY);
    if (!receiver || !target.contains(receiver)
      || receiver.closest("button, a, input, textarea, select, .tp-dfwv")) return;

    const common = {
      bubbles: true, cancelable: true, composed: true,
      view: window, clientX, clientY, button: 0, detail: 1,
    };
    const pointer = {
      ...common, pointerType: "mouse", pointerId: 1,
      isPrimary: true, width: 1, height: 1,
    };
    movePointer(receiver, common, pointer);
    // Обработчики наведения могут изменить страницу или остановить скрипт.
    if (stopped || !receiver.isConnected || game.current !== block
      || game.paused || document.hidden || game.state !== "playing") return;
    const down = new PointerEvent("pointerdown", {
      ...pointer, detail: 0, buttons: 1, pressure: 0.5,
    });
    clickedBlocks.add(block);
    lastSentAt = now;
    clickCount += 1;
    const allowMouse = receiver.dispatchEvent(down);
    if (allowMouse) receiver.dispatchEvent(new MouseEvent("mousedown", {
      ...common, buttons: 1,
    }));
    receiver.dispatchEvent(new PointerEvent("pointerup", {
      ...pointer, detail: 0, buttons: 0, pressure: 0,
    }));
    if (allowMouse) receiver.dispatchEvent(new MouseEvent("mouseup", {
      ...common, buttons: 0,
    }));
    receiver.dispatchEvent(new PointerEvent("click", {
      ...pointer, buttons: 0, pressure: 0,
    }));
    console.log(`RAF: отправлен клик №${clickCount}`, {
      offset, clickTolerance, clientX, clientY,
      axis: block.axis, isTrusted: down.isTrusted,
      blockChanged: game.current !== block,
    });
    if (clickCount >= maxClicks) stop();
  };

  frameId = requestAnimationFrame(tick);
  return stop;
};

// После загрузки скрипта, при наличии ссылки game:
const stopRAF = startBlockTestRAF({ game, maxClicks: 50 });
// stopRAF();
