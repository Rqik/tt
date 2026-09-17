import type { PaletteItem } from "./types.js";

export const CONFIG = {
  roiLeft: 0.18,
  roiTop: 0.08,
  roiWidth: 0.64,
  roiHeight: 0.78,

  colorTolerance: 0.1,
  minPixels: 50,
  yGap: 4,

  reversalConfirmSamples: 2,
  dxEpsilon: 0.35,
  minTravelPx: 50,

  settleAfterClickMs: 850,
  clickLeadMs: 3,

  autoStart: true,
  dryRun: false,
} as const;

export const PALETTE: readonly PaletteItem[] = [
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