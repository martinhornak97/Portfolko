'use client';

import Link from 'next/link';
import { ProjectSection } from '@/components/ProjectSection';
import SkillsTools from '@/components/SkillsTools';
import { AvailabilityPill } from '@/components/AvailabilityPill';
import { ScrollCue } from '@/components/ScrollCue';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomePageClient() {
  useScrollReveal();

  const projects = [
    {
      id: '4',
      title: "Chisme: Women's meetups",
      description: 'Mobile product helping women meet new friends through real-life plans and conversations.',
      slug: 'chismeapp',
      image: '/images/chisme-preview.webp',
      label: 'Founder project',
    },
    {
      id: '0',
      title: 'Neuron: Insurance backoffice',
      description: 'Modernizing internal software used daily by 300+ employees.',
      slug: 'neuron',
      image: '/images/neuron.webp',
      label: 'Enterprise platform',
    },
    {
      id: 'bouracka',
      title: 'Bouračka: Crash reporting',
      description: 'Landing entry for a CKP-backed digital accident reporting service.',
      slug: 'bouracka',
      image: '/bouracka/bouracka-cover.webp',
      label: 'Public service',
    },
  ];

  return (
    <>
      <section className="py-5 md:py-20 px-4 md:px-20">
        <div className="relative mt-[100px] md:mt-[200px] mb-[100px] md:mb-[200px]">
          <AvailabilityPill href="/contact" />
          <h1>Senior product designer for complex products</h1>
        </div>
        <div className="max-w-[900px] text-left" data-reveal>
          <p className="max-w-[700px] text-[20px] text-gray-800 leading-relaxed mt-[25px] md:mt-[50px]">
            I work on products where mistakes are expensive. Most of my focus is on enterprise platforms in regulated industries, and alongside that I build consumer apps from scratch. In both, my job is to make difficult decisions feel simpler.
          </p>
        </div>
        <ScrollCue targetId="selected-work" />
      </section>

      <div id="selected-work" className="scroll-mt-4" aria-hidden="true" />
      {projects.map((project, index) => (
        <div key={project.id} data-reveal data-delay={100 + index * 100}>
          <ProjectSection
            title={project.title}
            slug={project.slug}
            image={project.image}
            label={project.label}
            imageFit={project.slug === 'bouracka' ? 'cover' : undefined}
          />
        </div>
      ))}

      <div className="px-4 md:px-20 mt-8 md:mt-12 mb-12 md:mb-16 flex justify-center" data-reveal data-delay="350">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm md:text-base font-medium text-gray-900 transition-colors hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          View all my work
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      <div data-reveal data-delay="400">
        <SkillsTools />
      </div>
    </>
  );
}
