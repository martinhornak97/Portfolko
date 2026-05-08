'use client';

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  {
    period: "2025 – present",
    role: "Co-Founder & Product Designer",
    company: "Chisme",
    description: "Women-only social app for meeting friends through shared plans. 20K+ MAU, 4.7★ App Store.",
  },
  {
    period: "2024 – present",
    role: "Product Designer",
    company: "Vienna Insurance Group · Neuron",
    description: "Enterprise platform for insurance workflows. 300+ daily users, 10-person design team, 3 core domains.",
  },
  {
    period: "2024",
    role: "Product Designer",
    company: "DateMapper",
    description: "Freelance. Led UX for a map-based dating app from concept to launch. Increased user retention and session duration.",
  },
  {
    period: "2021 – 2023",
    role: "UX Designer & SEO Specialist",
    company: "GetFound",
    description: "Agency work on websites, e-commerce flows, and landing pages. Where I transitioned from SEO into UX.",
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
        <p className="text-[20px] text-gray-800 leading-relaxed mt-[25px] md:mt-[50px] max-w-[700px]">
          I&apos;m a product designer working across enterprise workflows and consumer products. I currently design Neuron at Vienna Insurance Group and co-found Chisme.
        </p>
      </div>

      {/* Timeline + Quick facts */}
      <div className="max-w-[900px] flex flex-col md:flex-row gap-12 md:gap-20 mb-[80px]" data-reveal data-delay="100">

        {/* Timeline */}
        <div className="flex-1">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-6">Experience</p>
          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.period} className="flex flex-col sm:flex-row gap-1 sm:gap-8">
                <div className="text-sm text-gray-400 shrink-0 w-[120px] pt-[3px]">
                  {item.period}
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900">{item.role}</p>
                  <p className="text-sm text-gray-500 mb-1">{item.company}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick facts */}
        <div className="shrink-0 md:w-[200px]">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-6">Quick facts</p>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Location</p>
              <p>Barcelona & Prague</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Languages</p>
              <p>Slovak, Czech, English, Spanish</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Availability</p>
              <p>Open to new opportunities</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Focus</p>
              <p>Internal tools, design systems, consumer apps</p>
            </div>
          </div>
        </div>

      </div>

      {/* How I work */}
      <div className="max-w-[700px] space-y-10 mb-[80px]">

        <div data-reveal data-delay="200">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">How I work</p>
          <p className="text-[20px] text-gray-800 leading-relaxed">
            I&apos;m strongest in ambiguous domains: aligning stakeholders, shaping the problem, and designing systems that hold up under edge cases and scale.
          </p>
        </div>

        <div data-reveal data-delay="300">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">What makes me different</p>
          <p className="text-[20px] text-gray-800 leading-relaxed">
            I&apos;ve worked across enterprise, startup, and agency contexts, which helps me balance craft with constraints. I also bring an SEO background. Useful for products that need to be discoverable, legible, and trusted.
          </p>
        </div>

        <div data-reveal data-delay="400">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">Outside of work</p>
          <p className="text-[20px] text-gray-800 leading-relaxed">
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
