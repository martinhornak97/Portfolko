import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/socialMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Get in touch about internal tools, design systems, UX for complex workflows, or collaboration opportunities.',
  path: '/contact',
  ogImagePath: '/images/chisme-preview.png',
  ogImageAlt: 'Contact Martin Horňak',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
