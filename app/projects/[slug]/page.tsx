import { Layout } from '@/components/Layout';
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
    <Layout>
      <div className="max-w-4xl mx-auto px-20 py-16">
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
            <h1 className="text-4xl font-bold text-black tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-black">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Image Placeholder */}
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Project Image Placeholder</span>
          </div>

          {/* Project Details */}
          <div className="space-y-6 text-gray-600 leading-relaxed">
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
                className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-black hover:bg-gray-50 transition-colors"
              >
                View Project →
              </a>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
} 