'use client'

import { usePathname } from 'next/navigation'
import { caseStudies } from '@/lib/caseStudies'
import { ProjectSection } from './ProjectSection'

export default function NextCaseStudy() {
  const pathname = usePathname()
  const index = caseStudies.findIndex((study) => pathname?.startsWith(study.href))
  if (index === -1) return null

  const next = caseStudies[(index + 1) % caseStudies.length]
  const slug = next.href.split('/').pop() ?? ''

  return (
    <ProjectSection
      title={next.title}
      slug={slug}
      image={next.image}
      label={next.label}
      imageFit={slug === 'bouracka' ? 'cover' : undefined}
      ctaLabel="Next case study"
    />
  )
}
