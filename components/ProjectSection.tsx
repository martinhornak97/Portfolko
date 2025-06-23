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
        <Link 
          href={`/projects/${slug}`}
          className="group flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-24 w-full py-16 hover:opacity-90 transition-opacity cursor-pointer"
        >
          {/* LEFT - TEXT */}
          <div className="flex-1 min-w-[300px] max-w-[400px] text-left">
            <p className="meta-text">Case Study</p>
            <h2 className="mt-4 mb-2 break-words group-hover:text-gray-600 transition-colors">{title}</h2>
            <span className="cta-text mt-6 inline-block group-hover:underline group-hover:text-black transition-all">
              Read more →
            </span>
          </div>

          {/* RIGHT - IMAGE */}
          <div className="flex-1 max-w-[1000px] w-full flex justify-center items-center">
            <img
              src={image}
              alt={`${title} preview`}
              className="object-contain max-h-[600px] w-full group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </Link>
      </div>
    </div>
  );
} 