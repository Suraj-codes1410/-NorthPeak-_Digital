import React from 'react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ProjectCard } from '../ui/ProjectCard';
import { StaggerGroup } from '../ui/StaggerGroup';
import { workProjects, workHeader } from '../../content/work';

export const Work: React.FC = () => {
  return (
    <SectionWrapper
      id="work"
      eyebrow={workHeader.eyebrow}
      heading={workHeader.heading}
      description={workHeader.description}
      alternateBg={false}
    >
      <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
        {workProjects.map((project) => (
          <div key={project.name} className="h-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </StaggerGroup>
    </SectionWrapper>
  );
};

export default Work;
