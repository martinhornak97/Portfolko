import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/socialMetadata';

export const metadata: Metadata = pageMetadata({
  title: 'Work',
  description:
    'Selected UX and product design work: enterprise platforms, founder-led apps, public-sector tools, and product concepts.',
  path: '/work',
  ogImagePath: '/bouracka/bouracka-cover.png',
  ogImageAlt: 'Case studies — selected design work',
});

const caseStudies = [
  {
    id: 'chisme',
    title: "Chisme: Women's meetups",
    label: 'Founder project',
    href: '/projects/chismeapp',
    image: '/images/chisme-preview.png',
  },
  {
    id: 'neuron',
    title: 'Neuron: Insurance backoffice',
    label: 'Enterprise platform',
    href: '/projects/neuron',
    image: '/images/neuron.png',
  },
  {
    id: 'enterprise-design-system',
    title: 'Enterprise design system: Insurance ecosystem',
    label: 'Enterprise platform',
    href: '/projects/enterprise-design-system',
    image: '/images/enterprise-design-system-cover.png',
  },
  {
    id: 'bouracka',
    title: 'Bouracka: Crash reporting',
    label: 'Public service',
    href: '/projects/bouracka',
    image: '/bouracka/bouracka-cover.png',
  },
  {
    id: 'datemapper',
    title: 'DateMapper: Midpoint venues',
    label: 'Startup project',
    href: '/projects/datemapper',
    image: '/images/datemapper-cover.jpg',
  },
  {
    id: 'banking-app',
    title: 'VÚB: Retail banking',
    label: 'Personal project',
    href: '/projects/banking-app',
    image: '/images/vub-preview.png',
  },
];

/** Files in /public/logos/ */
const trustedLogos: {
  name: string;
  src: string;
  alt: string;
  /** Extra scale when asset reads small inside the box (e.g. padded raster) */
  imgClassName?: string;
}[] = [
  {
    name: 'Vienna Insurance Group',
    src: '/logos/vig-logo.svg',
    alt: 'Vienna Insurance Group',
  },
  {
    name: 'Kooperativa',
    src: '/logos/kooperativa-logo.svg',
    alt: 'Kooperativa',
  },
  {
    name: 'GetFound',
    src: '/logos/getfound-logo.svg',
    alt: 'GetFound',
  },
  {
    name: 'Bouracka',
    src: '/logos/bouracka-logo.svg',
    alt: 'Bouracka.cz',
  },
  {
    name: 'Trask',
    src: '/logos/trask-logo.jpg',
    alt: 'Trask',
    imgClassName: 'scale-[1.48] md:scale-[1.55] origin-center',
  },
];

export default function MyWorkPage() {
  const [featured, ...rest] = caseStudies;

  return (
    <>
      <section className="py-5 md:py-20 px-4 md:px-20">
        <div className="max-w-[900px]">
          <h1 className="mt-[100px] md:mt-[200px] mb-[40px] md:mb-[60px]">
            My work
          </h1>
          <p className="text-[20px] text-gray-800 leading-relaxed">
            Projects where clarity, constraints, and measurable outcomes mattered.
          </p>
        </div>
      </section>

      <section className="py-5 md:py-16 px-4 md:px-20">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <h2>Case studies</h2>

          <div className="space-y-6">
            <Link
              href={featured.href}
              prefetch={false}
              className="group flex flex-col gap-4 md:gap-5"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element -- static public assets; avoids /_next/image optimizer failures */}
                <img
                  src={featured.image}
                  alt={`${featured.title} preview`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col flex-1 text-left">
                <p className="text-[12px] uppercase tracking-wider text-gray-500 mb-3 md:mb-4">
                  {featured.label}
                </p>
                <h3 className="mb-1 md:mb-2 break-words text-[28px] font-semibold leading-relaxed text-[#333333] group-hover:text-gray-600 transition-colors">
                  {featured.title}
                </h3>
                <span className="cta-text mt-3 md:mt-6 inline-block group-hover:underline group-hover:text-black transition-all">
                  Read more →
                </span>
              </div>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-4">
              {rest.map((project) => (
                <Link
                  key={project.id}
                  href={project.href}
                  prefetch={false}
                  className="group flex flex-col gap-3"
                >
                  <div
                    className={`relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50 ${
                      project.id === 'bouracka' ? 'bg-[#ebebeb]' : ''
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- static public assets */}
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className={
                        project.id === 'bouracka'
                          ? 'absolute inset-0 block h-full w-full origin-top scale-[1.18] object-cover object-top'
                          : 'absolute inset-0 block h-full w-full object-cover'
                      }
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-col flex-1 text-left">
                    <p className="text-[12px] uppercase tracking-wider text-gray-500 mb-3 md:mb-4">
                      {project.label}
                    </p>
                    <h3 className="mb-1 md:mb-2 break-words text-[28px] font-semibold leading-relaxed text-[#333333] group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="cta-text mt-3 md:mt-6 inline-block group-hover:underline group-hover:text-black transition-all">
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 md:py-16 px-4 md:px-20">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <p className="text-sm uppercase tracking-wide text-gray-500">
            Trusted by teams at
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
            {trustedLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-[88px] w-full items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white px-4 py-3 md:h-[100px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- static assets from /public */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`max-h-full max-w-full object-contain ${logo.imgClassName ?? ''}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
