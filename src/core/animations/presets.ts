export const VIEWPORT_REVEAL = { once: true, amount: 0.25 } as const;

export const staggerDelay = (index: number, start = 0.2, step = 0.08): number => {
  return start + index * step;
};

export const LUXURY_EASE = [0.19, 1, 0.22, 1] as const;
export const FILMIC_EASE = [0.23, 1, 0.32, 1] as const;

export const MOTION_TIMING = {
  fast: 0.4,
  base: 0.7,
  slow: 1.1,
  reveal: 1.25,
} as const;

export const NAV_SPRING = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 40,
  mass: 1,
};
