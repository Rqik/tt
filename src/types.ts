export interface Point {
  x: number;
  y: number;
}

export interface TimedPoint extends Point {
  time: number;
}

export interface DetectedBlock {
  x: number;
  y: number;

  count: number;

  minY: number;
  maxY: number;

  width: number;
}

export interface PaletteItem {
  left: string;
  right: string;
}