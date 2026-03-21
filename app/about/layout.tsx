import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/socialMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'About',
  description:
    'Product designer working on enterprise insurance platforms and a women-first social app. Background in UX, internal tools, and design systems.',
  path: '/about',
  ogImagePath: '/images/neuron.png',
  ogImageAlt: 'Martin Horňak — about',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
