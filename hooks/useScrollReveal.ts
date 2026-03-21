import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    if (document.querySelector('.case-study')) {
      return;
    }

    const elements = document.querySelectorAll('[data-reveal]');

    // Pre-mark elements already in the viewport as revealed BEFORE enabling
    // the js-loaded CSS rule — this prevents the flash where elements briefly
    // go opacity:0 then immediately back to opacity:1 on mobile.
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('revealed');
      }
    });

    document.body.classList.add('js-loaded');

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const delay = target.dataset.delay || '0';
          setTimeout(() => {
            target.classList.add('revealed');
          }, parseInt(delay, 10));
          observer.unobserve(target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    elements.forEach((el) => {
      if (!el.classList.contains('revealed')) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      // Remove js-loaded so that on the next visit the body starts clean.
      // The user doesn't see this removal because they're navigating away.
      document.body.classList.remove('js-loaded');
    };
  }, []);
} 