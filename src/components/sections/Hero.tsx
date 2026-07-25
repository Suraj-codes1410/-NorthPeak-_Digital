import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ContourArt } from '../ui/ContourArt';
import { MetricCard } from '../ui/MetricCard';
import { heroContent } from '../../content/hero';
import { ArrowRight } from 'lucide-react';
import { fadeUpVariants, scaleInVariants, DURATIONS, EASINGS } from '../../lib/motion';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const handlePrimaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#work');
    }
  };

  const handleSecondaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  return (
    <SectionWrapper id="hero" className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full min-h-[60vh]">
        {/* Left column (55%) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={shouldReduceMotion ? {} : fadeUpVariants(16, DURATIONS.reveal)}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <Eyebrow className="mb-4">{heroContent.eyebrow}</Eyebrow>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-primary leading-[1.1] mb-6 max-w-2xl">
            {heroContent.headline}
          </h1>

          <p className="font-sans text-base md:text-lg text-secondary leading-relaxed mb-8 max-w-sm">
            {heroContent.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12 sm:mb-16">
            <Button
              variant="primary"
              onClick={handlePrimaryClick}
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              {heroContent.primaryCTA.label}
            </Button>
            <Button
              variant="secondary"
              onClick={handleSecondaryClick}
            >
              {heroContent.secondaryCTA.label}
            </Button>
          </div>

          {/* Trust Row */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-8 border-t border-border/50 w-full">
            {heroContent.trustStats.map((stat, idx) => (
              <React.Fragment key={stat.label}>
                {idx > 0 && (
                  <span className="h-6 w-px bg-border hidden sm:inline" aria-hidden="true" />
                )}
                <div className="flex flex-col gap-0.5">
                  <span className="font-display text-lg md:text-xl font-medium text-primary leading-none">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-secondary uppercase">
                    {stat.label}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Right column (45%) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={shouldReduceMotion ? {} : scaleInVariants(DURATIONS.reveal)}
          className="lg:col-span-5 relative w-full flex items-center justify-center"
        >
          <ContourArt />
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: DURATIONS.reveal,
              delay: 0.25,
              ease: EASINGS.standard,
            }}
            className="absolute bottom-0 right-0 pointer-events-none"
          >
            <MetricCard />
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
