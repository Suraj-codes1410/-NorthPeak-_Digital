import { useState } from 'react';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { Badge } from './components/ui/Badge';
import { Eyebrow } from './components/ui/Eyebrow';
import { FormField } from './components/ui/FormField';
import { SectionWrapper } from './components/layout/SectionWrapper';
import { ArrowRight, Mail, Sparkles, Send, Check, Settings } from 'lucide-react';
import { BUDGET_OPTIONS } from './lib/constants';
import { Navbar } from './components/layout/Navbar';

function App() {
  // Demo states for FormFields
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('invalid-email-address'); // Preset with invalid to show error
  const [formService, setFormService] = useState('design');
  const [formBudget, setFormBudget] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [btnLoading, setBtnLoading] = useState(false);

  // Email validation helper
  const isEmailInvalid = formEmail !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formEmail);

  const handleSimulateLoad = () => {
    setBtnLoading(true);
    setTimeout(() => {
      setBtnLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Design System Header */}
      <header className="border-b border-border py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="gold">Phase 01 Release</Badge>
                <Badge variant="accent">Design System</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary leading-tight font-display">
                NorthPeak Digital
              </h1>
              <p className="font-sans text-base md:text-lg text-secondary mt-4 leading-relaxed">
                A modular, high-fidelity library of reusable UI primitives designed with a warm, calm, and tactile Scandinavian editorial aesthetic.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 bg-surface-alt rounded-md border border-border text-secondary">
                React 19.x
              </span>
              <span className="px-3 py-1.5 bg-surface-alt rounded-md border border-border text-secondary">
                Tailwind CSS 3
              </span>
              <span className="px-3 py-1.5 bg-surface-alt rounded-md border border-border text-secondary">
                TypeScript 5
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Design Tokens */}
      <SectionWrapper
        id="tokens"
        eyebrow="01 / Foundation"
        heading="Design Tokens & Styling"
        description="Every color, typeface, shadow, and border radius is configured through semantic theme variables to guarantee brand coherence."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Color Palettes */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs font-semibold tracking-wider text-secondary uppercase">
              Semantic Color Scale
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* Background */}
              <div className="flex flex-col gap-2">
                <div className="h-16 rounded-lg border border-border bg-background" />
                <div>
                  <span className="block text-xs font-semibold text-primary">Background</span>
                  <span className="block text-[10px] font-mono text-secondary">#F8F7F4</span>
                </div>
              </div>

              {/* Surface */}
              <div className="flex flex-col gap-2">
                <div className="h-16 rounded-lg border border-border bg-surface" />
                <div>
                  <span className="block text-xs font-semibold text-primary">Surface</span>
                  <span className="block text-[10px] font-mono text-secondary">#FFFFFF</span>
                </div>
              </div>

              {/* Alternate Surface */}
              <div className="flex flex-col gap-2">
                <div className="h-16 rounded-lg border border-border bg-surface-alt" />
                <div>
                  <span className="block text-xs font-semibold text-primary">Alternate Surface</span>
                  <span className="block text-[10px] font-mono text-secondary">#F2F1EC</span>
                </div>
              </div>

              {/* Primary Text */}
              <div className="flex flex-col gap-2">
                <div className="h-16 rounded-lg border border-border bg-primary" />
                <div>
                  <span className="block text-xs font-semibold text-primary">Primary Text</span>
                  <span className="block text-[10px] font-mono text-secondary">#111827</span>
                </div>
              </div>

              {/* Secondary Text */}
              <div className="flex flex-col gap-2">
                <div className="h-16 rounded-lg border border-border bg-secondary" />
                <div>
                  <span className="block text-xs font-semibold text-primary">Secondary Text</span>
                  <span className="block text-[10px] font-mono text-secondary">#6B7280</span>
                </div>
              </div>

              {/* Border */}
              <div className="flex flex-col gap-2">
                <div className="h-16 rounded-lg border border-border bg-border" />
                <div>
                  <span className="block text-xs font-semibold text-primary">Border</span>
                  <span className="block text-[10px] font-mono text-secondary">#E5E7EB</span>
                </div>
              </div>

              {/* Accent */}
              <div className="flex flex-col gap-2">
                <div className="h-16 rounded-lg border border-border bg-accent" />
                <div>
                  <span className="block text-xs font-semibold text-primary">Accent</span>
                  <span className="block text-[10px] font-mono text-secondary">#2563EB</span>
                </div>
              </div>

              {/* Gold */}
              <div className="flex flex-col gap-2">
                <div className="h-16 rounded-lg border border-border bg-gold" />
                <div>
                  <span className="block text-xs font-semibold text-primary">Gold Accent</span>
                  <span className="block text-[10px] font-mono text-secondary">#C8A64D</span>
                </div>
              </div>
            </div>
          </div>

          {/* Typography Scale */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs font-semibold tracking-wider text-secondary uppercase">
              Typography System
            </h3>
            <div className="space-y-6">
              {/* Display */}
              <div className="pb-4 border-b border-border">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-secondary">Display Font (Fraunces)</span>
                  <span className="text-[10px] font-mono text-gold bg-gold/5 px-2 py-0.5 rounded">Serif</span>
                </div>
                <h4 className="font-display text-2xl md:text-3xl text-primary font-medium tracking-tight">
                  Calm & Elegant Architecture
                </h4>
              </div>

              {/* Sans */}
              <div className="pb-4 border-b border-border">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-secondary">Body Font (Inter)</span>
                  <span className="text-[10px] font-mono text-accent bg-accent/5 px-2 py-0.5 rounded">Sans</span>
                </div>
                <p className="font-sans text-sm text-primary leading-relaxed">
                  Design shapes our daily lives and physical environment. High-fidelity layouts require pixel precision and clean visual hierarchy.
                </p>
              </div>

              {/* Mono */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-secondary">Mono Font (IBM Plex Mono)</span>
                  <span className="text-[10px] font-mono text-secondary bg-surface-alt px-2 py-0.5 rounded">Mono</span>
                </div>
                <code className="block font-mono text-xs text-primary leading-relaxed bg-surface-alt/50 border border-border/80 p-3 rounded-md whitespace-pre">
                  {`const studio = "NorthPeak Digital";\nconsole.log(\`handcrafted in \${studio}\`);`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 2: Reusable UI Components */}
      <SectionWrapper
        id="services"
        eyebrow="02 / Interface"
        heading="tactile UI components"
        description="Beautiful, robust components equipped with full keyboard accessibility, micro-animations, standard and loading states."
        alternateBg
      >
        <div className="space-y-16">
          {/* Subsection: Buttons */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs font-semibold tracking-wider text-secondary uppercase pb-2 border-b border-border">
              Buttons & Action States
            </h3>
            <div className="flex flex-col gap-6">
              {/* Primary Buttons */}
              <div className="space-y-3">
                <span className="block text-xs font-mono text-secondary">Primary Variant (bg-primary)</span>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary">Primary Action</Button>
                  <Button variant="primary" leftIcon={<Mail className="w-3.5 h-3.5" />}>
                    Left Icon
                  </Button>
                  <Button variant="primary" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Right Icon
                  </Button>
                  <Button variant="primary" isLoading>
                    Loading
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              {/* Secondary Buttons */}
              <div className="space-y-3">
                <span className="block text-xs font-mono text-secondary">Secondary Variant (border-border)</span>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="secondary">Secondary Action</Button>
                  <Button variant="secondary" leftIcon={<Settings className="w-3.5 h-3.5" />}>
                    Left Icon
                  </Button>
                  <Button variant="secondary" rightIcon={<Sparkles className="w-3.5 h-3.5" />}>
                    Right Icon
                  </Button>
                  <Button variant="secondary" isLoading>
                    Loading
                  </Button>
                  <Button variant="secondary" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              {/* Dynamic Interactive Demo */}
              <div className="pt-4">
                <div className="p-6 bg-surface border border-border rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-1">State Transition Simulator</h4>
                    <p className="text-xs text-secondary">Click the button to simulate a 2-second asynchronous API submission process.</p>
                  </div>
                  <Button
                    variant="primary"
                    isLoading={btnLoading}
                    onClick={handleSimulateLoad}
                    leftIcon={<Send className="w-3.5 h-3.5" />}
                  >
                    {btnLoading ? 'Sending...' : 'Trigger Request'}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Subsection: Badges */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs font-semibold tracking-wider text-secondary uppercase pb-2 border-b border-border">
              Status Badges
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono text-secondary">Accent Variant</span>
                <Badge variant="accent">Most Popular</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono text-secondary">Gold Variant</span>
                <Badge variant="gold">Featured Agency</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono text-secondary">Neutral Variant</span>
                <Badge variant="neutral">Engineering</Badge>
              </div>
            </div>
          </div>

          {/* Subsection: Eyebrows */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs font-semibold tracking-wider text-secondary uppercase pb-2 border-b border-border">
              Section Eyebrows
            </h3>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-secondary block mb-1">Standard Eyebrow (Gold)</span>
                <Eyebrow>03 / SERVICES SHOWCASE</Eyebrow>
              </div>
              <div>
                <span className="text-[10px] font-mono text-secondary block mb-1">Custom Secondary Eyebrow</span>
                <Eyebrow className="text-accent">04 / CUSTOM COLORED ACCENT</Eyebrow>
              </div>
            </div>
          </div>

          {/* Subsection: Cards */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs font-semibold tracking-wider text-secondary uppercase pb-2 border-b border-border">
              Containers & Cards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Services Concept */}
              <Card>
                <div className="p-1.5 bg-accent/5 rounded-lg border border-accent/10 w-fit mb-6 text-accent">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-display text-xl font-medium text-primary mb-2">Editorial Design</h4>
                <p className="font-sans text-sm text-secondary leading-relaxed">
                  Calm typography layouts tailored for architectural, design, and premium digital studios.
                </p>
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-primary font-mono font-medium">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Card>

              {/* Card 2: Work Concept */}
              <Card className="p-0 overflow-hidden group">
                <div className="h-44 bg-surface-alt flex items-center justify-center border-b border-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                  <span className="font-mono text-xs text-secondary/60">Portfolio Media Element</span>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <Badge variant="neutral">Architecture</Badge>
                    <Badge variant="gold">Case Study</Badge>
                  </div>
                  <h4 className="font-display text-xl font-medium text-primary mb-1">København Studio</h4>
                  <p className="font-sans text-xs text-secondary">Handcrafted workspace optimization concept.</p>
                </div>
              </Card>

              {/* Card 3: Pricing Concept */}
              <Card className="border-gold/50 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0">
                  <span className="bg-gold text-background text-[9px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-xl font-medium text-primary mb-1">Elite Partnership</h4>
                  <div className="my-4 flex items-baseline gap-1 text-primary">
                    <span className="font-display text-3xl font-semibold">$3,999</span>
                    <span className="font-mono text-xs text-secondary">/mo</span>
                  </div>
                  <ul className="space-y-3 mb-6 text-xs text-secondary font-sans">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-gold" /> Dedicated Developer & Designer
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-gold" /> Web & Mobile Product Layouts
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-gold" /> Complete Component Assets
                    </li>
                  </ul>
                </div>
                <Button variant="primary" className="w-full">
                  Get Started
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section: Work Placeholder */}
      <SectionWrapper
        id="work"
        eyebrow="03 / Case Studies"
        heading="our curated work"
        description="Fictional case studies showcasing our web design and engineering capabilities. (Detailed layouts will be integrated in Phase 4)."
      >
        <div className="text-center py-16 border border-dashed border-border rounded-card bg-surface/50">
          <p className="text-xs text-secondary font-mono uppercase tracking-widest">PORTFOLIO WORKPLACE PLACEHOLDER</p>
        </div>
      </SectionWrapper>

      {/* Section: Pricing Placeholder */}
      <SectionWrapper
        id="pricing"
        eyebrow="04 / Investment"
        heading="transparent pricing"
        description="Flexible, outcome-driven pricing tiers tailored to your creative engineering scope. (Detailed tables will be integrated in Phase 5)."
        alternateBg
      >
        <div className="text-center py-16 border border-dashed border-border rounded-card bg-surface/50">
          <p className="text-xs text-secondary font-mono uppercase tracking-widest">PRICING TIERS PLACEHOLDER</p>
        </div>
      </SectionWrapper>

      {/* Section 3: Forms & Contact */}
      <SectionWrapper
        id="contact"
        eyebrow="05 / Inquire"
        heading="start your partnership"
        description="Fill out the contact form below to simulate a real project proposal submission."
      >
        <div className="max-w-xl mx-auto">
          <Card className="p-8 space-y-6">
            <div className="border-b border-border pb-4">
              <h3 className="font-display text-xl font-medium text-primary">Request an Editorial Audit</h3>
              <p className="text-xs text-secondary mt-1">Fill out the primitives below to experience focus rings and form validation states.</p>
            </div>

            {/* Input Name */}
            <FormField
              label="Contact Name"
              type="text"
              placeholder="e.g. Anders Larson"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              helperText="Please supply your full architectural studio name or representative name."
              required
            />

            {/* Input Email with Error */}
            <FormField
              label="Email Address"
              type="email"
              placeholder="you@studio.com"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              error={isEmailInvalid ? 'Please enter a valid email address (e.g., mail@northpeak.dk)' : undefined}
              required
            />

            {/* Select Input */}
            <FormField
              label="Primary Project Focus"
              type="select"
              value={formService}
              onChange={(e) => setFormService(e.target.value)}
              options={[
                { value: 'design', label: 'Scandinavian Editorial Design' },
                { value: 'development', label: 'Vite & Tailwind Development' },
                { value: 'consulting', label: 'Tactile Brand Consultancy' },
              ]}
            />

            {/* Select Budget (using constants) */}
            <FormField
              label="Estimated Budget Range"
              type="select"
              value={formBudget}
              onChange={(e) => setFormBudget(e.target.value)}
              options={BUDGET_OPTIONS}
              required
            />

            {/* Textarea Input */}
            <FormField
              label="Project Scope Summary"
              type="textarea"
              placeholder="Outline your creative vision here..."
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
              rows={4}
              helperText="Limit message description to 500 characters."
            />

            {/* Submit Button */}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-[10px] font-mono text-secondary flex items-center gap-1.5 select-none">
                <span className="inline-block w-1.5 h-1.5 bg-gold rounded-full animate-ping" />
                TACTILE SUBMISSION READY
              </span>
              <Button
                variant="primary"
                type="submit"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                onClick={() => alert(`Submitted:\nName: ${formName}\nEmail: ${formEmail}\nService: ${formService}\nBudget: ${formBudget}\nMessage: ${formMessage}`)}
                disabled={isEmailInvalid}
              >
                Submit Form
              </Button>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* Footer Design System */}
      <footer className="border-t border-border py-12 bg-surface text-center">
        <p className="font-mono text-xs text-secondary">
          NorthPeak Digital © 2026. Handcrafted modular foundation. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
