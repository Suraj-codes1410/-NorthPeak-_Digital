import React from 'react';
import { Card } from './Card';

export const MetricCard: React.FC = () => {
  return (
    <Card className="absolute bottom-6 right-6 md:bottom-12 md:right-12 p-4 md:p-5 max-w-[210px] bg-surface/95 backdrop-blur-sm border border-border/50 shadow-premium select-none animate-in fade-in slide-in-from-bottom duration-500 delay-300">
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center gap-2 pb-2 border-b border-border/40">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          <span className="text-[9px] font-mono font-semibold tracking-wider text-secondary uppercase">
            STUDIO VERIFIED VITAL
          </span>
        </div>

        <div className="space-y-2.5">
          {/* Performance */}
          <div className="flex items-center justify-between gap-6">
            <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">
              Performance
            </span>
            <span className="text-xs font-semibold text-emerald-600 font-mono">98</span>
          </div>

          {/* Accessibility */}
          <div className="flex items-center justify-between gap-6">
            <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">
              Accessibility
            </span>
            <span className="text-xs font-semibold text-emerald-600 font-mono">100</span>
          </div>

          {/* Lighthouse */}
          <div className="flex items-center justify-between gap-6">
            <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">
              Lighthouse
            </span>
            <span className="text-xs font-semibold text-emerald-600 font-mono">98</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default MetricCard;
