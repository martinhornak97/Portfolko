'use client';

import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

/**
 * Hint at the bottom of the first screen that work is below.
 * Fades out as soon as the user starts scrolling.
 */
export function ScrollCue({ targetId, label = 'Selected work' }: { targetId: string; label?: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleClick() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(targetId)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Scroll to ${label.toLowerCase()}`}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 md:bottom-8 flex items-center gap-1.5 whitespace-nowrap rounded-2xl bg-white/60 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-gray-700 shadow-[0_4px_24px_rgba(0,0,0,0.08)] ring-1 ring-white/70 backdrop-blur-md transition-[opacity,background-color,color] duration-300 hover:bg-white/90 hover:text-black ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {label}
      <ArrowDown className="h-3.5 w-3.5 motion-safe:animate-nudge" strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
