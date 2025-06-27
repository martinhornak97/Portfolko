'use client';

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutPage() {
  useScrollReveal();

  return (
    <section className="py-5 md:py-20 px-4 md:px-20">
      <h1 className="mt-[100px] md:mt-[200px] mb-[100px] md:mb-[200px]" data-reveal>
        Hi, I'm Martin. I'm a UX designer who likes to bring clarity into messy systems.
      </h1>
      <div className="max-w-[900px] text-left">
        <p className="text-[20px] text-gray-800 leading-relaxed mt-[25px] md:mt-[50px]" data-reveal data-delay="100">
          Most of my work has been on internal tools. I've spent the past few years designing enterprise software for insurance companies — product modelers, tasklists, dashboards. I focus on usability and structure. Helping people finish their work faster and with fewer errors is what matters to me.
        </p>

        <p className="text-[20px] text-gray-800 leading-relaxed mt-[50px]" data-reveal data-delay="200">
          I'm hands-on and reliable. I work fast, iterate often, and take ownership from start to finish. I keep up with new tools and trends, especially in the AI space, and I use them to work more efficiently without overcomplicating things.
        </p>

        <p className="text-[20px] text-gray-800 leading-relaxed mt-[50px]" data-reveal data-delay="300">
          Beyond enterprise, I've designed agency websites, e-commerce flows, and a mobile app for damage technicians. I enjoy making things usable no matter the industry or user.
        </p>

        <p className="text-[20px] text-gray-800 leading-relaxed mt-[50px]" data-reveal data-delay="400">
          I usually work closely with analysts and developers. I like to prototype, test early, and think in systems. I care about design that feels calm, focused, and logical.
        </p>

        <p className="text-[20px] text-gray-800 leading-relaxed mt-[50px]" data-reveal data-delay="500">
          Right now I'm based in Barcelona. Outside of work, I play tennis, box a little, and dream about my next trip to the Canary Islands.
        </p>

        <Link 
          href="/cv/MartinHornak_CV.pdf"
          className="button-secondary mt-8 inline-block"
          data-reveal
          data-delay="600"
        >
          Download CV
        </Link>
      </div>
    </section>
  );
} 