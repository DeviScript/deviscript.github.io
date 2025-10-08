/**
 * Animation Utilities
 * Reusable animation variants and functions for Framer Motion
 */

import type { MotionVariants } from "@/lib/types";

// Common Animation Variants
export const fadeInUp: MotionVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInDown: MotionVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInLeft: MotionVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInRight: MotionVariants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const scaleIn: MotionVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const staggerContainer: MotionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: MotionVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Animation Utility Functions
export const createStaggerVariants = (
  staggerDelay: number = 0.1,
  childDelay: number = 0.1
): MotionVariants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: childDelay,
    },
  },
});

export const createFadeInVariants = (
  direction: "up" | "down" | "left" | "right" = "up",
  distance: number = 20,
  duration: number = 0.6
): MotionVariants => {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: -distance },
    right: { x: distance },
  };

  return {
    hidden: {
      opacity: 0,
      ...directionMap[direction],
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };
};

// Hover Animation Helpers
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

export const hoverFloat = {
  whileHover: { y: -5 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
    transition: { duration: 0.3 },
  },
};

// Loading Animation
export const loadingSpinner = {
  animate: { rotate: 360 },
  transition: { duration: 1, repeat: Infinity, ease: "linear" },
};

// Background Animations
export const floatingElement = (
  initialY: number = 0,
  range: number = 20,
  duration: number = 6
) => ({
  animate: {
    y: [initialY, initialY - range, initialY],
    x: [0, 10, 0],
  },
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

export const pulsingElement = {
  animate: { scale: [1, 1.1, 1] },
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};
