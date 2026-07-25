import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerParent } from '../../lib/motion';

interface StaggerGroupProps {
  children: React.ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  once?: boolean;
  className?: string;
}

export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  staggerDelay = 0.08,
  initialDelay = 0,
  once = true,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.08 }}
      variants={staggerParent(staggerDelay, initialDelay)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerGroup;
