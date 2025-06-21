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
      <div className="max-w-[700px] mx-auto">
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

        <p className="text-sm italic text-gray-500 mb-16">{disclaimer}</p>
      </div>

      {/* Content with TableOfContents */}
      <div className="relative">
        {/* Main Content */}
        <main id="case-study-content" className="max-w-[700px] mx-auto relative">
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
        </main>

        {/* Summary Navigation - Desktop Only */}
        <div className="hidden md:block">
          <div className="absolute top-0 -left-[300px]">
            <div className="sticky top-[100px] w-[250px]">
              <TableOfContents />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 