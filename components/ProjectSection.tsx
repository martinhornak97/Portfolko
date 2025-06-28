import Image from 'next/image';
import Link from 'next/link';

interface ProjectSectionProps {
  title: string;
  slug: string;
  image: string;
}

export function ProjectSection({ title, slug, image }: ProjectSectionProps) {
  // Convert image path to WebP
  const webpImage = image.replace(/\.(png|jpe?g)$/, '.webp');
  
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-20">
        <Link 
          href={`/projects/${slug}`}
          className="group flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-24 w-full py-16 hover:opacity-90 transition-opacity cursor-pointer"
        >
          {/* IMAGE */}
          <div className="w-full md:order-last md:flex-1 md:max-w-[1000px] flex justify-center items-center">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={webpImage}
                alt={`${title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
                className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                priority={slug === 'neuron'} // Priority load first project
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full md:flex-1 md:min-w-[300px] md:max-w-[400px] text-left">
            <p className="meta-text">Case Study</p>
            <h2 className="mt-2 md:mt-4 mb-1 md:mb-2 break-words group-hover:text-gray-600 transition-colors">{title}</h2>
            <span className="cta-text mt-3 md:mt-6 inline-block group-hover:underline group-hover:text-black transition-all">
              Read more →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
} 