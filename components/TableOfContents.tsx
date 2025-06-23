'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

interface TOCItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Initialize headings and set IDs
  useEffect(() => {
    const initializeHeadings = () => {
      const content = document.getElementById('case-study-content')
      if (!content) return false

      const elements = Array.from(content.querySelectorAll('h2'))
      
      // First ensure all headings have IDs
      elements.forEach((element, index) => {
        if (!element.id) {
          // Create URL-friendly ID from heading text
          const id = element.textContent
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '') || `heading-${index}`
          element.id = id
        }
      })

      // Then create TOC items
      const items: TOCItem[] = elements.map((element) => ({
        id: element.id,
        text: element.textContent || '',
        level: 2,
      }))

      setHeadings(items)
      return true
    }

    // Try to initialize and set ready state
    const initialized = initializeHeadings()
    setIsReady(initialized)
  }, [])

  // Handle initial hash navigation and scroll spy
  useEffect(() => {
    if (!isReady) return

    // Set up intersection observer
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

    const elements = document.querySelectorAll('h2')
    elements.forEach((element) => observer.observe(element))

    // Handle initial hash navigation
    const hash = window.location.hash.slice(1)
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        // Use requestAnimationFrame to ensure the scroll happens after layout
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth' })
          setActiveId(hash)
        })
      }
    }

    return () => observer.disconnect()
  }, [isReady])

  // Smooth scroll to heading
  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Update URL hash without triggering scroll
      window.history.pushState({}, '', `${pathname}#${id}`)
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveId(id)
      setIsOpen(false)
    }
  }, [pathname])

  // Mobile toggle
  const toggleTOC = () => setIsOpen(!isOpen)

  if (!isReady) return null

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
                <li key={heading.id}>
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
              <li key={heading.id}>
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