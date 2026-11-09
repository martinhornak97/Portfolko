import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/socialMetadata';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Martin Horňak - Senior Product Designer',
    description:
      'Senior product designer for complex products: enterprise platforms in regulated industries, design systems, and consumer apps.',
    path: '/',
    ogImagePath: '/og/home.png',
    ogImageAlt: 'Martin Horňak - Senior product designer for complex products',
  }),
  // Skip the "%s | Martin Horňak" template on the homepage.
  title: { absolute: 'Martin Horňak - Senior Product Designer' },
};

export default function HomePage() {
  return <HomePageClient />;
}
