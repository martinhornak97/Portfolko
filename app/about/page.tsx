import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-[800px] mx-auto px-20 py-32 space-y-20">
      <div className="space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Hi. I'm Martin — a UX designer currently based in Barcelona.
        </h1>

        <p className="text-lg leading-relaxed">
          I specialize in making complex internal tools usable. Mostly for large insurance companies, but I try not to let that define me.
        </p>

        <p className="text-lg leading-relaxed">
          I care about structure, predictability, and building design systems that people actually enjoy using.
        </p>

        <p className="text-lg leading-relaxed">
          I've spent the last few years working with developers and analysts to bring order to chaos — in product modelers, task management UIs, and enterprise dashboards.
        </p>

        <p className="text-lg leading-relaxed">
          I'm not big on "wow" effects. I'd rather help someone finish their work 3 minutes faster. Every day. That's my kind of success metric.
        </p>

        <p className="text-lg leading-relaxed">
          I prototype a lot. I talk to users when I can. I obsess over spacing, but I'll always prioritize logic over polish.
        </p>

        <p className="text-lg leading-relaxed">
          My favorite tools are Figma, Notion, Cursor, and anything that keeps things tidy.
        </p>

        <p className="text-lg leading-relaxed">
          I'm originally from Slovakia, now enjoying the sun in Barcelona.
        </p>

        <p className="text-lg leading-relaxed">
          When I'm not designing, I'm probably playing tennis, boxing, or planning my next escape to the Canary Islands.
        </p>

        <p className="text-lg leading-relaxed">
          If you're hiring or just want to talk shop — let's chat.
        </p>

        <Link href="/contact" className="text-lg underline mt-8 block">
          → Contact me
        </Link>
      </div>
    </div>
  );
} 