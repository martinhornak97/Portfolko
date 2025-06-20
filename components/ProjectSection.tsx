import Link from 'next/link';

interface ProjectSectionProps {
  title: string;
  slug: string;
  image: string;
}

export function ProjectSection({ title, slug, image }: ProjectSectionProps) {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1600px] mx-auto px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side - Text */}
        <div className="flex-1 space-y-2 text-left">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Case study</span>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight max-w-xl">
            {title}
          </h2>
          <Link 
            href={`/projects/${slug}`}
            className="text-sm underline hover:text-gray-700"
          >
            Read more
          </Link>
        </div>

        {/* Right side - Image */}
        <div className="flex-1">
          <img
            src={image}
            alt={`${title} mockup`}
            className="w-full h-auto rounded-md shadow-sm"
          />
        </div>
      </div>
    </div>
  );
} 