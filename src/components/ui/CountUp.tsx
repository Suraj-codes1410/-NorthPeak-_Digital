import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';

interface CountUpProps {
  value: string;
  suffix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ value, suffix = '', className }) => {
  const [formattedCount, ref] = useCountUp(value);

  return (
    <span ref={ref as React.Ref<HTMLSpanElement>} className={className}>
      {formattedCount}
      {suffix && <span className="select-none">{suffix}</span>}
    </span>
  );
};

export default CountUp;
