import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { pageMetadata } from '@/lib/socialMetadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return { title: 'Project' };
  }
  return pageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${slug}`,
    ogImagePath: '/images/chisme-preview.png',
    ogImageAlt: project.title,
  });
}

export default function LegacyProjectSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
