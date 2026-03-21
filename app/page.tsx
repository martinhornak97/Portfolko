import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  alternates: {
    canonical: `${getSiteUrl()}/`,
  },
  openGraph: {
    url: `${getSiteUrl()}/`,
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
