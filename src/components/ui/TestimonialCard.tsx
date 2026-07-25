import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card } from './Card';
import type { Testimonial } from '../../types/content';
import { cn } from '../../utils/cn';
import { staggerChild, cardHover } from '../../lib/motion';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : staggerChild()}
      whileHover={shouldReduceMotion ? undefined : cardHover}
      whileFocus={shouldReduceMotion ? undefined : cardHover}
      className="h-full outline-none"
    >
      <Card
        tabIndex={0}
        className={cn(
          'group flex flex-col justify-between h-full bg-surface border border-border/60 rounded-card p-8 md:p-10 shadow-premium',
          'cursor-pointer outline-none focus-ring',
          'transition-all duration-300',
          'hover:border-accent/40 focus-visible:border-accent/40'
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
    </motion.div>
  );
};

export default TestimonialCard;
