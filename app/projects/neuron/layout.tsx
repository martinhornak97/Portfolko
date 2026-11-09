import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/socialMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Neuron: Insurance backoffice',
  description:
    'Enterprise UX for an internal insurance platform across multiple domains. Design systems, complex workflows, and greenfield product design (under NDA).',
  path: '/projects/neuron',
  ogImagePath: '/og/neuron.png',
  ogImageAlt: 'Neuron platform',
});

export default function NeuronLayout({ children }: { children: React.ReactNode }) {
  return children;
}
