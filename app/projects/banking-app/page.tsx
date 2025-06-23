'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout'
import Image from "next/image";
import BeforeAfterComparison from '../../components/BeforeAfterComparison'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from 'react';

export default function BankingAppCaseStudy() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleryImages = Array.from({ length: 8 }, (_, i) => ({
    src: `/images/VUB ${i + 1}.png`,
    alt: `VÚB redesign screen ${i + 1}`,
  }));

  return (
    <CaseStudyLayout
      title="VÚB Banking App Redesign"
      role="UX/UI Designer"
      impact="Personal Project"
      tools="Figma"
      timeline="2023"
      disclaimer="A personal project focused on redesigning a mobile banking app for improved usability and visual clarity."
    >
      <div className="space-y-12">
        <div className="space-y-6">
          <p className="text-xl">
            This was a self-initiated redesign of the mobile banking app for VÚB Bank, the first bank I used. The app felt visually outdated and difficult to navigate. My goal was to retain all existing features while making them more accessible, intuitive, and visually appealing for both tech-savvy users and those with less experience.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Role and Scope</h2>
          <p className="text-xl">
            I was the only designer involved, covering the full process from initial exploration to high-fidelity design and testing. Since this was not a commissioned project, I had no access to business requirements or analytics. I based my decisions on competitor benchmarks, my own usage, and conversations with four long-term users from my family.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Problem Statement</h2>
          <ul className="text-xl list-disc pl-6 space-y-2">
            <li>Overloaded screens and unclear hierarchy</li>
            <li>Disorienting navigation structure</li>
            <li>No clear prioritization of frequently used features</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Research and Insights</h2>
          <p className="text-xl">
            I conducted informal interviews with four users who actively use the VÚB app. They often struggled to locate common functions or understand where they were in the interface. I also compared the VÚB app with other mobile banking apps I use, identifying common patterns and usability gaps.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Design Goals</h2>
          <ul className="text-xl list-disc pl-6 space-y-2">
            <li>Create clear and familiar navigation</li>
            <li>Elevate key actions and common use cases</li>
            <li>Maintain full functionality without overwhelming the interface</li>
            <li>Introduce a modern and minimal visual system</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Design Process</h2>
          <p className="text-xl">
            I mapped common user journeys and designed wireframes aimed at simplifying navigation and highlighting essential actions. These evolved into a high-fidelity interface with a tab bar, contextual calls to action, and reorganized layouts. Less critical features were moved into drawers or grouped in accessible menus to avoid visual clutter.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Before and After Screens</h2>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Home</h3>
              <BeforeAfterComparison
                beforeImage="/images/HP before.png"
                afterImage="/images/HP after.png"
                alt="VÚB Banking App home screen redesign"
              />
              <p className="text-xl">
                The original home screen was visually overloaded, with too many containers and unclear balance display. Actions were buried and inconsistent. The new version offers a single focused view, prioritizing hierarchy and visibility of recent transactions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Account</h3>
              <BeforeAfterComparison
                beforeImage="/images/Account befote.png"
                afterImage="/images/Account after.png"
                alt="VÚB Banking App account detail view redesign"
              />
              <p className="text-xl">
                Account details were previously hidden in dense cards. In the redesign, balances are easy to scan and account actions are placed where users expect them.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Money Transfer</h3>
              <BeforeAfterComparison
                beforeImage="/images/Transfer before.png"
                afterImage="/images/Transfer after.png"
                alt="VÚB Banking App transfer flow redesign"
              />
              <p className="text-xl">
                The original transfer flow was fragmented. The redesign introduces a clear, unified process with improved guidance and feedback.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Testing and Results</h2>
          <p className="text-xl">
            The redesign was shared with the same users interviewed earlier. Feedback was highly positive. They appreciated the visual clarity, better grouping of features, and improved ease of use. All reported feeling more confident using the app and described the experience as finally making sense.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Conclusion</h2>
          <p className="text-xl">
            This project was an opportunity to design without internal constraints while still solving real problems. It challenged me to think structurally, prioritize effectively, and build clarity into every layer of the experience.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Final Screens</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-[3/4] cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain rounded-xl shadow-sm hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            index={photoIndex}
            slides={galleryImages}
            plugins={[Zoom, Thumbnails]}
            carousel={{
              finite: true,
              preload: 2
            }}
            thumbnails={{
              position: "bottom"
            }}
            zoom={{
              maxZoomPixelRatio: 3,
              scrollToZoom: true
            }}
          />
        </div>
      </div>
    </CaseStudyLayout>
  );
} 