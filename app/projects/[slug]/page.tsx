import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-20 py-16">
      <div className="space-y-8">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors"
        >
          ← Back to work
        </Link>

        {/* Project Header */}
        <div className="space-y-4">
          <h1>
            {project.title}
          </h1>
          <p>
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="space-y-4">
          <h2 className="meta-text">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="meta-text inline-flex items-center px-3 py-1 rounded-full bg-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Image */}
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400">Project Image Placeholder</span>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="space-y-6">
          <p>
            This is where detailed project information would go. You can describe
            the challenges you faced, the solutions you implemented, and the impact
            of the project.
          </p>

          <p>
            Add more details about your development process, the technologies you
            chose and why, and any interesting features or optimizations you implemented.
          </p>
        </div>

        {/* External Link */}
        {project.link && (
          <div className="pt-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-text inline-flex items-center px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              View Project →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}