export interface NavLink {
  label: string;
  href: string;
}

export interface TrustStat {
  value: string;
  label: string;
}

export interface HeroCTA {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCTA: HeroCTA;
  secondaryCTA: HeroCTA;
  trustStats: TrustStat[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  name: string;
  industry: string;
  timeline: string;
  stack: string[];
  outcome: string;
}

export interface Metric {
  value: string;
  suffix: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  name: string;
  price: string;
  tagline: string;
  features: PricingFeature[];
  featured: boolean;
  ctaText: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface BudgetOption {
  label: string;
  value: string;
}
