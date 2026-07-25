import React from 'react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { PricingCard } from '../ui/PricingCard';
import { ContourArt } from '../ui/ContourArt';
import { StaggerGroup } from '../ui/StaggerGroup';
import { pricingPlans, pricingHeader } from '../../content/pricing';

export const Pricing: React.FC = () => {
  return (
    <SectionWrapper
      id="pricing"
      eyebrow={pricingHeader.eyebrow}
      heading={pricingHeader.heading}
      description={pricingHeader.description}
      alternateBg
      className="relative"
    >
      {/* Subtle ContourArt Watermark Background */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03] overflow-hidden"
        aria-hidden="true"
      >
        <ContourArt />
      </div>

      {/* Pricing Cards Grid Staggered */}
      <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full items-stretch z-10 relative">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className="h-full">
            <PricingCard plan={plan} />
          </div>
        ))}
      </StaggerGroup>

      {/* Optional Bottom Note */}
      {pricingHeader.bottomNote && (
        <p className="text-center font-sans text-xs text-secondary max-w-sm mx-auto mt-12 md:mt-16 leading-relaxed select-none relative z-10">
          {pricingHeader.bottomNote}
        </p>
      )}
    </SectionWrapper>
  );
};

export default Pricing;
