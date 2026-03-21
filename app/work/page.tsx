import Link from 'next/link';

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

const companies = ['Vienna Insurance Group', 'Kooperativa', 'GetFound', 'DateMapper'];

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
            Selected product design projects.
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
