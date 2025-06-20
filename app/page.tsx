import Link from 'next/link';
import { ProjectSection } from '@/components/ProjectSection';
import SkillsTools from '@/components/SkillsTools';

export default function HomePage() {
  const projects = [
    {
      id: '1',
      title: 'Insurance Product Modeler',
      description: 'Redesigned a modular interface for modeling insurance products.',
      slug: 'insurance-product-modeler',
      image: 'https://source.unsplash.com/random/800x600?sig=1'
    },
    {
      id: '2',
      title: 'Banking Tasklist App',
      description: 'Streamlined workflows for underwriting teams across 3 systems.',
      slug: 'banking-tasklist-app',
      image: 'https://source.unsplash.com/random/800x600?sig=2'
    },
    {
      id: '3',
      title: 'Datemapper',
      description: 'Designed a flexible UI for mapping complex data structures.',
      slug: 'datemapper',
      image: 'https://source.unsplash.com/random/800x600?sig=3'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-10 md:py-20 px-20">
        <h1 className="max-w-[900px] mt-[200px] mb-[200px] text-5xl md:text-6xl font-semibold leading-tight">
          UX designer focused on internal tools and design systems
        </h1>
        <div className="max-w-xl text-left space-y-4">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            I design efficient backoffice interfaces and streamline complex workflows in enterprise environments. My work blends clarity, consistency, and usability across web applications and internal tooling.
          </p>
        </div>
      </section>

      {/* Projects */}
      {projects.map((project) => (
        <ProjectSection
          key={project.id}
          title={project.title}
          slug={project.slug}
          image={project.image}
        />
      ))}

      {/* Skills & Tools */}
      <SkillsTools />
    </>
  );
}
