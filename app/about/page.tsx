'use client';

import Image from "next/image";
import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/** About page type scale */
const textPrimary = "text-[#333333]";
const textMuted = "text-black/60";
const bodyLarge = `text-[20px] leading-relaxed ${textPrimary}`;
const body = `text-base leading-[1.6] ${textPrimary}`;

const timeline = [
  {
    period: "07/2026 - Present",
    role: "Senior UX Designer",
    company: "Sanofi (Contract)",
    description: "Design system and AI-powered search for Sanofi's web ecosystem, used by external agencies to build Sanofi sites.",
  },
  {
    period: "06/2025 - Present",
    role: "Co-Founder & Senior Product Designer",
    company: "Chisme",
    description: "Women-only social app for meeting friends through shared plans. 50K+ MAU, 4.8★ App Store.",
  },
  {
    period: "01/2024 - 06/2026",
    role: "Senior Product Designer",
    company: "Vienna Insurance Group · Neuron (Contract)",
    description: "Owned UX across internal applications used daily by 300+ employees in operations, supervisory, and field teams.",
  },
  {
    period: "2024",
    role: "Product Designer",
    company: "DateMapper (Freelance)",
    description: "Map-based meetup app. +35% session duration; improved retention.",
  },
  {
    period: "01/2021 - 06/2026",
    role: "Product Designer",
    company: "GetFound s.r.o. (Freelance)",
    description: "End-to-end product design for enterprise clients in finance and insurance, from discovery through launch. Selected client work:",
    clients: [
      {
        company: "Bouračka.cz",
        role: "Product Designer",
        period: "2024",
      },
      {
        company: "Smart Experta",
        role: "Product Designer",
        period: "2021",
      },
      {
        company: "Interbohemia.cz",
        role: "Product Designer",
        period: "",
      },
    ],
  },
];

const quickFacts = [
  { label: "Based in", value: "Barcelona (CET)" },
  { label: "Experience", value: "5+ years" },
  { label: "Languages", value: "English (C1), Spanish (B1/B2), Czech (C2), Slovak (native)" },
  { label: "Focus", value: "Enterprise platforms, design systems, regulated industries, consumer apps" },
  { label: "Availability", value: "Full-time at Sanofi · A few hours a week for side projects (remote, CET)" },
];

/** A page section: title on top, content below, both aligned to the hero's left edge. */
function AboutSection({
  title,
  children,
  delay,
}: {
  title: string;
  children: ReactNode;
  delay?: string;
}) {
  return (
    <div
      className="max-w-[900px] py-12 md:py-16"
      data-reveal
      data-delay={delay}
    >
      <h2 className={`mb-6 md:mb-8 text-[28px] font-semibold leading-snug ${textPrimary}`}>
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function AboutPage() {
  useScrollReveal();

  return (
    <section className="py-5 md:py-20 px-4 md:px-20">
      <div className="max-w-[1200px]">
        {/* Opening */}
        <div className="mt-[100px] md:mt-[200px] mb-[60px] md:mb-[100px]" data-reveal>
          <h1>I design clarity for complex products.</h1>
          <p className={`${bodyLarge} mt-[25px] md:mt-[50px] max-w-[700px]`}>
            I&apos;m a Senior Product Designer with 5+ years across enterprise workflows and consumer products. I currently design the design system and AI-powered features for Sanofi&apos;s web ecosystem, and co-founded Chisme.
          </p>
        </div>

        <AboutSection title="About" delay="100">
          <div className="max-w-[700px] space-y-5">
            <p className={bodyLarge}>
              I&apos;m strongest in ambiguous domains: aligning stakeholders, shaping the problem, and designing systems that hold up under edge cases and scale.
            </p>
            <p className={bodyLarge}>
              I&apos;ve worked across enterprise, startup, and agency contexts, which helps me balance craft with constraints. An SEO background helps on products that need to be discoverable, legible, and trusted.
            </p>
            <p className={bodyLarge}>
              Outside work, I play tennis, box occasionally, and travel whenever I can.
            </p>
          </div>
        </AboutSection>

        <AboutSection title="Experience" delay="150">
          <div className="flex max-w-[700px] flex-col gap-10">
            {timeline.map((item) => (
              <div key={`${item.company}-${item.period}`}>
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <p className={`text-lg font-medium leading-snug ${textPrimary}`}>
                    {item.role}
                    <span className={`font-normal ${textMuted}`}> · {item.company}</span>
                  </p>
                  <p className={`shrink-0 whitespace-nowrap text-[15px] ${textMuted}`}>
                    {item.period}
                  </p>
                </div>
                <p className={`mt-2 ${body}`}>{item.description}</p>
                {'clients' in item && Array.isArray(item.clients) ? (
                  <ul className="mt-4 space-y-1.5 border-l border-black/10 pl-4">
                    {item.clients.map((client) => (
                      <li key={client.company} className={body}>
                        <span className="font-medium">{client.company}</span>
                        <span className={textMuted}>
                          {' '}
                          · {client.role}
                          {client.period ? ` · ${client.period}` : ''}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </AboutSection>

        <AboutSection title="Details" delay="200">
          <dl className="max-w-[700px] space-y-3">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-1 gap-1 md:grid-cols-[160px_minmax(0,1fr)] md:gap-6"
              >
                <dt className={`${body} ${textMuted}`}>{fact.label}</dt>
                <dd className={body}>{fact.value}</dd>
              </div>
            ))}
          </dl>
          {/* CV card: one sheet of paper on a soft panel. The sheet straightens and lifts on hover. */}
          <a
            href="/cv/MartinHornak_CV.pdf"
            download="MartinHornak_CV.pdf"
            className="group mt-14 flex w-full items-center gap-6 md:gap-12 rounded-2xl bg-[#f5f5f4] px-5 py-8 md:px-12 md:py-8 motion-safe:transition-colors motion-safe:duration-300 hover:bg-[#eeeeec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#333333]"
          >
            <div className="relative w-[100px] md:w-[190px] aspect-[1/1.3] shrink-0">
              <div className="absolute inset-0 overflow-hidden bg-white border border-black/10 shadow-[0_6px_20px_rgba(0,0,0,0.10)] -rotate-3 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out group-hover:rotate-0 group-hover:-translate-y-2 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)] group-focus-visible:rotate-0">
                <Image
                  src="/cv/cv-preview.webp"
                  alt="Preview of Martin Horňak's CV"
                  fill
                  sizes="(min-width: 768px) 190px, 100px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="min-w-0">
              <p className={`text-[22px] md:text-[28px] font-semibold leading-tight ${textPrimary}`}>
                My CV
              </p>
              <p className={`mt-2 text-base leading-snug ${textMuted}`}>
                My experience, skills, and results, all on one page.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#333333] px-4 md:px-5 py-2.5 text-[15px] font-medium text-white motion-safe:transition-colors group-hover:bg-black">
                Download PDF
                <span
                  aria-hidden="true"
                  className="inline-block motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </span>
            </div>
          </a>
        </AboutSection>
      </div>
    </section>
  );
}
