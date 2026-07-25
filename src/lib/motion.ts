import type { Variants } from 'framer-motion';

// Motion Durations (seconds)
export const DURATIONS = {
  fast: 0.15,      // 150ms
  normal: 0.25,    // 250ms
  slow: 0.4,       // 400ms
  reveal: 0.6,     // 600ms
} as const;

// Easing Curves
export const EASINGS = {
  standard: [0.25, 1, 0.5, 1], // easeOutQuart (smooth flow)
  entrance: [0.16, 1, 0.3, 1], // easeOutExpo (snappy)
  exit: [0.3, 0.07, 0.19, 0.97], // smooth exit
  hover: [0.4, 0, 0.2, 1],      // smooth micro-interactions
} as const;

// Transition Distances (px)
export const DISTANCES = {
  small: 8,
  medium: 16,
  large: 32,
} as const;

// Reusable Framer Motion Animation Variants with explicit number types to prevent literal type inference issues
export const fadeUpVariants = (distance: number = DISTANCES.medium, duration: number = DURATIONS.normal): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: EASINGS.standard },
  },
});

export const fadeDownVariants = (distance: number = DISTANCES.medium, duration: number = DURATIONS.normal): Variants => ({
  hidden: { opacity: 0, y: -distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: EASINGS.standard },
  },
});

export const fadeLeftVariants = (distance: number = DISTANCES.medium, duration: number = DURATIONS.normal): Variants => ({
  hidden: { opacity: 0, x: distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: EASINGS.standard },
  },
});

export const fadeRightVariants = (distance: number = DISTANCES.medium, duration: number = DURATIONS.normal): Variants => ({
  hidden: { opacity: 0, x: -distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: EASINGS.standard },
  },
});

export const scaleInVariants = (duration: number = DURATIONS.normal): Variants => ({
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration, ease: EASINGS.standard },
  },
});

export const staggerParent = (staggerChildren: number = 0.1, delayChildren: number = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerChild = (distance: number = DISTANCES.medium, duration: number = DURATIONS.normal): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: EASINGS.standard },
  },
});

export const buttonHover = {
  y: -2,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  transition: { duration: DURATIONS.fast, ease: EASINGS.hover },
};

export const buttonTap = {
  scale: 0.98,
  transition: { duration: DURATIONS.fast, ease: EASINGS.hover },
};

export const cardHover = {
  y: -6,
  boxShadow: '0 20px 40px -6px rgba(17, 24, 39, 0.06)',
  transition: { duration: DURATIONS.normal, ease: EASINGS.hover },
};

export const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATIONS.normal, ease: EASINGS.entrance },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 16,
    transition: { duration: DURATIONS.fast, ease: EASINGS.exit },
  },
};

export const tooltipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATIONS.fast, ease: EASINGS.standard },
  },
};
