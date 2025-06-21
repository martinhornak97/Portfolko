import Link from "next/link";
import Image from "next/image";

export default function BankingAppPage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-20 py-20 space-y-12">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/images/vub-preview.png"
          alt="VÚB Banking App redesign showing investment portfolio, account overview, and transaction details"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h1>Redesigning a Banking App</h1>
      <p className="meta-text">Solo UX/UI project — 2023</p>

      <div className="space-y-6">
        <p>
          This project is a personal endeavor to redesign a banking app with the primary goal of addressing usability challenges, improving visual consistency, and elevating the overall user experience. The focus was to make banking operations simpler, more intuitive, and visually engaging for users.
        </p>

        <h2 className="pt-6">Role and Scope</h2>
        <p>
          As the sole UX/UI designer, I covered the full design process:
          research, wireframing, prototyping, high-fidelity UI, and testing.
        </p>

        <h2 className="pt-6">Problem Statement</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cluttered design with too much info</li>
          <li>Confusing navigation</li>
          <li>No personalization for quick access</li>
        </ul>

        <h2 className="pt-6">Research and Insights</h2>
        <p>
          Interviews with close users revealed pain points like hard-to-find
          transactions and buried key actions like sending payments.
        </p>

        <h2 className="pt-6">Design Goals</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Simplify navigation</li>
          <li>Modern minimalistic visuals</li>
          <li>Improve feature discoverability</li>
        </ul>

        <h2 className="pt-6">Design Process</h2>
        <p>
          I mapped user journeys, created low-fidelity wireframes to declutter
          the interface, and iterated high-fidelity designs with tab-based
          navigation and prominent CTAs.
        </p>

        <h2 className="pt-6">Testing and Results</h2>
        <p>
          Testing with users led to clear improvements in task success rate and
          satisfaction. Personalization and clarity made frequent actions easier.
        </p>

        <h2 className="pt-6">Conclusion</h2>
        <p>
          This project strengthened my skills in balancing user needs with business goals. It highlights how thoughtful design can transform usability into a positive daily experience.
        </p>

        <Link 
          href="/projects" 
          className="cta-text block mt-12 hover:opacity-70 transition-opacity"
        >
          ← Back to all projects
        </Link>
      </div>
    </div>
  );
} 