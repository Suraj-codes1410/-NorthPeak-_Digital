import type { BudgetOption } from '../types/content';

export const SECTION_IDS = {
  HERO: 'hero',
  WORK: 'work',
  SERVICES: 'services',
  PRICING: 'pricing',
  CONTACT: 'contact',
  TOKENS: 'tokens',
  COMPONENTS: 'components',
  FORMS: 'forms',
} as const;

export const BUDGET_OPTIONS: BudgetOption[] = [
  { label: 'Select a budget range', value: '' },
  { label: 'Under $5,000', value: 'under-5k' },
  { label: '$5,000 – $10,000', value: '5k-10k' },
  { label: '$10,000 – $25,000', value: '10k-25k' },
  { label: 'Above $25,000', value: 'above-25k' },
];

export const ANIMATION_DURATIONS = {
  FAST: 150,
  DEFAULT: 300,
  SLOW: 500,
} as const;

export const LAYOUT = {
  CONTAINER_MAX_WIDTH: 'max-w-7xl',
  GRID_GAP: 'gap-6 md:gap-8',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;
