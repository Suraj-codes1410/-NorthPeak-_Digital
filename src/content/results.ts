import type { Metric, Testimonial } from '../types/content';

export const metrics: Metric[] = [
  {
    value: '+184',
    suffix: '%',
    label: 'Average conversion growth across client platform relaunches',
  },
  {
    value: '6',
    suffix: ' Weeks',
    label: 'Typical delivery timeline from wireframe to production deployment',
  },
  {
    value: '9.4',
    suffix: '/10',
    label: 'Client satisfaction score, reflecting our emphasis on communication',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'NorthPeak did not just deliver clean code—they established a structured design system that empowered our product teams to ship features with total confidence.',
    name: 'Helena Sørensen',
    role: 'Head of Product',
    company: 'Vektor Capital',
  },
  {
    quote: 'Their attention to typographic detail and performance optimization was exceptional. They operate as a natural, highly skilled extension of our engineering division.',
    name: 'Marcus Thorne',
    role: 'Technical Director',
    company: 'Aura Health',
  },
];

export const resultsHeader = {
  eyebrow: 'WHAT IT ADDS UP TO',
  heading: 'Results that speak louder than deliverables.',
  description: 'Focus on measurable business impact rather than features.',
};
