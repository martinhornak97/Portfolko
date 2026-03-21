import Image from 'next/image';
import Link from 'next/link';

interface ProjectSectionProps {
  title: string;
  slug: string;
  image: string;
  label?: string;
  /** `cover` fills the frame (may crop sides); default `contain` shows full image. */
  imageFit?: 'contain' | 'cover';
}

export function ProjectSection({
  title,
  slug,
  image,
  label,
  imageFit = 'contain',
}: ProjectSectionProps) {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-20">
        <Link 
          href={`/projects/${slug}`}
          className="group flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-24 w-full py-16 hover:opacity-90 transition-opacity cursor-pointer"
        >
          {/* IMAGE */}
          <div className="w-full md:order-last md:flex-1 md:max-w-[1000px] flex justify-center items-center">
            {/* Cap height on small screens so previews (e.g. wide mockups) do not dominate the viewport */}
            <div
              className={`relative w-full overflow-hidden h-[min(42vh,280px)] sm:h-[min(46vh,340px)] md:h-auto md:aspect-[4/3] md:min-h-0 ${
                imageFit === 'cover' && slug === 'bouracka' ? 'bg-[#ebebeb]' : ''
              }`}
            >
              <Image
                src={image}
                alt={`${title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1000px"
                className={`${imageFit === 'cover' ? 'object-cover' : 'object-contain'} ${
                  imageFit === 'cover' && slug === 'bouracka'
                    ? 'origin-top scale-[1.05] object-top'
                    : 'object-center'
                } ${slug === 'bouracka' && imageFit === 'cover' ? 'group-hover:scale-[1.07]' : 'group-hover:scale-[1.02]'} transition-transform duration-300`}
                priority={slug === 'chismeapp'}
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full md:flex-1 md:min-w-[300px] md:max-w-[400px] text-left">
            {label && (
              <p className="text-[12px] uppercase tracking-wider text-gray-500 mb-3 md:mb-4">
                {label}
              </p>
            )}
            <h2 className="mb-1 md:mb-2 break-words group-hover:text-gray-600 transition-colors">{title}</h2>
            <span className="cta-text mt-3 md:mt-6 inline-block group-hover:underline group-hover:text-black transition-all">
              Read more →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
} 