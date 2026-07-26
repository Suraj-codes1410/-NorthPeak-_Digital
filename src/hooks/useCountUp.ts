import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook to animate a numerical value counting up from a starting number.
 * Triggers once when the element enters the viewport using IntersectionObserver.
 * Respects system prefers-reduced-motion settings.
 *
 * @param endValueStr The final target value represented as a string (e.g. "+184", "9.4", "6").
 * @param duration Duration of the count-up animation in milliseconds.
 * @param startValue Starting numerical value.
 * @returns An array containing the formatted current count string and the ref to attach to the observed DOM element.
 */
export function useCountUp(endValueStr: string, duration = 1500, startValue = 0) {
  const [count, setCount] = useState(startValue);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const hasStarted = useRef(false);

  // Parse potential prefixes (like '+'), parsed number, and count decimal places
  const prefix = endValueStr.startsWith('+') ? '+' : '';
  const parsedValue = parseFloat(endValueStr.replace(/[^\d.]/g, '')) || 0;
  const hasDecimal = endValueStr.includes('.');
  const decimalPlaces = hasDecimal ? endValueStr.split('.')[1].length : 0;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check system setting for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(parsedValue);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          setIsIntersecting(true);
          hasStarted.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [parsedValue]);

  useEffect(() => {
    if (!isIntersecting) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // easeOutQuad easing equation: progress * (2 - progress)
      const easeProgress = progress * (2 - progress);
      const currentValue = startValue + easeProgress * (parsedValue - startValue);

      setCount(currentValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(parsedValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [isIntersecting, startValue, parsedValue, duration]);

  // Re-attach prefix and format decimals correctly
  const formattedCount = prefix + count.toFixed(decimalPlaces);

  return [formattedCount, elementRef] as const;
}
