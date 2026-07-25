import React from 'react';
import { cn } from '../../utils/cn';

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const Eyebrow = React.forwardRef<HTMLSpanElement, EyebrowProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'block font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-gold select-none',
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Eyebrow.displayName = 'Eyebrow';
