import React from 'react';
import { Card } from './Card';
import type { Service } from '../../types/content';
import { Layout, Code2, Layers, Zap, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

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
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = iconMap[service.icon] || Sparkles;

  // Stagger delays based on grid position
  const animationDelay = `${index * 100}ms`;

  return (
    <Card
      tabIndex={0}
      style={{ animationDelay }}
      className={cn(
        'group flex flex-col justify-between h-full bg-surface border border-border/60 rounded-card p-8 shadow-premium',
        'cursor-pointer outline-none focus-ring',
        'hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_36px_-4px_rgba(17,24,39,0.06)]',
        'focus-visible:-translate-y-1 focus-visible:border-accent/40 focus-visible:shadow-[0_16px_36px_-4px_rgba(17,24,39,0.06)]',
        'transition-all duration-300 animate-fade-in-up'
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
          <h3 className="font-display text-xl font-medium text-primary">
            {service.title}
          </h3>
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
  );
};

export default ServiceCard;
