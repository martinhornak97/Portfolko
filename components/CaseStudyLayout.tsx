import Link from 'next/link'
import { ReactNode } from 'react'
import TableOfContents from './TableOfContents'
import NextCaseStudy from './NextCaseStudy'

interface CaseStudyLayoutProps {
  title: string
  role: string
  impact: string
  tools: string
  timeline: string
  disclaimer: string
  children: ReactNode
}

export default function CaseStudyLayout({
  title,
  role,
  impact,
  tools,
  timeline,
  disclaimer,
  children
}: CaseStudyLayoutProps) {
  return (
    <>
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-12 pb-16 md:pt-32 md:pb-24 case-study">
      {/* Header */}
      <div className="max-w-[700px] mx-auto mb-8 md:mb-16">
        <Link
          href="/work"
          className="group mb-6 md:mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-black"
        >
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
          All work
        </Link>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4 md:mb-8">
          {title}
        </h1>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-8">
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Role</div>
            <div className="text-base text-black font-medium">{role}</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Impact</div>
            <div className="text-base text-black font-medium">{impact}</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Tools</div>
            <div className="text-base text-black font-medium">{tools}</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Timeline</div>
            <div className="text-base text-black font-medium">{timeline}</div>
          </div>
        </div>

        <p className="text-sm italic text-gray-500">{disclaimer}</p>
      </div>

      {/* Content with Floating Summary */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        {/* Summary - floating left on desktop, inline on mobile */}
        <aside className="w-full md:w-64 lg:w-72 md:sticky md:top-32 md:self-start md:shrink-0">
          <TableOfContents />
        </aside>

        {/* Content */}
        <article id="case-study-content" className="flex-1 max-w-[700px] min-w-0">
          <div className="prose prose-xl max-w-none prose-headings:scroll-mt-24 prose-h2:mt-14 prose-h2:mb-5 prose-p:my-5 md:prose-h2:mt-16 md:prose-p:my-6">
            {children}
          </div>
        </article>
      </div>
    </div>
    <NextCaseStudy />
    </>
  )
} 