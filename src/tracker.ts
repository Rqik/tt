import { CONFIG } from "./config.js";
import type { TimedPoint } from "./types.js";

export class ReversalTracker {
  private last: TimedPoint | null = null;

  private direction = 0;

  private pendingDirection = 0;
  private pendingCount = 0;

  private extreme: TimedPoint | null = null;

  readonly reversals: TimedPoint[] = [];

  reset(): void {
    this.last = null;

    this.direction = 0;

    this.pendingDirection = 0;
    this.pendingCount = 0;

    this.extreme = null;

    this.reversals.length = 0;
  }

  push(x: number, time: number): TimedPoint | null {
    if (!this.last) {
      this.last = { x, y: 0, time };
      this.extreme = { x, y: 0, time };

      return null;
    }

    const dx = x - this.last.x;

    this.last = { x, y: 0, time };

    if (Math.abs(dx) < CONFIG.dxEpsilon) {
      return null;
    }

    const direction = Math.sign(dx);

    if (this.direction === 0) {
      this.direction = direction;
      this.extreme = { x, y: 0, time };

      return null;
    }

    if (direction === this.direction) {
      this.pendingDirection = 0;
      this.pendingCount = 0;

      if (!this.extreme) {
        this.extreme = { x, y: 0, time };

        return null;
      }

      const isMoreExtreme =
        this.direction > 0
          ? x > this.extreme.x
          : x < this.extreme.x;

      if (isMoreExtreme) {
        this.extreme = { x, y: 0, time };
      }

      return null;
    }

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

    if (!this.extreme) {
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

    this.extreme = { x, y: 0, time };

    return reversal;
  }
}