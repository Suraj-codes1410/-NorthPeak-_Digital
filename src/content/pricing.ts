import type { Plan } from '../types/content';

export const pricingPlans: Plan[] = [
  {
    name: 'Basecamp',
    price: '$2,999',
    tagline: 'Ideal for early-stage teams looking to launch a bespoke, high-performance web experience.',
    featured: false,
    ctaText: 'Book Discovery Call',
    features: [
      { text: 'Bespoke Scandinavian UI design', included: true },
      { text: 'Responsive React & Tailwind engineering', included: true },
      { text: 'Interactive animations and assets', included: true },
      { text: 'SEO & Performance optimization pre-configured', included: true },
      { text: 'Custom CMS integration', included: false },
      { text: 'Dedicated Slack channel & support', included: false },
    ],
  },
  {
    name: 'Ascent',
    price: '$4,999',
    tagline: 'Bespoke design system construction and multi-page application scaling.',
    featured: true,
    ctaText: 'Start a Project',
    features: [
      { text: 'Bespoke Scandinavian UI design', included: true },
      { text: 'Responsive React & Tailwind engineering', included: true },
      { text: 'Interactive animations and assets', included: true },
      { text: 'SEO & Performance optimization pre-configured', included: true },
      { text: 'Custom CMS integration', included: true },
      { text: 'Dedicated Slack channel & support', included: true },
    ],
  },
  {
    name: 'Summit',
    price: 'Custom',
    tagline: 'Full enterprise-level product planning, audit alignment, and front-end scaling support.',
    featured: false,
    ctaText: 'Request Proposal',
    features: [
      { text: 'Custom creative engineering audits', included: true },
      { text: 'Reusable React component system delivery', included: true },
      { text: 'Deep optimization and server configuration', included: true },
      { text: 'Comprehensive accessibility support (WCAG 2.1)', included: true },
      { text: 'Full-time dedicated creative engineer', included: true },
      { text: 'Bespoke backend and cloud configurations', included: true },
    ],
  },
];

export const pricingHeader = {
  eyebrow: 'PICK YOUR ROUTE',
  heading: 'Choose the engagement that fits your climb.',
  description: 'Each engagement is designed around different project scopes while maintaining the same attention to craftsmanship and engineering quality.',
  bottomNote: "Every engagement begins with a collaborative discovery session to ensure we're solving the right problem.",
};
