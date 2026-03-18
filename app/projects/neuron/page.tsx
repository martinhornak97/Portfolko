import CaseStudyLayout from '@/components/CaseStudyLayout'

export default function NeuronCaseStudy() {
  return (
    <CaseStudyLayout
      title="Neuron - Enterprise UX for Insurance Workflows"
      role="Product Designer"
      impact="3 of 7 core domains, greenfield product"
      tools="Figma, Token Studio"
      timeline="01/2024 - Present"
      disclaimer="Due to NDA, visuals cannot be shown."
    >
      <div className="space-y-12">
        {/* Overview */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Neuron is an internal enterprise platform built for one of the largest insurance groups in Central Europe. The goal is to unify and streamline daily work across teams and roles, from internal analysts to external agents operating across multiple business domains.
          </p>

          <p className="text-lg leading-relaxed">
            I joined the project in early 2024 as the sole designer responsible for three of the platform's seven core domains: Product Modelator, Tasklist, and Reporting. The project started from scratch, no legacy product to inherit, no existing users to observe. Just a business analysis and an open canvas.
          </p>

          <p className="text-lg leading-relaxed">
            That context shaped everything. Without prior data or established workflows, every design decision had to be grounded in logic, collaboration with analysts, and an honest assessment of how the system would need to scale over time.
          </p>
        </div>

        {/* Design challenges */}
        <section aria-labelledby="neuron-design-challenges" className="space-y-4">
          <h2
            id="neuron-design-challenges"
            className="text-2xl font-semibold mb-2"
          >
            Design challenges
          </h2>
          <p className="text-lg leading-relaxed">
            Three challenges came up repeatedly across all three domains and defined how I approached the work.
          </p>

          <div className="flex flex-col gap-6 mt-2">
            <div className="flex gap-5 items-start">
              <span className="text-2xl font-bold text-gray-200 select-none w-8 shrink-0 pt-0.5">01</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Designing for unknown scale</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  The initial estimates for the platform turned out to be far smaller than what the product eventually became. Solutions designed for one scale had to survive, or be reconsidered, as requirements expanded well beyond the original scope.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <span className="text-2xl font-bold text-gray-200 select-none w-8 shrink-0 pt-0.5">02</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">One design serving many contexts</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Several tools had to work across multiple independent domains, each with different workflows and expectations. Designing a shared component that could adapt without fragmenting into separate products was a recurring challenge.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <span className="text-2xl font-bold text-gray-200 select-none w-8 shrink-0 pt-0.5">03</span>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Advocating for costly change</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Some of the most important design decisions required challenging work that was already in progress. Making the case for a significant change, months into development, required both clarity of reasoning and patience with corporate processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Modelator */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Product Modelator</h2>
          <p className="text-lg leading-relaxed">
            This was the first domain I worked on, and the one that taught me the most.
          </p>

          <p className="text-lg leading-relaxed">
            I started with the available analysis and began designing from scratch. At the time, the estimates were modest: up to ten products, each with around twelve parameters. A card-based overview and simple forms seemed like the right fit. Clean, scannable, easy to build.
          </p>

          <p className="text-lg leading-relaxed">
            Over the following months, the scope changed. New products were added, parameters multiplied, and the structure grew deeper and more complex. What had been a manageable set of forms was becoming hard to navigate. Users couldn't find what they needed, and the interface was starting to work against them.
          </p>

          <p className="text-lg leading-relaxed">
            I proposed a tree-based layout, a hierarchical structure that could represent all products and their parameters at once, with filtering and scoped views to help users focus without losing context.
          </p>

          <p className="text-lg leading-relaxed">
            The proposal came nine months into development, after the frontend and backend had already been built to support the original design. That made it a difficult conversation. I had to argue that the short-term cost of rebuilding was lower than the long-term cost of keeping a system that would only get harder to use as it grew. After about a month of reviews and approvals, we got the green light.
          </p>

          <p className="text-lg leading-relaxed">
            I also redesigned the core forms using a modular approach. Because product attributes could gain new parameters over time, each section of the form needed to be able to adapt independently, without requiring a full redesign every time business logic changed.
          </p>

          <p className="text-lg leading-relaxed">
            After the rollout, test users reported finding products faster and navigating parameter details more easily. That feedback came through analysts who ran the sessions, not formally measured, but consistent.
          </p>
        </div>

        {/* Tasklist */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Tasklist</h2>
          <p className="text-lg leading-relaxed">
            The Tasklist started as a simple list of tasks. Over time, it became one of the platform's most used tools, shared across multiple domains, each with its own expectations.
          </p>

          <p className="text-lg leading-relaxed">
            That cross-domain scope was the real design challenge. It wasn't just about building a good task list. It was about building one task list that could serve workflows that were genuinely different from each other.
          </p>

          <p className="text-lg leading-relaxed">
            Some domains needed features others didn't. The contracts team needed the ability to escalate a task, something no other domain required. I had to figure out how to introduce that behavior in a way that felt native to one context without bleeding into others. Feature scoping became a recurring discipline.
          </p>

          <p className="text-lg leading-relaxed">
            Layout was another point of tension. One domain wanted an Outlook-style split view, task list on the left, detail panel on the right. Another preferred a Gmail-style approach, a full list that opens into a detail view. Both preferences were valid, and both teams had real reasons for them. Finding a structure that could accommodate both without building two separate products was one of the more demanding design problems I worked through on this project.
          </p>

          <p className="text-lg leading-relaxed">
            We also made the Tasklist responsive for mobile and tablet. The decision wasn't to make everything responsive, it was to be deliberate about what mattered on smaller screens. Most of the advanced features are only visible to supervisors who work at desks. We left those as desktop-only and focused the responsive work on the core experience that field users actually needed.
          </p>

          <p className="text-lg leading-relaxed">
            Throughout the process, I tested implementation quality myself and worked alongside professional testers who flagged issues back, either to me for a design fix, or to the developer responsible.
          </p>
        </div>

        {/* Reporting Dashboards */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Reporting Dashboards</h2>
          <p className="text-lg leading-relaxed">
            I was brought in to design dashboards for supervisors tracking task performance across their teams.
          </p>

          <p className="text-lg leading-relaxed">
            The brief was open-ended. The stakeholders knew they wanted data in charts and tables and had a list of data types to expose, but the layout, chart choices, and overall information structure were mine to define. That kind of ambiguity is something I've learned to treat as an opportunity rather than a problem.
          </p>

          <p className="text-lg leading-relaxed">
            After a few months of iteration with the business team, we landed on five dashboards. Each surfaces KPIs, trend charts, and breakdowns by week, team, or individual. Drilling into a chart opens a detailed table view that can be exported, giving supervisors a way to take the data out of the platform when they need it.
          </p>

          <p className="text-lg leading-relaxed">
            One of the more interesting challenges was the filter system. Inline filters on data-dense pages eat up screen real estate and create visual clutter. I proposed a sidesheet approach, filters that live in a sliding panel, accessible on demand, without occupying permanent space in the layout. This required designing a new variant of an existing component in the VIGo design system, which I shaped and contributed to the shared library.
          </p>
        </div>

        {/* Design System */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Design System</h2>
          <p className="text-lg leading-relaxed">
            The platform uses the VIGo design system. Different domains follow brand guidelines for different insurance companies, Kooperativa, ČPP, and others, while maintaining a consistent UX layer underneath. The system went through a significant shift during the project: theming moved from Token Studio to native Figma variables, which simplified the workflow and reduced the dependency on third-party plugins.
          </p>

          <p className="text-lg leading-relaxed">
            Beyond following the system, I contributed to it across multiple domains. The two most significant were the tree table component, which required a custom solution to meet the specific structural needs of Product Modelator, and the sidesheet filter variant designed for Reporting. Both became reusable parts of the shared library, examples of how domain-level work fed back into the system and became available to the rest of the team.
          </p>
        </div>

        {/* Reflection */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Reflection</h2>
          <p className="text-lg leading-relaxed">
            Working on Neuron pushed me to think differently about what long-term design actually means. On a product this complex, good decisions aren't always the ones that look best in a prototype. They're the ones that hold up when the scope changes, when teams diverge, when business logic shifts for the third time.
          </p>

          <p className="text-lg leading-relaxed">
            Advocating for the Modelator redesign reinforced something I already suspected: the most valuable design skill isn't making things look good. It's being able to reason clearly about tradeoffs and communicate them to people who have competing priorities. On a project like this, good UX means clarity, consistency, and letting people get their work done without friction.
          </p>
        </div>
      </div>
    </CaseStudyLayout>
  )
} 