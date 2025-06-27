import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // Skip animation if we're in a case study
    if (document.querySelector('.case-study')) {
      return;
    }

    // Add js-loaded class to enable animations
    document.body.classList.add('js-loaded');

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const delay = target.dataset.delay || '0';
          
          // Add revealed class after the specified delay
          setTimeout(() => {
            target.classList.add('revealed');
          }, parseInt(delay));
          
          // Unobserve after animation (no loop)
          observer.unobserve(target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.15, // Slightly increased threshold for better timing
      rootMargin: '50px'
    });

    // Find and observe all elements with data-reveal
    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      // Remove js-loaded class when component unmounts
      document.body.classList.remove('js-loaded');
    };
  }, []);
} 