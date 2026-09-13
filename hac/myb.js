// Usage and debugging notes: myb-notes.md
/**
 * Локальный тест нажатий. Принимает объект настроек.
 * @param {Object} [options={}] Настройки запуска.
 * @param {number} [options.maxClicks=50] Лимит нажатий; ожидается положительное целое число.
 * @param {number} [options.jitterMs=50] Случайное отклонение времени ±jitterMs в мс.
 * Ожидается неотрицательное целое число. 0 отключает отклонение; задержка не меньше 1 мс.
 * @param {function(): void} [options.previousStop] Остановка предыдущего запуска;
 * вызывается после начальных проверок. Без неё запуски независимы.
 * @returns {(function(): void)|undefined} Функция остановки или undefined,
 * если начальные проверки не прошли. Для остановки используй stop?.().
 */
const startBlockTest = ({ maxClicks = 50, jitterMs = 50, previousStop } = {}) => {
  if (location.hostname !== "localhost" || location.port !== "3000") {
    return;
  }

  const delays = [
    625, 375, 310, 357, 351, 364, 364, 351, 455, 1430,
    315, 498, 345, 339, 303, 352, 370, 612, 484, 364,
    418, 1437, 460, 431, 388, 418, 467, 484, 1036, 922,
    569, 497, 510, 515, 551, 630, 540, 491, 491, 485,
    478, 509, 497, 515, 485, 503, 509, 431, 2103
  ];

  const target = document.querySelector(".game-page-root");
  if (!target) {
    return;
  }

  previousStop?.();

  let clickCount = 0;
  let timer;
  let stopped = false;

  const stop = () => {
    stopped = true;
    clearTimeout(timer);
  };

  const schedule = () => {
    if (stopped) return;
    if (clickCount >= maxClicks) {
      stop();
      return;
    }

    const jitter = jitterMs === 0
      ? 0
      : Math.floor(Math.random() * (2 * jitterMs + 1)) - jitterMs;
    const delay = Math.max(1, delays[clickCount % delays.length] + jitter);

    timer = setTimeout(() => {
      if (stopped) return;
      if (!target.isConnected) {
        console.log("Game element removed. Test stopped.");
        stop();
        return;
      }

      target.dispatchEvent(new PointerEvent("pointerdown", {
        bubbles: true,
        cancelable: true,
        pointerType: "mouse",
        button: 0,
        buttons: 1
      }));
      clickCount += 1;
      console.log(`Нажатие №${clickCount}: отправлено событие pointerdown`);
      schedule();
    }, delay);
  };

  schedule();
  return stop;
};

