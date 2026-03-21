import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

const description =
  'UX designer focused on internal tools, design systems, and complex workflows for enterprise and product teams.';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'Martin Horňak — UX Designer',
    template: '%s | Martin Horňak',
  },
  description,
  verification: {
    google: 'nPzgvjldolAr8IEoMHv2VP6zDpXNYcaIRSGuVG7wNY',
  },
  openGraph: {
    type: 'website',
    locale: 'en',
    siteName: 'Martin Horňak',
    title: 'Martin Horňak — UX Designer',
    description,
    images: [
      {
        url: '/images/chisme-preview.png',
        width: 1200,
        height: 630,
        alt: 'Selected UX and product design work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martin Horňak — UX Designer',
    description,
    images: ['/images/chisme-preview.png'],
  },
};
