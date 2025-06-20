'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full h-[100px] bg-white">
      <div className="w-full h-full px-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-sm font-medium tracking-tight hover:opacity-70 transition-opacity"
        >
          Martin Horňak
        </Link>

        <nav className="flex gap-6 items-center">
          <Link 
            href="/about"
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact"
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
} 