import React from 'react';
import { cn } from '../../utils/cn';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  heading?: React.ReactNode;
  description?: React.ReactNode;
  alternateBg?: boolean;
  align?: 'left' | 'center';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
}

export const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  (
    {
      className,
      eyebrow,
      heading,
      description,
      alternateBg = false,
      align = 'left',
      maxWidth = 'lg',
      id,
      children,
      ...props
    },
    ref
  ) => {
    const maxWidthClasses = {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-7xl',
      xl: 'max-w-[90rem]',
      full: 'max-w-full',
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'py-16 md:py-24 lg:py-32 w-full transition-colors duration-300',
          alternateBg ? 'bg-surface-alt' : 'bg-background',
          className
        )}
        {...props}
      >
        <div className={cn('mx-auto px-6 md:px-12 lg:px-16 w-full', maxWidthClasses[maxWidth])}>
          <Reveal direction="up" delay={0.05} duration={0.6} distance={16} once={true}>
            {(eyebrow || heading || description) && (
              <div
                className={cn(
                  'flex flex-col mb-12 md:mb-16 lg:mb-20',
                  align === 'center' ? 'items-center text-center' : 'items-start text-left'
                )}
              >
                {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
                {heading && (
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-primary leading-[1.15] max-w-3xl font-display">
                    {heading}
                  </h2>
                )}
                {description && (
                  <p
                    className={cn(
                      'text-base md:text-lg text-secondary font-sans leading-relaxed mt-4 max-w-2xl',
                      align === 'center' && 'mx-auto'
                    )}
                  >
                    {description}
                  </p>
                )}
              </div>
            )}
            <div className="w-full">{children}</div>
          </Reveal>
        </div>
      </section>
    );
  }
);

SectionWrapper.displayName = 'SectionWrapper';
export default SectionWrapper;
