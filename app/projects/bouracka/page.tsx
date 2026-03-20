import CaseStudyLayout from '@/components/CaseStudyLayout'

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[16/9] rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center">
      <span className="text-gray-400 text-sm">{label}</span>
    </div>
  )
}

export default function BourackaCaseStudy() {
  return (
    <CaseStudyLayout
      title="Bouracka.cz: Entry Point for a High-Stakes Tool"
      role="UX Designer"
      impact="[TODO: client / engagement type]"
      tools="Figma"
      timeline="2024"
      disclaimer="[TODO: brief project context sentence]"
    >
      <div className="space-y-12">

        <section aria-labelledby="bouracka-context" className="space-y-6">
          <h2 id="bouracka-context" className="text-2xl font-semibold mb-4">
            Context
          </h2>
          <p className="text-lg leading-relaxed">
            Bouracka.cz is a web application for filing car accident reports online. Its landing page was built for a marketing campaign. When the campaign ended, the page remained in place and became the entry point for people who had just had an accident and needed to act immediately.
          </p>
        </section>

        <section aria-labelledby="bouracka-problem" className="space-y-6">
          <h2 id="bouracka-problem" className="text-2xl font-semibold mb-4">
            Problem
          </h2>
          <p className="text-lg leading-relaxed">
            The page was designed to generate interest, not to help someone act under pressure. Users arrived stressed, usually on mobile, and the page did not answer the three questions they needed answered fast: <em>What is this? Does it apply to my situation? What do I do?</em> Campaign structure, unclear hierarchy, and buried CTAs meant most users could not orient themselves quickly enough to proceed.
          </p>

          <ScreenshotPlaceholder label="Screenshot: original page (before)" />
        </section>

        <section aria-labelledby="bouracka-approach" className="space-y-6">
          <h2 id="bouracka-approach" className="text-2xl font-semibold mb-4">
            Approach
          </h2>
          <p className="text-lg leading-relaxed">
            The structure was rebuilt around the user's state at the moment of arrival, not around the product's history or capabilities. Every content decision was filtered through one question: does this help someone make a decision right now, or does it add friction?
          </p>
        </section>

        <section aria-labelledby="bouracka-key-changes" className="space-y-6">
          <h2 id="bouracka-key-changes" className="text-2xl font-semibold mb-4">
            Key changes
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex gap-5 items-start">
              <span className="text-2xl font-bold text-gray-200 select-none w-8 shrink-0 pt-0.5">01</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Hero rewrite</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  The opening now states what the product does and presents the primary action. Nothing else competes for attention above the fold.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <span className="text-2xl font-bold text-gray-200 select-none w-8 shrink-0 pt-0.5">02</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">3-step process summary</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Not documentation, but a signal that the process is short and manageable. Reduces hesitation before users commit to starting.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <span className="text-2xl font-bold text-gray-200 select-none w-8 shrink-0 pt-0.5">03</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Question-based page structure</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Sections follow the order of user concerns: eligibility, process, safety, who is behind it. This replaced the previous campaign-driven structure.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <span className="text-2xl font-bold text-gray-200 select-none w-8 shrink-0 pt-0.5">04</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Trust signals moved up</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Official CKP backing and security info now appear early. For someone uncertain about using an unfamiliar tool in a stressful moment, trust has to come before the ask.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <span className="text-2xl font-bold text-gray-200 select-none w-8 shrink-0 pt-0.5">05</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Demo mode</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Users can explore the product without entering real data. Directly addresses commitment anxiety for first-time users.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <span className="text-2xl font-bold text-gray-200 select-none w-8 shrink-0 pt-0.5">06</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Campaign content deprioritized</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  PR and awareness material was moved down or removed. The page no longer tries to do two jobs at once.
                </p>
              </div>
            </div>
          </div>

          <ScreenshotPlaceholder label="Screenshot: redesigned page (after)" />
        </section>

        <section aria-labelledby="bouracka-outcome" className="space-y-6">
          <h2 id="bouracka-outcome" className="text-2xl font-semibold mb-4">
            Outcome
          </h2>
          <p className="text-lg leading-relaxed">
            [TODO: add a concrete result here, e.g. conversion rate, task completion, client sign-off, or qualitative evidence from testing]
          </p>
          <p className="text-lg leading-relaxed">
            A user arriving after an accident can now understand what the product is, confirm it applies to them, and reach the form without having to work through promotional content to get there.
          </p>
        </section>

        <section aria-labelledby="bouracka-tradeoffs" className="space-y-6">
          <h2 id="bouracka-tradeoffs" className="text-2xl font-semibold mb-4">
            Trade-offs
          </h2>
          <p className="text-lg leading-relaxed">
            [TODO: replace with a specific tension you navigated, e.g. stakeholder pushback on removing campaign content, constraints from CKP brand guidelines, or a decision where you had to choose between two valid directions]
          </p>
          <p className="text-lg leading-relaxed">
            Reducing visible marketing content meant the page does less awareness work. For a product used in moments of genuine stress, that is the right call, but it required a deliberate argument to stakeholders, not just a design preference.
          </p>
        </section>

      </div>
    </CaseStudyLayout>
  )
}
