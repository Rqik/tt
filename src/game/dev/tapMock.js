/**
 * Изолированный генератор тестовых нажатий. Не подключается к игре или API.
 *
 * @param {Object} [options={}]
 * @param {number} [options.startIndex=1000000] Первый индекс тестового события.
 * @param {function(Object): void} [options.onTap] Получатель события; по умолчанию console.log.
 * @returns {function(): Object} Обработчик одного тестового нажатия.
 *
 * Пример в локальном модуле:
 * const recordTap = createTapMock();
 * testButton.addEventListener("click", recordTap);
 * // Остановка: testButton.removeEventListener("click", recordTap);
 */
export const createTapMock = ({
  startIndex = 1_000_000,
  onTap = (tap) => console.log("[tap mock]", tap),
} = {}) => {
  if (!Number.isSafeInteger(startIndex) || startIndex < 0) {
    throw new RangeError("startIndex must be a non-negative safe integer.");
  }
  if (typeof onTap !== "function") {
    throw new TypeError("onTap must be a function.");
  }

  let nextIndex = startIndex;
  const startedAt = Date.now();

  return () => {
    if (!Number.isSafeInteger(nextIndex)) {
      throw new RangeError("The tap index exceeds the safe integer range.");
    }

    const tap = {
      tap_index: nextIndex++,
      timestamp_ms: Math.max(0, Date.now() - startedAt),
    };

    onTap(tap);
    return tap;
  };
};
