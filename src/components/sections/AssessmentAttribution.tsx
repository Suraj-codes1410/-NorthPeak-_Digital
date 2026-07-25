import React from 'react';
import { SectionWrapper } from '../layout/SectionWrapper';

export const AssessmentAttribution: React.FC = () => {
  return (
    <SectionWrapper
      id="assessment-attribution"
      alternateBg={false}
      className="py-12 border-t border-border/40 bg-surface-alt/10"
    >
      <div className="max-w-3xl mx-auto text-center space-y-3 select-none">
        <span className="font-mono text-[9px] font-semibold text-gold uppercase tracking-widest">
          Assessment Submission
        </span>
        <h3 className="font-display text-lg font-medium text-primary">
          Digital Heroes Evaluation Task
        </h3>
        <p className="font-sans text-xs text-secondary max-w-md mx-auto leading-relaxed">
          This digital interface was designed and engineered as a front-end coding submission, showcasing a modular, high-fidelity Scandinavian editorial design system.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default AssessmentAttribution;
