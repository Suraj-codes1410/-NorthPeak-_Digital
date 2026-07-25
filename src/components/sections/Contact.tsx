import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { FormField } from '../ui/FormField';
import { Eyebrow } from '../ui/Eyebrow';
import { SectionWrapper } from '../layout/SectionWrapper';
import { contactContent } from '../../content/contact';
import { contactSchema, type ContactFormData } from '../../lib/contactSchema';
import { BUDGET_OPTIONS } from '../../lib/constants';
import { ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmittingLocal, setIsSubmittingLocal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      budget: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmittingLocal(true);
    console.log('Inquiry submission data:', data);
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmittingLocal(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    reset();
    setIsSuccess(false);
  };

  return (
    <SectionWrapper id="contact" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-start">
        {/* Left Column: Information Panel (45%) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6 lg:sticky lg:top-28">
          <Eyebrow>{contactContent.eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-primary leading-tight">
            {contactContent.heading}
          </h2>
          <p className="font-sans text-sm md:text-base text-secondary leading-relaxed max-w-sm">
            {contactContent.description}
          </p>

          <div className="pt-6 border-t border-border/50 w-full space-y-3.5">
            {/* Availability */}
            {contactContent.availability && (
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-sans text-xs font-medium text-primary">
                  {contactContent.availability}
                </span>
              </div>
            )}
            {/* Response Time */}
            {contactContent.responseTime && (
              <p className="font-mono text-[10px] tracking-wider text-secondary uppercase">
                {contactContent.responseTime}
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Form Panel (55%) */}
        <div className="lg:col-span-7 w-full animate-fade-in-up">
          {!isSuccess ? (
            <Card className="p-8 md:p-10 shadow-premium border border-border/60">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                {/* Name */}
                <FormField
                  label={contactContent.form.nameLabel}
                  placeholder={contactContent.form.namePlaceholder}
                  helperText={contactContent.form.nameHelper}
                  error={errors.name?.message}
                  required
                  disabled={isSubmittingLocal}
                  {...register('name')}
                />

                {/* Email */}
                <FormField
                  label={contactContent.form.emailLabel}
                  type="email"
                  placeholder={contactContent.form.emailPlaceholder}
                  helperText={contactContent.form.emailHelper}
                  error={errors.email?.message}
                  required
                  disabled={isSubmittingLocal}
                  {...register('email')}
                />

                {/* Company Name (Optional) */}
                <FormField
                  label={contactContent.form.companyLabel}
                  placeholder={contactContent.form.companyPlaceholder}
                  helperText={contactContent.form.companyHelper}
                  error={errors.company?.message}
                  disabled={isSubmittingLocal}
                  {...register('company')}
                />

                {/* Budget */}
                <FormField
                  label={contactContent.form.budgetLabel}
                  type="select"
                  helperText={contactContent.form.budgetHelper}
                  error={errors.budget?.message}
                  required
                  disabled={isSubmittingLocal}
                  options={BUDGET_OPTIONS}
                  {...register('budget')}
                />

                {/* Message */}
                <FormField
                  label={contactContent.form.messageLabel}
                  type="textarea"
                  placeholder={contactContent.form.messagePlaceholder}
                  helperText={contactContent.form.messageHelper}
                  error={errors.message?.message}
                  required
                  disabled={isSubmittingLocal}
                  rows={5}
                  {...register('message')}
                />

                {/* Submit Action */}
                <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-secondary tracking-widest uppercase select-none">
                    INQUIRY READY
                  </span>
                  <Button
                    variant="primary"
                    type="submit"
                    rightIcon={!isSubmittingLocal && <ArrowRight className="w-3.5 h-3.5" />}
                    disabled={isSubmittingLocal}
                    aria-live="polite"
                  >
                    {isSubmittingLocal
                      ? contactContent.form.loadingButton
                      : contactContent.form.submitButton}
                  </Button>
                </div>
              </form>
            </Card>
          ) : (
            /* Success confirmation panel */
            <Card className="p-8 md:p-12 text-center shadow-premium border border-border/60 flex flex-col items-center justify-center space-y-6 animate-in fade-in zoom-in-95 duration-350">
              <div className="p-4 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 animate-bounce">
                <CheckCircle2 className="w-8 h-8 stroke-[2]" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-3xl font-semibold text-primary">
                  {contactContent.success.title}
                </h3>
                <p className="font-sans text-sm text-secondary leading-relaxed max-w-md mx-auto">
                  {contactContent.success.message}
                </p>
              </div>
              <div className="pt-4">
                <Button
                  variant="secondary"
                  onClick={handleReset}
                  leftIcon={<RefreshCw className="w-3.5 h-3.5 mr-0.5" />}
                >
                  {contactContent.success.buttonText}
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
