import React from 'react';
import { Card } from './Card';
import type { Testimonial } from '../../types/content';
import { cn } from '../../utils/cn';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  const animationDelay = `${index * 150}ms`;

  return (
    <Card
      tabIndex={0}
      style={{ animationDelay }}
      className={cn(
        'group flex flex-col justify-between h-full bg-surface border border-border/60 rounded-card p-8 md:p-10 shadow-premium',
        'cursor-pointer outline-none focus-ring',
        'hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_36px_-4px_rgba(17,24,39,0.05)]',
        'focus-visible:-translate-y-1 focus-visible:border-accent/40 focus-visible:shadow-[0_16px_36px_-4px_rgba(17,24,39,0.05)]',
        'transition-all duration-300 animate-fade-in-up'
      )}
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      <div className="space-y-6 text-left">
        {/* Quotation icon */}
        <span
          className="font-display text-5xl text-gold/30 select-none block leading-none h-4"
          aria-hidden="true"
        >
          “
        </span>

        {/* Quote text */}
        <p className="font-sans text-sm md:text-base text-primary leading-relaxed max-w-lg">
          {testimonial.quote}
        </p>
      </div>

      {/* Author Info */}
      <div className="mt-8 pt-6 border-t border-border/40 text-left">
        <h4 className="font-display text-lg font-medium text-primary mb-1">
          {testimonial.name}
        </h4>
        <div className="flex flex-wrap items-center gap-x-2 text-[10px] font-mono uppercase tracking-wider">
          <span className="text-secondary">{testimonial.role}</span>
          <span className="w-1 h-1 rounded-full bg-border" aria-hidden="true" />
          <span className="text-gold font-semibold">{testimonial.company}</span>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
