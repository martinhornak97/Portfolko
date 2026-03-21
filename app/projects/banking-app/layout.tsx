import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/socialMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'VÚB: Retail banking',
  description:
    'Self-initiated mobile banking app redesign: clearer hierarchy, navigation, and flows for a major retail bank (concept project).',
  path: '/projects/banking-app',
  ogImagePath: '/images/vub-preview.png',
  ogImageAlt: 'VÚB banking app redesign',
});

export default function BankingAppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
