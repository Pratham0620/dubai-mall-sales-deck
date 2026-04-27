export const VIEWPORT_REVEAL = { once: true, amount: 0.35 } as const;

export const staggerDelay = (index: number, start = 0.3, step = 0.15): number => {
  return start + index * step;
};

export const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;
export const FILMIC_EASE = [0.16, 1, 0.3, 1] as const;

export const MOTION_TIMING = {
  fast: 0.45,
  base: 0.8,
  slow: 1.2,
  reveal: 1.35,
} as const;

export const NAV_SPRING = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
  mass: 0.5,
};
