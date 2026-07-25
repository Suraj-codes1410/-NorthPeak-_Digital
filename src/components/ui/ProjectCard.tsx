import React from 'react';
import { Card } from './Card';
import type { Project } from '../../types/content';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const animationDelay = `${index * 120}ms`;

  const renderAbstractVisual = () => {
    const baseVisualStyles =
      'relative w-full h-48 bg-surface-alt/80 overflow-hidden flex items-center justify-center border-b border-border/40 transition-colors group-hover:bg-surface-alt/50 group-focus-visible:bg-surface-alt/50 duration-300';

    if (project.name === 'Aura Health') {
      return (
        <div className={baseVisualStyles}>
          {/* Aura Health Healthcare composition */}
          <svg className="absolute inset-0 w-full h-full text-border/20" aria-hidden="true">
            <defs>
              <pattern id="grid-aura" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="0.8" fill="currentColor" />
              </pattern>
              <radialGradient id="aura-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-aura)" />
            <circle cx="200" cy="100" r="80" fill="url(#aura-glow)" />
          </svg>

          <svg
            className="w-4/5 h-3/4 text-accent/15 transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
            viewBox="0 0 200 120"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="100" cy="60" r="50" stroke="currentColor" strokeWidth="0.5" />
            <circle
              cx="100"
              cy="60"
              r="35"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="3 3"
            />
            <path d="M 20,60 Q 60,30 100,60 T 180,60" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="60" r="3" fill="#C8A64D" />
          </svg>
        </div>
      );
    }

    if (project.name === 'Vektor Capital') {
      return (
        <div className={baseVisualStyles}>
          {/* Vektor Capital Fintech composition */}
          <svg className="absolute inset-0 w-full h-full text-border/20" aria-hidden="true">
            <defs>
              <pattern id="grid-vektor" width="16" height="16" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="16" y2="0" stroke="currentColor" strokeWidth="0.25" />
                <line x1="0" y1="0" x2="0" y2="16" stroke="currentColor" strokeWidth="0.25" />
              </pattern>
              <linearGradient id="vektor-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C8A64D" stopOpacity="0.01" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.06" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-vektor)" />
            <rect width="100%" height="100%" fill="url(#vektor-grad)" />
          </svg>

          <svg
            className="w-4/5 h-3/4 text-primary/10 transition-transform duration-500 group-hover:translate-y-[-2px] group-focus-visible:translate-y-[-2px]"
            viewBox="0 0 200 120"
            fill="none"
            aria-hidden="true"
          >
            <line x1="30" y1="90" x2="170" y2="90" stroke="currentColor" strokeWidth="0.5" />
            <line x1="30" y1="30" x2="30" y2="90" stroke="currentColor" strokeWidth="0.5" />
            <path d="M 30,80 L 70,70 L 110,40 L 150,50 L 170,20" stroke="currentColor" strokeWidth="1.25" />
            <circle cx="110" cy="40" r="3" fill="#2563EB" />
            <circle cx="170" cy="20" r="3.5" fill="#C8A64D" />
          </svg>
        </div>
      );
    }

    // Default: Lumen Academy
    return (
      <div className={baseVisualStyles}>
        {/* Lumen Academy Education composition */}
        <svg className="absolute inset-0 w-full h-full text-border/20" aria-hidden="true">
          <defs>
            <pattern id="grid-lumen" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="0.6" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-lumen)" />
        </svg>

        <svg
          className="w-4/5 h-3/4 text-primary/10 transition-transform duration-500 group-hover:rotate-6 group-focus-visible:rotate-6"
          viewBox="0 0 200 120"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="100" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" />
          <polygon
            points="100,20 135,45 135,75 100,100 65,75 65,45"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="2 4"
          />
          <line
            x1="100"
            y1="10"
            x2="100"
            y2="110"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="5 5"
          />
          <line
            x1="50"
            y1="60"
            x2="150"
            y2="60"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="5 5"
          />
          <circle cx="100" cy="60" r="4" fill="#C8A64D" />
        </svg>
      </div>
    );
  };

  return (
    <Card
      tabIndex={0}
      style={{ animationDelay }}
      className={cn(
        'group flex flex-col justify-between h-full bg-surface border border-border/60 rounded-card overflow-hidden p-0 shadow-premium',
        'cursor-pointer outline-none focus-ring',
        'hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_40px_-6px_rgba(17,24,39,0.07)]',
        'focus-visible:-translate-y-1.5 focus-visible:border-accent/40 focus-visible:shadow-[0_20px_40px_-6px_rgba(17,24,39,0.07)]',
        'transition-all duration-300 animate-fade-in-up'
      )}
      aria-label={`${project.name} Portfolio Project`}
    >
      {/* Visual Composition Top */}
      {renderAbstractVisual()}

      {/* Card Content Details */}
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          {/* Title */}
          <h3 className="font-display text-2xl font-medium text-primary mb-1 text-left">
            {project.name}
          </h3>

          {/* Metadata Row */}
          <div className="grid grid-cols-3 gap-2 border-t border-b border-border/40 py-4 my-5 text-left">
            <div>
              <span className="block text-[8px] font-mono text-secondary uppercase tracking-widest mb-1.5 select-none">
                Industry
              </span>
              <span
                className="block text-[10px] font-mono font-semibold text-primary uppercase truncate"
                title={project.industry}
              >
                {project.industry.split(' ')[0]}
              </span>
            </div>
            <div>
              <span className="block text-[8px] font-mono text-secondary uppercase tracking-widest mb-1.5 select-none">
                Timeline
              </span>
              <span className="block text-[10px] font-mono font-semibold text-primary uppercase">
                {project.timeline}
              </span>
            </div>
            <div>
              <span className="block text-[8px] font-mono text-secondary uppercase tracking-widest mb-1.5 select-none">
                Tech Stack
              </span>
              <span
                className="block text-[10px] font-mono font-semibold text-primary truncate"
                title={project.stack.join(', ')}
              >
                {project.stack[0]} • {project.stack[1]}
              </span>
            </div>
          </div>

          {/* Outcome highlight */}
          <div className="text-left border-l-2 border-gold/40 pl-3 my-4">
            <p className="font-sans text-xs font-medium text-primary leading-relaxed italic">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Explore CTA Link */}
        <div className="mt-6 flex items-center gap-1.5 text-xs font-mono font-semibold tracking-widest uppercase text-primary transition-all duration-300 group-hover:text-accent group-focus-visible:text-accent">
          <span className="relative select-none">
            Explore Project
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
          </span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
