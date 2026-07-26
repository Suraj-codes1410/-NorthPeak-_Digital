import { useEffect, useState } from 'react';

/**
 * Custom hook to observe multiple sections on the page and identify which one is currently in view.
 * Uses the native browser IntersectionObserver API for performance.
 *
 * @param sectionIds Array of section element IDs to monitor.
 * @param options Optional custom configurations for the IntersectionObserver.
 * @returns The ID of the currently active section.
 */
export function useScrollSpy(sectionIds: string[], options?: IntersectionObserverInit): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // If no sections are provided or if document is not defined, bail out.
    if (!sectionIds.length || typeof window === 'undefined') return;

    const visibleSections = new Map<string, number>();

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.intersectionRatio);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      // Find the section that occupies the largest visual ratio of the observer window
      let maxRatio = -1;
      let mostVisibleId = '';

      visibleSections.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleId = id;
        }
      });

      if (mostVisibleId) {
        setActiveId(mostVisibleId);
      }
    };

    // Smart default: observe sections as they occupy the top-to-middle of the screen
    const defaultOptions: IntersectionObserverInit = {
      rootMargin: '-20% 0px -50% 0px',
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
      ...options,
    };

    const observer = new IntersectionObserver(callback, defaultOptions);

    // Track targets that were successfully observed to clean them up properly later
    const observedElements: HTMLElement[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observedElements.push(el);
      }
    });

    // In case the elements aren't mounted/found initially (e.g. initial loads or mock setups),
    // we can observe changes to the DOM and try to attach observers if needed.
    // However, clean disconnection handles everything on component unmount.
    return () => {
      observedElements.forEach((el) => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeId;
}
