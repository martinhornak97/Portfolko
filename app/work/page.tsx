'use client';

import Link from 'next/link';
import Image from 'next/image';

const caseStudies = [
  {
    id: 'chisme',
    title: 'Chisme — Social discovery app',
    description: 'Helping women meet new friends through real-life plans.',
    href: '/projects/chismeapp',
    image: '/images/chisme-preview.png'
  },
  {
    id: 'neuron',
    title: 'Neuron platform — Vienna Insurance Group',
    description: 'Enterprise platform for insurance workflows and product configuration.',
    href: '/projects/neuron',
    image: '/images/neuron.png'
  },
  {
    id: 'datemapper',
    title: 'DateMapper',
    description: 'Map-based dating app built around midpoint logic.',
    href: '/projects/datemapper',
    image: '/images/datemapper-cover.jpg'
  },
  {
    id: 'banking-app',
    title: 'VÚB Banking App redesign',
    description: 'Personal redesign of a mobile banking experience.',
    href: '/projects/banking-app',
    image: '/images/vub-preview.png'
  }
];

const companies = ['Vienna Insurance Group', 'Kooperativa', 'GetFound', 'DateMapper'];

export default function MyWorkPage() {
  return (
    <>
      <section className="py-5 md:py-20 px-4 md:px-20">
        <div className="max-w-[900px]">
          <h1 className="mt-[100px] md:mt-[200px] mb-[40px] md:mb-[60px]">
            My work
          </h1>
          <p className="text-[20px] text-gray-800 leading-relaxed">
            Selected product design projects.
          </p>
        </div>
      </section>

      <section className="py-5 md:py-16 px-4 md:px-20">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <h2>Case studies</h2>

          <div className="space-y-6">
            {caseStudies.length > 0 && (
              <Link
                href={caseStudies[0].href}
                className="group flex flex-col gap-4 md:gap-5"
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={caseStudies[0].image}
                    alt={`${caseStudies[0].title} preview`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1200px"
                    quality={70}
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="mb-1 break-words group-hover:text-gray-600 transition-colors">
                    {caseStudies[0].title}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-gray-700">
                    {caseStudies[0].description}
                  </p>
                </div>
              </Link>
            )}

            {caseStudies.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-4">
                {caseStudies.slice(1).map((project) => (
                  <Link
                    key={project.id}
                    href={project.href}
                    className="group flex flex-col gap-3"
                  >
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        quality={70}
                        className="object-cover rounded-2xl"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h3 className="mb-1 break-words group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[16px] leading-relaxed text-gray-700">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-5 md:py-16 px-4 md:px-20">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <p className="text-sm uppercase tracking-wide text-gray-500">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 md:gap-x-12 md:gap-y-4 text-sm md:text-base text-gray-700">
            {companies.map((company) => (
              <span key={company} className="whitespace-nowrap">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

