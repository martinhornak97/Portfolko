/** Case studies in display order. Used by /work and the "Next case study" link. */
export const caseStudies = [
  {
    id: 'chisme',
    title: "Chisme: Women's meetups",
    label: 'Founder project',
    href: '/projects/chismeapp',
    image: '/images/chisme-preview.webp',
  },
  {
    id: 'neuron',
    title: 'Neuron: Insurance backoffice',
    label: 'Enterprise platform',
    href: '/projects/neuron',
    image: '/images/neuron.webp',
  },
  {
    id: 'enterprise-design-system',
    title: 'Enterprise design system: Insurance ecosystem',
    label: 'Enterprise platform',
    href: '/projects/enterprise-design-system',
    image: '/images/enterprise-design-system-cover.webp',
  },
  {
    id: 'bouracka',
    title: 'Bouračka: Crash reporting',
    label: 'Public service',
    href: '/projects/bouracka',
    image: '/bouracka/bouracka-cover.webp',
  },
  {
    id: 'datemapper',
    title: 'DateMapper: Midpoint venues',
    label: 'Startup project',
    href: '/projects/datemapper',
    image: '/images/datemapper-cover.webp',
  },
  {
    id: 'banking-app',
    title: 'VÚB: Retail banking',
    label: 'Personal project',
    href: '/projects/banking-app',
    image: '/images/vub-preview.webp',
  },
];

export type CaseStudy = (typeof caseStudies)[number];
