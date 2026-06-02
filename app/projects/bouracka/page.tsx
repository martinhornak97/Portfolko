'use client'

import CaseStudyLayout from '@/components/CaseStudyLayout'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'

export default function BourackaCaseStudy() {
  const [viewMode, setViewMode] = useState<'mobile' | 'desktop'>('mobile')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const isDesktop = viewMode === 'desktop'
  const desktopSlides = [
    { src: '/bouracka/homepage-before.png', alt: 'Desktop before' },
    { src: '/bouracka/homepage-after.png', alt: 'Desktop after' },
  ]
  const mobileSlides = [
    { src: '/bouracka/mobile-before.png', alt: 'Mobile before' },
    { src: '/bouracka/mobile-after.png', alt: 'Mobile after' },
  ]
  const activeSlides = isDesktop ? desktopSlides : mobileSlides

  return (
    <CaseStudyLayout
      title="Bouracka: Crash reporting"
      role="Product Designer"
      impact="Landing page repositioned from campaign awareness to high-stakes entry"
      tools="Figma"
      timeline="2024"
      disclaimer="CKP-backed service: the Czech digital route for filing accident reports online, replacing paper workflows."
    >
      <div className="space-y-12">

        <section aria-labelledby="bouracka-context" className="space-y-6">
          <h2 id="bouracka-context" className="text-2xl font-semibold mb-4">
            Context
          </h2>
          <p className="text-lg leading-relaxed">
            Until Bouracka.cz, filing a car accident report in the Czech Republic meant paperwork. Physical forms, sent to your insurance company by hand. Bouracka replaced that with a multi-step digital flow that outputs a completed document ready to submit. No paper, no ambiguity.
          </p>
          <p className="text-lg leading-relaxed">
            Because nothing like it existed before, the original landing page had one job: explain that this is real and that it works. It was built for a marketing campaign aimed at awareness. When the campaign ended, the page stayed. And the people arriving on it were no longer curious bystanders. They were drivers who had just had an accident and needed to do something about it right now.
          </p>
        </section>

        <section aria-labelledby="bouracka-problem" className="space-y-6">
          <h2 id="bouracka-problem" className="text-2xl font-semibold mb-4">
            Problem
          </h2>
          <p className="text-lg leading-relaxed">
            The page was designed to generate interest, not to help someone act under pressure. Users arrived stressed, usually on mobile, and needed the product explained in the shortest possible form. Campaign structure, unclear hierarchy, and buried CTAs meant most users could not orient themselves quickly enough to proceed.
          </p>
          <p className="text-base leading-relaxed text-gray-600">
            Accident reporting from the scene is predominantly mobile, so key decisions were made mobile-first.
            Desktop is included as a secondary context.
          </p>

          <div className="inline-flex items-center rounded-lg border border-gray-200 p-1">
            <button
              type="button"
              onClick={() => setViewMode('mobile')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                viewMode === 'mobile'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mobile
            </button>
            <button
              type="button"
              onClick={() => setViewMode('desktop')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                viewMode === 'desktop'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Desktop
            </button>
          </div>

          {isDesktop ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setPhotoIndex(0)
                    setLightboxOpen(true)
                  }}
                  className="block w-full text-left"
                >
                  <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-gray-200">
                    <Image
                      src="/bouracka/homepage-before.png"
                      alt="Bouracka homepage before the restructuring"
                      fill
                      sizes="(max-width: 768px) 100vw, 340px"
                      className="object-cover object-top bg-gray-50"
                    />
                  </div>
                </button>
                <figcaption className="text-sm text-gray-500">
                  Desktop before. Click image to open full screen.
                </figcaption>
              </figure>

              <figure className="space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setPhotoIndex(1)
                    setLightboxOpen(true)
                  }}
                  className="block w-full text-left"
                >
                  <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-gray-200">
                    <Image
                      src="/bouracka/homepage-after.png"
                      alt="Bouracka homepage after restructuring for real incident usage"
                      fill
                      sizes="(max-width: 768px) 100vw, 340px"
                      className="object-cover object-top bg-gray-50"
                    />
                  </div>
                </button>
                <figcaption className="text-sm text-gray-500">
                  Desktop after. Click image to open full screen.
                </figcaption>
              </figure>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setPhotoIndex(0)
                    setLightboxOpen(true)
                  }}
                  className="block w-full text-left"
                >
                  <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-gray-200">
                    <Image
                      src="/bouracka/mobile-before.png"
                      alt="Bouracka mobile homepage before the restructuring"
                      fill
                      sizes="(max-width: 768px) 100vw, 340px"
                      className="object-cover object-top bg-gray-50"
                    />
                  </div>
                </button>
                <figcaption className="text-sm text-gray-500">
                  Mobile before. Click image to open full screen.
                </figcaption>
              </figure>

              <figure className="space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setPhotoIndex(1)
                    setLightboxOpen(true)
                  }}
                  className="block w-full text-left"
                >
                  <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-gray-200">
                    <Image
                      src="/bouracka/mobile-after.png"
                      alt="Bouracka mobile homepage after restructuring for real incident usage"
                      fill
                      sizes="(max-width: 768px) 100vw, 340px"
                      className="object-cover object-top bg-gray-50"
                    />
                  </div>
                </button>
                <figcaption className="text-sm text-gray-500">
                  Mobile after. Click image to open full screen.
                </figcaption>
              </figure>
            </div>
          )}
        </section>

        <section aria-labelledby="bouracka-approach" className="space-y-6">
          <h2 id="bouracka-approach" className="text-2xl font-semibold mb-4">
            Approach
          </h2>
          <p className="text-lg leading-relaxed">
            The structure was rebuilt around the user's state at the moment of arrival, not around the product's history or capabilities. Every content decision was filtered through one question: does this help someone make a decision right now, or does it add friction?
          </p>
        </section>

        <section aria-labelledby="bouracka-key-changes" className="space-y-6">
          <h2 id="bouracka-key-changes" className="text-2xl font-semibold mb-4">
            Key changes
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex gap-5 items-start">
              <span className="text-2xl font-bold text-gray-200 select-none w-8 shrink-0 pt-0.5">01</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Hero rewrite</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  The opening now states what the product does and presents the primary action. Nothing else competes for attention above the fold.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <span className="text-2xl font-bold text-gray-200 select-none w-8 shrink-0 pt-0.5">02</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">3-step process summary</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Not documentation, but a signal that the process is short and manageable. Reduces hesitation before users commit to starting.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <span className="text-2xl font-bold text-gray-200 select-none w-8 shrink-0 pt-0.5">03</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Question-based page structure</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Sections follow the order of user concerns: eligibility, process, safety, who is behind it. This replaced the previous campaign-driven structure.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <span className="text-2xl font-bold text-gray-200 select-none w-8 shrink-0 pt-0.5">04</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Trust signals moved up</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Official CKP backing and security info now appear early. For someone uncertain about using an unfamiliar tool in a stressful moment, trust has to come before the ask.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <span className="text-2xl font-bold text-gray-200 select-none w-8 shrink-0 pt-0.5">05</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Three reassurance sections</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  New sections in the flow explain how simple the form is to complete, when it should be filled, and an FAQ for edge cases. They replace a wall of text with scannable answers for someone still deciding whether to start.
                </p>
              </div>
            </div>
          </div>

          <p className="text-base leading-relaxed text-gray-600">
            The main shift was adding structured reassurance in the path to the task: short sections users can scan
            instead of one long read when they are already under pressure.
          </p>
        </section>

        <section aria-labelledby="bouracka-outcome" className="space-y-6">
          <h2 id="bouracka-outcome" className="text-2xl font-semibold mb-4">
            Outcome
          </h2>
          <p className="text-lg leading-relaxed">
            The page now leads with what the product is and why it can be trusted, before asking anything of the user. For a product most people have never heard of, the entry point has to do the job of both introduction and reassurance simultaneously.
          </p>
          <p className="text-lg leading-relaxed">
            A user arriving after an accident can now understand what the product is, confirm it applies to them, and reach the form without having to work through promotional content to get there.
          </p>
        </section>

        <section aria-labelledby="bouracka-tradeoffs" className="space-y-8">
          <h2 id="bouracka-tradeoffs" className="text-2xl font-semibold mb-4">
            Trade-offs
          </h2>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Text versus scannability</h3>
            <p className="text-lg leading-relaxed">
              The original page was text-heavy. That works for someone with time and curiosity. It does not work for someone who just had an accident and is standing next to their car. The redesign replaced long explanatory paragraphs with short, scannable blocks. The client had to accept that less copy does not mean less clarity. For a stressed user, it means more.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Structured reassurance versus one long read</h3>
            <p className="text-lg leading-relaxed">
              The new layout adds three sections (ease of filling, when to complete the form, FAQ) so each worry gets a short answer instead of one dense paragraph. The trade-off is vertical space: more sections to scroll through, but each one is easier to parse under stress. The goal was to put task-specific reassurance where users actually hesitate.
            </p>
          </div>
        </section>

      </div>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={activeSlides}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
      />
    </CaseStudyLayout>
  )
}
