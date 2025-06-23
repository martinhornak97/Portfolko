'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '../lib/utils';

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  alt?: string;
  className?: string;
}

export default function BeforeAfterComparison({
  beforeImage,
  afterImage,
  alt = 'Image comparison',
  className
}: BeforeAfterComparisonProps) {
  const [showAfter, setShowAfter] = useState(false);

  const toggleView = () => setShowAfter(!showAfter);

  return (
    <div className={cn("relative w-full flex flex-col items-center gap-6", className)}>
      {/* Custom Toggle Switch */}
      <div className="flex items-center gap-3">
        <span className={cn(
          "text-sm transition-all duration-200",
          !showAfter 
            ? "font-medium text-gray-900" 
            : "font-light text-gray-400"
        )}>
          Before
        </span>
        
        <button
          onClick={toggleView}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              toggleView();
            }
          }}
          className="group relative h-6 w-12 rounded-full border border-gray-200 transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 hover:border-gray-300"
          role="switch"
          aria-checked={showAfter}
          aria-label={`Switch to ${showAfter ? 'Before' : 'After'} view`}
          tabIndex={0}
        >
          {/* Track */}
          <div className="absolute inset-0.5 rounded-full bg-gray-50" />
          
          {/* Knob */}
          <div
            className={cn(
              "absolute top-1/2 left-1 h-4 w-4 -translate-y-1/2 rounded-full bg-gray-800 shadow-sm transition-all duration-200 ease-in-out",
              showAfter && "translate-x-6"
            )}
          />

          {/* Hover Effect */}
          <div className="absolute inset-0 rounded-full transition-colors duration-200 group-hover:bg-gray-50/50" />
        </button>

        <span className={cn(
          "text-sm transition-all duration-200",
          showAfter 
            ? "font-medium text-gray-900" 
            : "font-light text-gray-400"
        )}>
          After
        </span>
      </div>

      {/* Image Container */}
      <div className="relative w-full rounded-lg overflow-hidden">
        <div className="relative aspect-[4/3] w-full">
          {/* Before Image */}
          <div 
            className="absolute inset-0 transition-opacity duration-300 ease-in-out"
            style={{ opacity: showAfter ? 0 : 1 }}
          >
            <Image
              src={beforeImage}
              alt={`Before: ${alt}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* After Image */}
          <div 
            className="absolute inset-0 transition-opacity duration-300 ease-in-out"
            style={{ opacity: showAfter ? 1 : 0 }}
          >
            <Image
              src={afterImage}
              alt={`After: ${alt}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Screen Reader Instructions */}
      <div className="sr-only">
        Image comparison showing {showAfter ? 'after' : 'before'} state of {alt}. Use the toggle switch to compare between before and after versions.
      </div>
    </div>
  );
} 