'use client';

import Link from 'next/link';
import { ProjectSection } from '@/components/ProjectSection';
import SkillsTools from '@/components/SkillsTools';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomePage() {
  useScrollReveal();

  const projects = [
    {
      id: '4',
      title: 'Chisme — social discovery app',
      description: 'Mobile product helping women meet new friends through real-life plans and conversations.',
      slug: 'chismeapp',
      image: '/images/chisme-preview.png',
      label: 'Founder project'
    },
    {
      id: '0',
      title: 'Neuron – Vienna Insurance Group',
      description: 'Modernizing internal software used by thousands of employees.',
      slug: 'neuron',
      image: '/images/neuron.png',
      label: 'Enterprise platform'
    },
    {
      id: '5',
      title: 'DateMapper',
      description: 'Designed a curated map experience for ideal date spots based on midpoint logic.',
      slug: 'datemapper',
      image: '/images/datemapper-cover.jpg',
      label: 'Startup project'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-5 md:py-20 px-4 md:px-20">
        <h1 className="mt-[100px] md:mt-[200px] mb-[100px] md:mb-[200px]">
          UX designer focused on internal tools and design systems
        </h1>
        <div className="max-w-[900px] text-left" data-reveal>
          <p className="text-[20px] text-gray-800 leading-relaxed mt-[25px] md:mt-[50px]">
            I design efficient backoffice interfaces and streamline complex workflows in enterprise environments. My work blends clarity, consistency, and usability across web applications and internal tooling.
          </p>
        </div>
      </section>

      {/* Projects */}
      {projects.map((project, index) => (
        <div key={project.id} data-reveal data-delay={100 + (index * 100)}>
          <ProjectSection
            title={project.title}
            slug={project.slug}
            image={project.image}
            label={project.label}
          />
        </div>
      ))}

      {/* Link to all work */}
      <div className="px-4 md:px-20 mt-4 mb-8" data-reveal data-delay="350">
        <Link
          href="/work"
          className="text-sm md:text-base text-gray-700 hover:text-black hover:underline"
        >
          View all my work →
        </Link>
      </div>

      {/* Skills & Tools */}
      <div data-reveal data-delay="400">
        <SkillsTools />
      </div>
    </>
  );
}
