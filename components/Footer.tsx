'use client';

import { ArrowUp } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative w-full bg-white py-16 pb-20 lg:py-32 lg:pb-40 px-4 md:px-20">
      {/* Back to top button */}
      <div className="absolute top-8 right-4 lg:top-12 lg:right-20">
        <a
          href="#"
          onClick={scrollToTop}
          className="group flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-gray-900 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-1" />
        </a>
      </div>

      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between lg:items-start">
          {/* Left side - CTA */}
          <div className="space-y-4">
            <p className="meta-text text-left">
              Looking to improve your internal tools or workflows?
            </p>
            <Link href="/contact">
              <h2 className="text-7xl md:text-8xl lg:text-[10rem] font-extrabold text-left leading-none opacity-10 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              LET'S TALK
            </h2>
            </Link>
          </div>

          {/* Right side - Contact & Links */}
          <div className="flex flex-col gap-16 lg:text-right">
            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:hello@martinhornak.com"
                className="cta-text block w-full lg:w-auto text-center md:px-12 py-4 border rounded-[3rem] border-black hover:bg-black hover:text-white transition-all duration-200"
              >
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/martinhornak"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-text block w-full lg:w-auto text-center md:px-12 py-4 border rounded-[3rem] border-black hover:bg-black hover:text-white transition-all duration-200"
              >
                LinkedIn
              </a>
              <a 
                href="https://dribbble.com/martinhornak"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-text block w-full lg:w-auto text-center md:px-12 py-4 border rounded-[3rem] border-black hover:bg-black hover:text-white transition-all duration-200"
              >
                Dribbble
              </a>
            </div>

            {/* Bottom Credits */}
            <div className="space-y-2">
              <p className="meta-text">
                Design by{' '}
                <a href="#" className="font-medium hover:text-black transition-colors">
                  Martin Horňak
                </a>
              </p>
              <p className="meta-text">
                Development by{' '}
                <a href="#" className="font-medium hover:text-black transition-colors">
                  Martin Horňak
                </a>
              </p>
              <p className="mt-4 meta-text">
                Available for remote work worldwide.
              </p>
              <p className="meta-text">© 2026</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 