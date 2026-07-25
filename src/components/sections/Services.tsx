import React from 'react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ServiceCard } from '../ui/ServiceCard';
import { StaggerGroup } from '../ui/StaggerGroup';
import { servicesData, servicesHeader } from '../../content/services';

export const Services: React.FC = () => {
  return (
    <SectionWrapper
      id="services"
      eyebrow={servicesHeader.eyebrow}
      heading={servicesHeader.heading}
      description={servicesHeader.description}
      alternateBg
    >
      <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
        {servicesData.map((service) => (
          <div key={service.title} className="h-full">
            <ServiceCard service={service} />
          </div>
        ))}
      </StaggerGroup>
    </SectionWrapper>
  );
};

export default Services;
