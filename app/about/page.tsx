import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="py-24 px-4 md:px-20">
      <h1 className="mt-[200px] mb-[200px] text-[60px] font-semibold leading-[1.1] tracking-tight max-w-[900px]">
        Hi, I'm Martin. I design internal tools that make work easier. Not flashier. Just smarter.
      </h1>

      <div className="max-w-xl">
        <p className="text-[20px] text-gray-800 leading-relaxed mt-[50px]">
          I work closely with developers and analysts to bring clarity to complex systems. I focus on structure, logic, and consistency. Not trends.
        </p>

        <p className="text-[20px] text-gray-800 leading-relaxed mt-[50px]">
          My goal is to help people get through their tasks faster, with less frustration. That's what good UX means to me.
        </p>

        <p className="text-[20px] text-gray-800 leading-relaxed mt-[50px]">
          I prototype a lot, ask questions early, and simplify wherever it makes sense. I care about details, but only if they support the bigger picture.
        </p>

        <p className="text-[20px] text-gray-800 leading-relaxed mt-[50px]">
          I've worked on product modelers, tasklists, and internal dashboards for large insurance teams. I know where UX can really make a difference.
        </p>

        <p className="text-[20px] text-gray-800 leading-relaxed mt-[50px]">
          I'm originally from Slovakia, now based in sunny Barcelona. Outside of work, I box, play tennis, and plan my next escape to the Canary Islands.
        </p>

        <p className="text-[20px] text-gray-800 leading-relaxed mt-[50px]">
          If you're working on a product that needs more clarity, or just want to talk UX, feel free to reach out.
        </p>

        <Link 
          href="/contact" 
          className="text-[16px] font-regular text-gray-800 hover:opacity-70 transition-opacity inline-flex items-center mt-12"
        >
          → Contact me
        </Link>
      </div>
    </section>
  );
} 