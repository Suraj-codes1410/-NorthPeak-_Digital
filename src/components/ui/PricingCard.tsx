import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import type { Plan } from '../../types/content';
import { Check, Minus, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Badge } from './Badge';

interface PricingCardProps {
  plan: Plan;
  index: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  const animationDelay = `${index * 150}ms`;

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <Card
      tabIndex={0}
      style={{ animationDelay }}
      className={cn(
        'group flex flex-col justify-between h-full bg-surface border rounded-card p-8 md:p-10 transition-all duration-300 relative outline-none focus-ring animate-fade-in-up',
        plan.featured
          ? [
              'border-border/85 shadow-premium-lg lg:scale-[1.02] lg:-translate-y-1 z-10',
              'hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_24px_48px_rgba(37,99,235,0.08)]',
              'focus-visible:-translate-y-1.5 focus-visible:border-accent/50 focus-visible:shadow-[0_24px_48px_rgba(37,99,235,0.08)]',
            ]
          : [
              'border-border/60 shadow-premium',
              'hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_20px_40px_-6px_rgba(17,24,39,0.06)]',
              'focus-visible:-translate-y-2 focus-visible:border-accent/40 focus-visible:shadow-[0_20px_40px_-6px_rgba(17,24,39,0.06)]',
            ]
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
          <h3 className="font-display text-2xl font-semibold text-primary mb-2">
            {plan.name}
          </h3>
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
  );
};

export default PricingCard;
