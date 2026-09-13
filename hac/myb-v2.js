// Usage and debugging notes: myb-notes.md
/**
 * Локальный тест нажатий. Принимает объект настроек.
 * @param {Object} [options={}] Настройки запуска.
 * @param {number} [options.maxClicks=50] Лимит нажатий; ожидается положительное целое число.
 * @param {number} [options.jitterMs=50] Случайное отклонение времени ±jitterMs в мс.
 * Ожидается неотрицательное целое число. 0 отключает отклонение; задержка не меньше 1 мс.
 * @param {function(): void} [options.previousStop] Остановка предыдущего запуска;
 * вызывается после начальных проверок. Без неё запуски независимы.
 * @param {number} [options.positionJitterPx=5] Отклонение clientX/clientY от центра
 * по каждой оси в CSS-пикселях, ограниченное половиной размера элемента.
 * Конечное неотрицательное число; 0 задаёт центр. Положение блока не меняется.
 * @returns {(function(): void)|undefined} Функция остановки или undefined,
 * если начальные проверки не прошли. Для остановки используй stop?.().
 */
const startBlockTestV2 = ({ maxClicks = 50, jitterMs = 50, positionJitterPx = 5, previousStop } = {}) => {

  if (!Number.isFinite(positionJitterPx) || positionJitterPx < 0) return;

  const delays = [
    598, 612, 584,460, 531, 567, 584,
    569, 597, 510, 515, 551, 630, 540, 491, 491, 485,
    578, 509, 497, 515, 585, 503, 509, 531,
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

      const rect = target.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) {
        stop();
        return;
      }

      const offsetX = (Math.random() * 2 - 1) * Math.min(positionJitterPx, rect.width / 2);
      const offsetY = (Math.random() * 2 - 1) * Math.min(positionJitterPx, rect.height / 2);
      const clientX = rect.left + rect.width / 2 + offsetX;
      const clientY = rect.top + rect.height / 2 + offsetY;

      target.dispatchEvent(new PointerEvent("pointerdown", {
        bubbles: true,
        cancelable: true,
        pointerType: "mouse",
        button: 0,
        buttons: 1,
        clientX,
        clientY
      }));

       target.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            button: 0,
            clientX,
            clientY,
          })
        );
      clickCount += 1;
      console.log(`Нажатие №: отправлено событие pointerdown`);
      schedule();
    }, delay );
  };

  schedule();
  return stop;
};

const stopV2 = startBlockTestV2({
  maxClicks: 12250,
  jitterMs: 50,
  positionJitterPx: 5,
});