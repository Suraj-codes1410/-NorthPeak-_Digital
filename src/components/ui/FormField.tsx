import React, { useId } from 'react';
import { cn } from '../../utils/cn';

export interface FormFieldProps {
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  id?: string;
  className?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'textarea' | 'select';
  options?: { value: string; label: string }[];
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  name?: string;
  rows?: number;
  children?: React.ReactNode;
}

export const FormField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  FormFieldProps
>(
  (
    {
      label,
      error,
      helperText,
      required,
      id,
      className,
      type = 'text',
      options = [],
      placeholder,
      disabled = false,
      value,
      onChange,
      name,
      rows = 4,
      children,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    const inputStyles = cn(
      'w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-primary placeholder-secondary/50 font-sans transition-all duration-200 outline-none',
      'hover:border-primary/30',
      'focus-ring focus:border-primary',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-surface-alt',
      error && 'border-red-400 focus-visible:ring-red-500/20 hover:border-red-500'
    );

    const renderInput = () => {
      if (children) {
        if (React.isValidElement(children)) {
          const child = children as React.ReactElement<any>;
          return React.cloneElement(child, {
            id: child.props.id || inputId,
            disabled: child.props.disabled || disabled,
            className: cn(inputStyles, child.props.className),
            'aria-invalid': error ? 'true' : undefined,
            'aria-describedby': cn(
              error && errorId,
              helperText && helperId,
              child.props['aria-describedby']
            ) || undefined,
            ref: (children as any).ref || ref,
            ...props,
          });
        }
        return children;
      }

      const commonProps = {
        id: inputId,
        name,
        disabled,
        value,
        onChange,
        placeholder,
        'aria-invalid': error ? ('true' as const) : undefined,
        'aria-describedby': cn(error && errorId, helperText && helperId) || undefined,
        className: inputStyles,
        required,
        ...props,
      };

      if (type === 'textarea') {
        return (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            rows={rows}
            {...commonProps}
          />
        );
      }

      if (type === 'select') {
        return (
          <div className="relative w-full">
            <select
              ref={ref as React.Ref<HTMLSelectElement>}
              {...commonProps}
              className={cn(commonProps.className, 'appearance-none pr-10')}
            >
              {placeholder && (
                <option value="" disabled>
                  {placeholder}
                </option>
              )}
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-secondary/60">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        );
      }

      return (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          type={type}
          {...commonProps}
        />
      );
    };

    return (
      <div className={cn('w-full flex flex-col', className)}>
        <label
          htmlFor={inputId}
          className="block font-mono text-[10px] font-semibold uppercase tracking-widest text-secondary mb-1.5 select-none"
        >
          {label}
          {required && <span className="text-gold ml-1" aria-hidden="true">*</span>}
        </label>
        {renderInput()}
        {error && (
          <p id={errorId} className="text-xs text-red-600 font-medium mt-1.5 flex items-center" role="alert">
            <svg className="w-3.5 h-3.5 mr-1 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={helperId} className="text-xs text-secondary/70 mt-1.5">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
