import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/socialMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Enterprise design system: Insurance ecosystem',
  description:
    'Multi-brand design system for an insurance ecosystem: Figma variables, component architecture, and cross-team adoption (under NDA).',
  path: '/projects/enterprise-design-system',
  ogImagePath: '/og/enterprise-design-system.png',
  ogImageAlt: 'Enterprise design system case study',
});

export default function EnterpriseDesignSystemLayout({ children }: { children: React.ReactNode }) {
  return children;
}
