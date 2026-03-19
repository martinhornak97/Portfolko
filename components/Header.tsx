'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full h-[100px] bg-white">
      <div className="w-full h-full px-4 md:px-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-[16px] font-regular text-gray-800 hover:opacity-70 transition-opacity"
        >
          Martin Horňak
        </Link>

        <nav className="flex gap-6 items-center">
          <Link 
            href="/work"
            className="text-[16px] font-regular text-gray-800 hover:opacity-70 transition-colors"
          >
            Work
          </Link>
          <Link 
            href="/about"
            className="text-[16px] font-regular text-gray-800 hover:opacity-70 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact"
            className="text-[16px] font-regular text-gray-800 hover:opacity-70 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
} 