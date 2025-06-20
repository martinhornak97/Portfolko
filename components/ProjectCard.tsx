import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { clsx } from 'clsx';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article className={clsx('group', className)}>
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="space-y-4">
          {/* Optional image placeholder - can be added later */}
          {project.image && (
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-black group-hover:text-gray-600 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
} 