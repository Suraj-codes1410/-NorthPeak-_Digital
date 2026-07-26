import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  fadeUpVariants,
  fadeDownVariants,
  fadeLeftVariants,
  fadeRightVariants,
  scaleInVariants,
} from '../../lib/motion';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration,
  distance,
  once = true,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getVariants = () => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay, duration: 0.15 },
        },
      };
    }

    switch (direction) {
      case 'up':
        return fadeUpVariants(distance, duration);
      case 'down':
        return fadeDownVariants(distance, duration);
      case 'left':
        return fadeLeftVariants(distance, duration);
      case 'right':
        return fadeRightVariants(distance, duration);
      case 'none':
      default:
        return scaleInVariants(duration);
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.12 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
