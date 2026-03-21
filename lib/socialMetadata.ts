import type { Metadata } from 'next'
import { getSiteUrl } from '@/lib/site'

const defaultOgImage = '/images/chisme-preview.png'

function ogImage(path: string, alt: string) {
  const base = getSiteUrl()
  return {
    url: `${base}${path}`,
    width: 1200,
    height: 630,
    alt,
  }
}

export function pageMetadata(input: {
  title: string
  description: string
  path: string
  ogImagePath?: string
  ogImageAlt?: string
}): Metadata {
  const imagePath = input.ogImagePath ?? defaultOgImage
  const alt = input.ogImageAlt ?? input.title
  const url = `${getSiteUrl()}${input.path}`

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: 'Martin Horňak',
      locale: 'en',
      type: 'website',
      images: [ogImage(imagePath, alt)],
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [`${getSiteUrl()}${imagePath}`],
    },
  }
}
