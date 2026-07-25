import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { buttonHover, buttonTap } from '../../lib/motion';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const MotionButton = motion.button as any;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      isLoading = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();

    return (
      <MotionButton
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        whileHover={shouldReduceMotion || disabled || isLoading ? undefined : buttonHover}
        whileTap={shouldReduceMotion || disabled || isLoading ? undefined : buttonTap}
        className={cn(
          'group inline-flex items-center justify-center font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-lg px-6 py-4 min-h-[44px] focus-ring select-none',
          variant === 'primary' && [
            'bg-primary text-background border border-primary',
            'hover:bg-accent hover:border-accent hover:text-white',
            'disabled:bg-primary/50 disabled:border-transparent',
          ],
          variant === 'secondary' && [
            'bg-transparent text-primary border border-border',
            'hover:bg-surface-alt hover:border-primary',
            'disabled:border-border/50 disabled:text-primary/50',
          ],
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2.5 h-3.5 w-3.5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && (
          <span className="mr-2 inline-flex items-center justify-center transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="ml-2 inline-flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </MotionButton>
    );
  }
);

Button.displayName = 'Button';
export default Button;
