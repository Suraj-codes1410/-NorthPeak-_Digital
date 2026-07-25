import React from 'react';

export const ContourArt: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center select-none overflow-hidden">
      {/* Background Dot Grid */}
      <svg
        className="absolute inset-0 w-full h-full text-border/40 pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating Geometric Thin Circles & Arcs */}
      <svg
        className="w-[85%] h-[85%] text-primary/10 max-w-[450px]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Large Concentric Thin Circles */}
        <circle
          cx="200"
          cy="200"
          r="150"
          stroke="currentColor"
          strokeWidth="0.75"
          className="opacity-40 animate-contour-draw-slow"
        />
        <circle
          cx="200"
          cy="200"
          r="100"
          stroke="currentColor"
          strokeWidth="0.5"
          className="opacity-30 animate-contour-draw-fast"
        />
        
        {/* Architectural Diagonal Axes */}
        <line
          x1="50"
          y1="50"
          x2="350"
          y2="350"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 8"
          className="opacity-20"
        />
        <line
          x1="350"
          y1="50"
          x2="50"
          y2="350"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 8"
          className="opacity-20"
        />

        {/* Curved Contour Lines (Simulating topographical architectural draft) */}
        <path
          d="M 50,200 Q 150,80 350,200"
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-50 animate-contour-draw"
        />
        <path
          d="M 50,250 Q 200,100 350,250"
          stroke="currentColor"
          strokeWidth="1.25"
          className="opacity-40 animate-contour-draw"
        />
        <path
          d="M 80,120 Q 200,320 320,120"
          stroke="currentColor"
          strokeWidth="0.75"
          className="opacity-60 animate-contour-draw"
        />

        {/* Subtle Anchor Points */}
        <circle cx="200" cy="200" r="3.5" fill="currentColor" className="text-gold" />
        <circle cx="150" cy="80" r="2.5" fill="currentColor" className="text-accent/50" />
        <circle cx="200" cy="100" r="2.5" fill="currentColor" className="text-accent/50" />
      </svg>
    </div>
  );
};
export default ContourArt;
