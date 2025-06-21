'use client'

import { useState, useEffect, useCallback } from 'react'

interface TOCItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  // Extract headings from content
  useEffect(() => {
    const content = document.getElementById('case-study-content')
    if (!content) return

    const elements = Array.from(content.querySelectorAll('h2, h3'))
    const items: TOCItem[] = elements.map((element) => ({
      id: element.id,
      text: element.textContent || '',
      level: element.tagName === 'H2' ? 2 : 3,
    }))

    setHeadings(items)

    // Add IDs to headings if they don't exist
    elements.forEach((element, index) => {
      if (!element.id) {
        element.id = `heading-${index}`
      }
    })
  }, [])

  // Scroll spy using Intersection Observer
  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-100px 0px -66%',
    })

    const elements = document.querySelectorAll('h2, h3')
    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  // Smooth scroll to heading
  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }, [])

  // Mobile toggle
  const toggleTOC = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Mobile version */}
      <div className="md:hidden">
        <button
          onClick={toggleTOC}
          className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-600 bg-gray-50 rounded-lg"
        >
          <span>Summary</span>
          <svg
            className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <nav className="mt-2 p-4 bg-white rounded-lg shadow-lg">
            <ul className="space-y-2">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  className={`${heading.level === 3 ? 'ml-4' : ''}`}
                >
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className={`text-left ${
                      activeId === heading.id
                        ? 'text-neutral-900 font-medium'
                        : 'text-neutral-500 hover:text-neutral-800'
                    }`}
                  >
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop version */}
      <div className="hidden md:block sticky top-[100px] w-[300px] p-6">
        <nav>
          <p className="font-medium mb-4">Summary</p>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={`${heading.level === 3 ? 'ml-4' : ''}`}
              >
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  className={`text-left transition-colors ${
                    activeId === heading.id
                      ? 'text-neutral-900 font-medium'
                      : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
} 