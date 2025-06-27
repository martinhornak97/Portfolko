'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useAnchorLinks() {
  const pathname = usePathname()

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      
      if (!anchor) return
      
      // Check if it's an internal anchor link
      const href = anchor.getAttribute('href')
      if (!href?.startsWith('#')) return
      
      e.preventDefault()
      const id = href.slice(1)
      const element = document.getElementById(id)
      
      if (element) {
        // Remove existing highlights
        document.querySelectorAll('h2, h3').forEach(heading => {
          heading.classList.remove('highlight-heading')
        })
        
        // Add highlight to target
        element.classList.add('highlight-heading')
        
        // Update URL and scroll
        window.history.pushState({}, '', `${pathname}#${id}`)
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    // Handle initial hash navigation
    const hash = window.location.hash.slice(1)
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth' })
          element.classList.add('highlight-heading')
        })
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [pathname])
} 