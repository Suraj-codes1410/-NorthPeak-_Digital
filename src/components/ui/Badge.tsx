import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'gold' | 'neutral';
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'neutral', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-1 rounded-full font-mono text-[10px] font-semibold tracking-widest uppercase select-none transition-colors duration-200 border',
          variant === 'accent' && 'bg-accent/5 text-accent border-accent/20',
          variant === 'gold' && 'bg-gold/5 text-gold border-gold/20',
          variant === 'neutral' &&
            'bg-surface-alt text-secondary border-border hover:border-secondary/20',
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
