import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/socialMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'DateMapper: Midpoint venues',
  description:
    'Product design for a map-based app that finds a fair midpoint and venue suggestions for meetups — MVP UX/UI and mobile-first flows.',
  path: '/projects/datemapper',
  ogImagePath: '/images/datemapper-cover.jpg',
  ogImageAlt: 'DateMapper app',
});

export default function DatemapperLayout({ children }: { children: React.ReactNode }) {
  return children;
}
