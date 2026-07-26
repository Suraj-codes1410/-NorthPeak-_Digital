import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card } from './Card';
import type { Service } from '../../types/content';
import { Layout, Code2, Layers, Zap, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { staggerChild, cardHover } from '../../lib/motion';

const iconMap: Record<string, React.ComponentType<any>> = {
  Layout,
  Code2,
  Layers,
  Zap,
  Eye,
  Sparkles,
};

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.icon] || Sparkles;
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
          'group flex flex-col justify-between h-full bg-surface border border-border/60 rounded-card p-8 shadow-premium',
          'cursor-pointer outline-none focus-ring',
          'transition-all duration-300',
          'hover:border-accent/40 focus-visible:border-accent/40'
        )}
        aria-label={`${service.title} capabilities`}
      >
        <div className="space-y-6">
          {/* Icon */}
          <div className="p-3 bg-accent/5 rounded-xl border border-accent/10 w-fit text-accent transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105">
            <IconComponent className="w-7 h-7" aria-hidden="true" />
          </div>

          {/* Text Details */}
          <div className="space-y-3">
            <h3 className="font-display text-xl font-medium text-primary">{service.title}</h3>
            <p className="font-sans text-sm text-secondary leading-relaxed max-w-[28ch]">
              {service.description}
            </p>
          </div>
        </div>

        {/* Learn More link */}
        <div className="mt-8 flex items-center gap-1.5 text-xs font-mono font-semibold tracking-widest uppercase text-accent opacity-40 translate-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-focus-visible:opacity-100 group-focus-visible:translate-x-1">
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
