/**
 * Синтетические клики для тестирования DOM-обработчиков.
 * Последовательность: pointerdown, mousedown, pointerup, mouseup, click.
 * При отмене pointerdown совместимые mousedown/mouseup не отправляются.
 * pointerType всегда mouse, контакт 1x1 CSS-пиксель (radius в ne.js = 0.5).
 * isTrusted остаётся false: проверка в ne.js отклоняет синтетические нажатия.
 * Возвращает функцию остановки или undefined при некорректных настройках.
 */
const startBlockTestV3 = ({
  maxClicks = 50,
  jitterMs = 50,
  positionJitterPx = 5,
  previousStop,
} = {}) => {
  if (!Number.isInteger(maxClicks) || maxClicks <= 0
    || !Number.isInteger(jitterMs) || jitterMs < 0
    || !Number.isFinite(positionJitterPx) || positionJitterPx < 0
    || (previousStop !== undefined && typeof previousStop !== "function")) return;

  const target = document.querySelector(".game-page-root");
  if (!target || typeof MouseEvent === "undefined" || typeof PointerEvent === "undefined") return;
  previousStop?.();

  const delays = [
    598, 612, 584, 460, 531, 567, 584,
    569, 597, 510, 515, 551, 630, 540, 491, 491, 485,
    578, 509, 497, 515, 585, 503, 509, 531,
  ];
  let clickCount = 0;
  let timer;
  let stopped = false;
  const stop = () => {
    stopped = true;
    clearTimeout(timer);
  };

  const schedule = () => {
    if (stopped) return;
    if (clickCount >= maxClicks) return stop();
    const jitter = Math.floor(Math.random() * (2 * jitterMs + 1)) - jitterMs;
    timer = setTimeout(() => {
      if (stopped) return;
      if (!target.isConnected) return stop();
      // Не отправляем клики из скрытой вкладки.
      if (document.hidden) return schedule();

      const rect = target.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return stop();
      const clientX = rect.left + rect.width / 2
        + (Math.random() * 2 - 1) * Math.min(positionJitterPx, rect.width / 2);
      const clientY = rect.top + rect.height / 2
        + (Math.random() * 2 - 1) * Math.min(positionJitterPx, rect.height / 2);
      // Событие получает элемент под выбранными координатами.
      const receiver = document.elementFromPoint(clientX, clientY);
      if (!receiver || !target.contains(receiver)) return schedule();

      const common = {
        bubbles: true,
        cancelable: true,
        composed: true,
        view: window,
        detail: 1,
        button: 0,
        clientX,
        clientY,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
      };
      const pointer = {
        ...common,
        pointerType: "mouse",
        pointerId: 1,
        isPrimary: true,
        width: 1,
        height: 1,
      };
      const down = new PointerEvent("pointerdown", {
        ...pointer, detail: 0, buttons: 1, pressure: 0.5,
      });
      const allowMouse = receiver.dispatchEvent(down);
      if (allowMouse) {
        receiver.dispatchEvent(new MouseEvent("mousedown", {
          ...common, buttons: 1,
        }));
      }
      receiver.dispatchEvent(new PointerEvent("pointerup", {
        ...pointer, detail: 0, buttons: 0, pressure: 0,
      }));
      if (allowMouse) {
        receiver.dispatchEvent(new MouseEvent("mouseup", {
          ...common, buttons: 0,
        }));
      }
      receiver.dispatchEvent(new PointerEvent("click", {
        ...pointer, buttons: 0, pressure: 0,
      }));
      clickCount += 1;
      console.log(`Клик №${clickCount}: события отправлены`, {
        clientX, clientY,
        pointerType: down.pointerType,
        radius: Math.max(down.width, down.height) / 2,
        isTrusted: down.isTrusted,
      });
      schedule();
    }, Math.max(1, delays[clickCount % delays.length] + jitter));
  };

  schedule();
  return stop;
};

// Запуск: const stopV3 = startBlockTestV3({ maxClicks: 50 });
// Остановка: stopV3?.();
