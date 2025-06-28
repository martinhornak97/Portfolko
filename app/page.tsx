'use client';

import Link from 'next/link';
import { ProjectSection } from '@/components/ProjectSection';
import SkillsTools from '@/components/SkillsTools';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomePage() {
  useScrollReveal();

  const projects = [
    {
      id: '0',
      title: 'Neuron – Vienna Insurance Group',
      description: 'Modernizing internal software used by thousands of employees.',
      slug: 'neuron',
      image: '/images/neuron.png'
    },
    {
      id: '4',
      title: 'Banking App Redesign',
      description: 'Simplified navigation and improved usability for a banking app.',
      slug: 'banking-app',
      image: '/images/vub-preview.png'
    },
    {
      id: '5',
      title: 'DateMapper',
      description: 'Designed a curated map experience for ideal date spots based on midpoint logic.',
      slug: 'datemapper',
      image: '/images/datemapper-cover.jpg'
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
          />
        </div>
      ))}

      {/* Skills & Tools */}
      <div data-reveal data-delay="400">
        <SkillsTools />
      </div>
    </>
  );
}
