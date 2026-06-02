'use client';

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/** About page type scale (matches meta-text / globals body rhythm) */
const aboutLabel = "text-[12px] uppercase tracking-[0.12em] text-black/40 font-medium";
const aboutSectionLabel = `${aboutLabel} mb-4 block`;
const aboutFieldLabel = `${aboutLabel} mb-1 block`;
const aboutDate = "text-[13px] leading-[1.4] text-black/40";
const aboutRole = "text-lg font-medium leading-snug text-black";
const aboutBody = "text-base leading-[1.6] text-black";
const aboutBodyMuted = "text-base leading-[1.6] text-black/60";
const aboutNarrative =
  "block w-full text-[20px] leading-relaxed text-gray-800 [color:#333333]";

const timeline = [
  {
    period: "2025 – Present",
    role: "Co-Founder & Senior Product Designer",
    company: "Chisme",
    description: "Women-only social app for meeting friends through shared plans. 20K+ MAU, 4.7★ App Store.",
  },
  {
    period: "2021 – Present",
    role: "Product Designer → Senior Product Designer",
    company: "GetFound s.r.o. (Agency)",
    description: "Agency work across many e-commerce websites, UX audits, and conversion improvements. Selected client work:",
    clients: [
      {
        company: "Vienna Insurance Group · Neuron",
        role: "Senior Product Designer",
        period: "2024 – Present",
      },
      {
        company: "Bouračka.cz",
        role: "Product Designer",
        period: "2024",
      },
      {
        company: "Smart Expert",
        role: "Product Designer",
        period: "2021",
      },
    ],
  },
  {
    period: "2024",
    role: "Product Designer",
    company: "DateMapper (Freelance)",
    description: "Map-based meetup app. +35% session duration; improved retention.",
  },
];

export default function AboutPage() {
  useScrollReveal();

  return (
    <section className="py-5 md:py-20 px-4 md:px-20">

      {/* Opening */}
      <div className="mt-[100px] md:mt-[200px] mb-[60px] md:mb-[100px]" data-reveal>
        <h1>
          I design clarity for complex products.
        </h1>
        <p className={`${aboutNarrative} mt-[25px] md:mt-[50px] max-w-[700px]`}>
          I&apos;m a senior product designer with 5+ years across enterprise workflows and consumer products. I currently design Neuron at Vienna Insurance Group and co-found Chisme.
        </p>
      </div>

      {/* Timeline + Quick facts */}
      <div className="max-w-[900px] flex flex-col md:flex-row gap-12 md:gap-20" data-reveal data-delay="100">

        {/* Timeline */}
        <div className="flex-1">
          <p className={aboutSectionLabel}>Experience</p>
          <div className="flex flex-col gap-8">
            {timeline.map((item) => (
              <div
                key={`${item.company}-${item.period}`}
                className="grid grid-cols-1 gap-y-1.5 md:grid-cols-[120px_minmax(0,1fr)] md:gap-x-8 md:gap-y-0"
              >
                <div className={`${aboutDate} whitespace-nowrap md:pt-[3px]`}>
                  {item.period}
                </div>
                <div>
                  <p className={aboutRole}>{item.role}</p>
                  <p className={`mb-1 ${aboutBodyMuted}`}>{item.company}</p>
                  <p className={aboutBody}>{item.description}</p>
                  {'clients' in item && Array.isArray(item.clients) ? (
                    <div className="mt-4 flex flex-col gap-1.5 border-l-[0.5px] border-black/15 pl-4">
                      {item.clients.map((client) => (
                        <div
                          key={client.company}
                          className={`sub-client flex flex-col gap-0.5 ${aboutBody} md:block`}
                        >
                          <span
                            className={`sub-client-date ${aboutDate} whitespace-nowrap md:hidden`}
                          >
                            {client.period}
                          </span>
                          <span className="sub-client-content">
                            <span className="sub-client-company font-medium text-black">
                              {client.company}
                            </span>
                            <span className="sub-client-role font-normal text-black/60">
                              {' '}
                              — {client.role}
                            </span>
                            <span className="sub-client-date hidden font-normal text-black/40 md:inline">
                              {' '}
                              · {client.period}
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick facts */}
        <div className="shrink-0 md:w-[200px]">
          <p className={aboutSectionLabel}>Quick facts</p>
          <div className={`space-y-4 ${aboutBody}`}>
            <div>
              <p className={aboutFieldLabel}>Location</p>
              <p>Barcelona & Prague</p>
            </div>
            <div>
              <p className={aboutFieldLabel}>Languages</p>
              <p>Slovak, Czech, English, Spanish</p>
            </div>
            <div>
              <p className={aboutFieldLabel}>Focus</p>
              <p>Internal tools, design systems, consumer apps</p>
            </div>
          </div>
        </div>

      </div>

      {/* Looking for + How I work + narrative sections — single column */}
      <div className="mt-16 mb-[80px] w-full max-w-[700px] space-y-10" data-reveal data-delay="150">
        <div className="w-full space-y-10">
          <div className="w-full space-y-1">
            <p className={aboutSectionLabel}>Looking for</p>
            <p className={aboutNarrative}>
              Senior Product Designer roles
              <span className="text-black/30"> · </span>
              B2B SaaS · fintech · insurtech
            </p>
            <p className={aboutNarrative}>Remote EU or Barcelona hybrid</p>
          </div>

          <div className="w-full">
            <p className={aboutSectionLabel}>How I work</p>
            <p className={aboutNarrative}>
              I&apos;m strongest in ambiguous domains: aligning stakeholders, shaping the problem, and designing systems that hold up under edge cases and scale.
            </p>
          </div>
        </div>

        <div className="w-full">
          <p className={aboutSectionLabel}>What makes me different</p>
          <p className={aboutNarrative}>
            I&apos;ve worked across enterprise, startup, and agency contexts, which helps me balance craft with constraints. I also bring an SEO background. Useful for products that need to be discoverable, legible, and trusted.
          </p>
        </div>

        <div className="w-full">
          <p className={aboutSectionLabel}>Outside of work</p>
          <p className={aboutNarrative}>
            Outside work, I play tennis, box occasionally, and travel whenever I can.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 items-center" data-reveal data-delay="500">
        <Link
          href="/cv/MartinHornak_CV.pdf"
          className="button-secondary inline-block"
        >
          Download CV
        </Link>
        <a
          href="mailto:hello@martinhornak.com"
          className="text-[16px] text-gray-700 hover:text-black transition-colors"
        >
          hello@martinhornak.com
        </a>
        <a
          href="https://www.linkedin.com/in/martinhornak"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] text-gray-700 hover:text-black transition-colors"
        >
          LinkedIn ↗
        </a>
      </div>

    </section>
  );
}
