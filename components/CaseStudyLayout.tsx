import Link from 'next/link'
import { ReactNode } from 'react'
import TableOfContents from './TableOfContents'

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
    <div className="max-w-[1200px] mx-auto px-6 py-32">
      {/* Header */}
      <div className="max-w-[700px] mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
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
      <div className="flex flex-col md:flex-row gap-8">
        {/* Summary - floating left on desktop, inline on mobile */}
        <aside className="md:w-48 w-full md:sticky md:top-32 md:self-start">
          <TableOfContents />
        </aside>

        {/* Content */}
        <article id="case-study-content" className="flex-1 max-w-[700px]">
          <div className="prose prose-xl max-w-none">
            {children}
          </div>

          <div className="mt-16">
            <Link 
              href="/projects" 
              className="cta-text block hover:opacity-70 transition-opacity"
            >
              ← Back to all projects
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
} 