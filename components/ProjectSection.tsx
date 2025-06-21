import Link from 'next/link';

interface ProjectSectionProps {
  title: string;
  slug: string;
  image: string;
}

export function ProjectSection({ title, slug, image }: ProjectSectionProps) {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-20">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-24 w-full py-16">
          {/* LEFT - TEXT */}
          <div className="flex-1 min-w-[300px] max-w-[400px] text-left">
            <p className="meta-text">Case Study</p>
            <h2 className="mt-2 break-words">{title}</h2>
            <Link 
              href={`/projects/${slug}`}
              className="cta-text mt-4 inline-block hover:opacity-70 transition-opacity"
            >
              Read more →
            </Link>
          </div>

          {/* RIGHT - IMAGE */}
          <div className="flex-1 max-w-[1000px] w-full flex justify-center items-center">
            <img
              src={image}
              alt={`${title} preview`}
              className="object-contain max-h-[600px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 