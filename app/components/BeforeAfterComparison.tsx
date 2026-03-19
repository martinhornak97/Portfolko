'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '../lib/utils';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleView = () => setShowAfter(!showAfter);

  const currentImage = showAfter ? afterImage : beforeImage;
  const currentAlt = `${showAfter ? 'After' : 'Before'}: ${alt}`;

  const handleImageClick = () => {
    if (isMobile) {
      setLightboxOpen(true);
    }
  };

  return (
    <div className={cn("relative w-full flex flex-col items-center gap-6", className)}>
      {/* Custom Toggle Switch */}
      <div className="flex items-center gap-3">
        <span className={cn(
          "text-base sm:text-sm transition-all duration-200",
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
          "text-base sm:text-sm transition-all duration-200",
          showAfter 
            ? "font-medium text-gray-900" 
            : "font-light text-gray-400"
        )}>
          After
        </span>
      </div>

      {/* Image Container - on mobile constrain width so phone mockup appears larger (CSS only to avoid hydration mismatch) */}
      <div 
        className="relative w-full rounded-lg overflow-hidden px-2 md:px-0 max-w-[min(100%,320px)] md:max-w-none mx-auto md:mx-0"
        onClick={handleImageClick}
      >
        <div className="relative w-full aspect-[9/19] md:aspect-[4/3] max-h-[520px] md:max-h-none">
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

      {/* Mobile enlarge button */}
      {isMobile && (
        <button
          onClick={() => setLightboxOpen(true)}
          className="text-base sm:text-sm text-gray-600 flex items-center gap-2 hover:text-gray-900 transition-colors"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7"/>
          </svg>
          Tap to view full size
        </button>
      )}

      {/* Lightbox - only for mobile */}
      {isMobile && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={[{ src: currentImage, alt: currentAlt }]}
          plugins={[Zoom]}
          carousel={{ finite: true }}
          zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
          styles={{
            container: { backgroundColor: "white" },
            root: { "--yarl__color_backdrop": "rgba(255, 255, 255, 0.95)" }
          }}
          animation={{ fade: 300 }}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null
          }}
        />
      )}

      {/* Screen Reader Instructions */}
      <div className="sr-only">
        Image comparison showing {showAfter ? 'after' : 'before'} state of {alt}. Use the toggle switch to compare between before and after versions.
        {isMobile && ". Tap the image to view it in full size."}
      </div>
    </div>
  );
} 