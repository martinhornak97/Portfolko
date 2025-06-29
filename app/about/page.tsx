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
          Most of my work happens behind the scenes, designing internal tools for large companies, mainly in insurance. I've worked on product modelers, tasklists, dashboards. Tools that help people do their jobs faster and with fewer errors. I care about structure, clarity, and usability.
        </p>

        <p className="text-[20px] text-gray-800 leading-relaxed mt-[50px]" data-reveal data-delay="200">
          I got into UX from an SEO background, which means I often look at websites with a broader lens. I think about how things are found, how they're understood, and how they build trust.
        </p>

        <p className="text-[20px] text-gray-800 leading-relaxed mt-[50px]" data-reveal data-delay="300">
          Alongside the big enterprise stuff, I've also worked on smaller projects like agency websites, e-commerce flows, and a mobile app for field technicians. I enjoy variety and always aim to make things that feel simple, focused, and useful.
        </p>

        <p className="text-[20px] text-gray-800 leading-relaxed mt-[50px]" data-reveal data-delay="400">
          I usually work closely with analysts and developers. I like prototyping early, testing often, and thinking in systems. I try out new tools, especially AI, when they help. But I always keep the process practical.
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