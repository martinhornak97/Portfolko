import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/socialMetadata';

export const metadata: Metadata = pageMetadata({
  title: "Chisme: Women's meetups",
  description:
    'Women-only social app for real-life plans and meetups. Co-founder-led product design, design system, and growth from launch to 20K+ monthly active users.',
  path: '/projects/chismeapp',
  ogImagePath: '/images/chisme-preview.png',
  ogImageAlt: 'Chisme app preview',
});

export default function ChismeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
