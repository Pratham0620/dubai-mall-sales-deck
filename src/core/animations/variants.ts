import { Variants } from 'motion/react';

/**
 * Shared cinematic animation variants for a consistent brand feel.
 */

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
  },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

export const SLIDE_UP: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const BOLD_HEADING: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 1.2, ease: [0.25, 0.1, 0, 1] } 
  }
};
