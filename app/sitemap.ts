import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

const routes: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/work', priority: 0.9 },
  { path: '/projects/chismeapp', priority: 0.8 },
  { path: '/projects/neuron', priority: 0.8 },
  { path: '/projects/enterprise-design-system', priority: 0.8 },
  { path: '/projects/bouracka', priority: 0.7 },
  { path: '/projects/datemapper', priority: 0.7 },
  { path: '/projects/banking-app', priority: 0.6 },
  { path: '/about', priority: 0.8 },
  { path: '/contact', priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return routes.map(({ path, priority }) => ({
    url: `${base}${path === '/' ? '' : path}`,
    changeFrequency: 'monthly',
    priority,
  }));
}
