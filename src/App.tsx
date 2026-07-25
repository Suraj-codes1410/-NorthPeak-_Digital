import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Work } from './components/sections/Work';
import { Results } from './components/sections/Results';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { FormField } from './components/ui/FormField';
import { SectionWrapper } from './components/layout/SectionWrapper';
import { ArrowRight } from 'lucide-react';
import { BUDGET_OPTIONS } from './lib/constants';

function App() {
  // Demo states for FormFields
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('invalid-email-address'); // Preset with invalid to show error
  const [formService, setFormService] = useState('design');
  const [formBudget, setFormBudget] = useState('');
  const [formMessage, setFormMessage] = useState('');

  // Email validation helper
  const isEmailInvalid = formEmail !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formEmail);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Phase 4: Hero Section */}
        <Hero />

        {/* Phase 5: Services Section */}
        <Services />

        {/* Phase 6: Selected Work Section */}
        <Work />

        {/* Phase 7: Results & Testimonials Section */}
        <Results />

        {/* Section: Pricing Placeholder (to support navigation anchors) */}
        <SectionWrapper
          id="pricing"
          eyebrow="04 / Investment"
          heading="transparent pricing"
          description="Flexible, outcome-driven pricing tiers tailored to your creative engineering scope. (Detailed tables will be integrated in Phase 7)."
          alternateBg
        >
          <div className="text-center py-16 border border-dashed border-border rounded-card bg-surface/50">
            <p className="text-xs text-secondary font-mono uppercase tracking-widest">
              PRICING TIERS PLACEHOLDER
            </p>
          </div>
        </SectionWrapper>

        {/* Section: Contact Form */}
        <SectionWrapper
          id="contact"
          eyebrow="05 / Inquire"
          heading="start your partnership"
          description="Fill out the contact form below to simulate a real project proposal submission."
        >
          <div className="max-w-xl mx-auto">
            <Card className="p-8 space-y-6">
              <div className="border-b border-border pb-4">
                <h3 className="font-display text-xl font-medium text-primary">
                  Request an Editorial Audit
                </h3>
                <p className="text-xs text-secondary mt-1">
                  Fill out the primitives below to experience focus rings and form validation states.
                </p>
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
                error={
                  isEmailInvalid
                    ? 'Please enter a valid email address (e.g., mail@northpeak.dk)'
                    : undefined
                }
                required
              />

              {/* Select Project Focus */}
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

              {/* Textarea Message */}
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
                  onClick={() =>
                    alert(
                      `Submitted:\nName: ${formName}\nEmail: ${formEmail}\nService: ${formService}\nBudget: ${formBudget}\nMessage: ${formMessage}`
                    )
                  }
                  disabled={isEmailInvalid}
                >
                  Submit Form
                </Button>
              </div>
            </Card>
          </div>
        </SectionWrapper>
      </main>

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
