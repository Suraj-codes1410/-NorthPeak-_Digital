import type { Project } from '../types/content';

export const workProjects: Project[] = [
  {
    name: 'Aura Health',
    industry: 'Digital Healthcare',
    timeline: '12 Weeks',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    outcome:
      'Reconstructed patient consulting portal resulting in a 42% reduction in booking drop-offs and a 95% accessibility score.',
  },
  {
    name: 'Vektor Capital',
    industry: 'Asset Management',
    timeline: '16 Weeks',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Zod'],
    outcome:
      'Engineered an ultra-fast asset tracking interface, driving a 28% increase in daily active dashboard users.',
  },
  {
    name: 'Lumen Academy',
    industry: 'Online Education',
    timeline: '8 Weeks',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'React Hook Form'],
    outcome:
      'Designed and shipped a modular learning management system, scaling serverless onboarding to 250k users monthly.',
  },
];

export const workHeader = {
  eyebrow: 'SELECTED WORK',
  heading: 'Projects built with clarity, performance, and purpose.',
  description:
    "Showcase a curated selection of projects that reflect NorthPeak's approach to engineering and digital design.",
};
