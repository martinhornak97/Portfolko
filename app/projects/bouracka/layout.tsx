import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/socialMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Bouracka: Crash reporting',
  description:
    'Landing entry UX for a CKP-backed digital accident reporting service — repositioning the homepage for real incident usage.',
  path: '/projects/bouracka',
  ogImagePath: '/bouracka/bouracka-cover.png',
  ogImageAlt: 'Bouracka.cz case study',
});

export default function BourackaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
