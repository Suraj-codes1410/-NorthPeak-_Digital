import React from 'react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { CountUp } from '../ui/CountUp';
import { TestimonialCard } from '../ui/TestimonialCard';
import { StaggerGroup } from '../ui/StaggerGroup';
import { metrics, testimonials, resultsHeader } from '../../content/results';

export const Results: React.FC = () => {
  return (
    <SectionWrapper
      id="results"
      eyebrow={resultsHeader.eyebrow}
      heading={resultsHeader.heading}
      description={resultsHeader.description}
      alternateBg
    >
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 w-full text-left my-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-3">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-none">
              <CountUp value={metric.value} suffix={metric.suffix} />
            </span>
            <span className="font-mono text-[10px] tracking-widest text-secondary uppercase max-w-[28ch] leading-relaxed">
              {metric.label}
            </span>
          </div>
        ))}
      </div>

      {/* Decorative Understated Divider */}
      <div className="w-full h-px bg-border/80 my-16 md:my-20" aria-hidden="true" />

      {/* Testimonials Grid Staggered */}
      <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="h-full">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </StaggerGroup>
    </SectionWrapper>
  );
};

export default Results;
