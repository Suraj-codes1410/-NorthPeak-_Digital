import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card } from './Card';
import { Button } from './Button';
import type { Plan } from '../../types/content';
import { Check, Minus, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Badge } from './Badge';
import { staggerChild, cardHover, DURATIONS, EASINGS } from '../../lib/motion';

interface PricingCardProps {
  plan: Plan;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  // Featured card lifts slightly less (2px additional lift) than normal cards (6px lift) to feel grounded
  const hoverConfig = plan.featured
    ? {
        y: -6,
        boxShadow: '0 24px 48px rgba(37,99,235,0.08)',
        transition: { duration: DURATIONS.normal, ease: EASINGS.hover },
      }
    : cardHover;

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : staggerChild()}
      whileHover={shouldReduceMotion ? undefined : hoverConfig}
      whileFocus={shouldReduceMotion ? undefined : hoverConfig}
      className={cn('h-full outline-none', plan.featured && 'lg:scale-[1.02] z-10')}
    >
      <Card
        tabIndex={0}
        className={cn(
          'group flex flex-col justify-between h-full bg-surface border rounded-card p-8 md:p-10 transition-all duration-300 relative outline-none focus-ring',
          plan.featured ? 'border-border/85 shadow-premium-lg' : 'border-border/60 shadow-premium',
          'hover:border-accent/40 focus-visible:border-accent/40'
        )}
        aria-label={`${plan.name} pricing plan: ${plan.price}`}
      >
        <div className="space-y-6 text-left">
          <div>
            {/* Gold Badge for Featured Plan */}
            {plan.featured && (
              <div className="mb-4">
                <Badge
                  variant="gold"
                  className="text-[9px] font-mono tracking-widest uppercase py-1 px-3"
                >
                  RECOMMENDED
                </Badge>
              </div>
            )}
            {/* Plan Name */}
            <h3 className="font-display text-2xl font-semibold text-primary mb-2">{plan.name}</h3>
            {/* Tagline */}
            <p className="font-sans text-xs text-secondary leading-relaxed min-h-[32px]">
              {plan.tagline}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 py-4 border-t border-b border-border/40">
            <span className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-primary leading-none">
              {plan.price}
            </span>
            {plan.price !== 'Custom' && (
              <span className="text-[10px] font-mono uppercase tracking-wider text-secondary select-none">
                / Project
              </span>
            )}
          </div>

          {/* Feature List */}
          <ul className="space-y-3.5 my-6" aria-label={`Features included in ${plan.name} plan`}>
            {plan.features.map((feature) => (
              <li
                key={feature.text}
                className="flex items-start gap-3 text-xs leading-relaxed text-primary"
              >
                {feature.included ? (
                  <span
                    className="p-0.5 bg-accent/5 rounded border border-accent/15 text-accent mt-0.5"
                    aria-hidden="true"
                  >
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                ) : (
                  <span
                    className="p-0.5 bg-secondary/5 rounded border border-border text-secondary/30 mt-0.5"
                    aria-hidden="true"
                  >
                    <Minus className="w-3.5 h-3.5 stroke-[1.5]" />
                  </span>
                )}
                <span
                  className={cn(
                    'font-sans text-left',
                    !feature.included && 'text-secondary/50 line-through opacity-70'
                  )}
                >
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button CTA */}
        <div className="mt-8 pt-6 border-t border-border/40">
          <Button
            variant={plan.featured ? 'primary' : 'secondary'}
            className="w-full justify-center"
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            onClick={handleCtaClick}
          >
            {plan.ctaText}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
