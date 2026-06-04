export const INK: [number, number, number] = [33, 29, 24];
export const LIGHT: [number, number, number] = [248, 244, 236];

export const ORBITS = [
  { r: 0.085, speed: 0.42, size: 9, phase: 0.4, moon: null },
  {
    r: 0.15,
    speed: 0.31,
    size: 15,
    phase: 2.1,
    moon: { r: 24, size: 4, speed: 2.6 },
  },
  {
    r: 0.235,
    speed: 0.205,
    size: 26,
    phase: 4.0,
    moon: { r: 40, size: 6, speed: 1.7 },
  },
  { r: 0.33, speed: 0.15, size: 12, phase: 1.0, moon: null },
  {
    r: 0.43,
    speed: 0.108,
    size: 34,
    phase: 5.2,
    moon: { r: 54, size: 7, speed: 1.2 },
  },
  { r: 0.54, speed: 0.074, size: 18, phase: 3.3, moon: null },
] as const;

export const LABELS = [
  { text: 'ASTRONOMIA', r: 0.3, speed: 0.061, phase: 0.0 },
  { text: 'GEOMETRIA', r: 0.395, speed: -0.049, phase: 2.4 },
  { text: 'MVSICA', r: 0.485, speed: 0.04, phase: 4.3 },
  { text: 'PICTVRA', r: 0.585, speed: -0.033, phase: 1.2 },
  { text: 'INGEGNO', r: 0.66, speed: 0.027, phase: 5.5 },
] as const;
