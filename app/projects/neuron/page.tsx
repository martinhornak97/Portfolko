import CaseStudyLayout from '@/components/CaseStudyLayout'

export default function NeuronCaseStudy() {
  return (
    <CaseStudyLayout
      title="Neuron - Enterprise UX for Insurance Workflows"
      role="Product Designer"
      impact="Up to 300 internal users daily (depending on domain)"
      tools="Figma, Token Studio"
      timeline="01/2024 - Present"
      disclaimer="Due to NDA, visuals cannot be shown."
    >
      <div className="space-y-12">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Neuron is an internal enterprise platform used by one of the biggest insurance groups in Central Europe.&nbsp;The goal is to unify and streamline daily work across teams and roles, from internal staff to external agents.
          </p>

          <p className="text-lg leading-relaxed">
            I've been part of this product team full time since early 2024. Alongside 10 designers and 2 design system maintainers, I contributed to 3 out of 7 core domains: Product Modelator, Tasklist, and Reporting.&nbsp;Each of these tools required a different mindset and problem solving approach.
          </p>

          <p className="text-lg leading-relaxed">
            My main responsibility was designing complex interfaces that are predictable, scalable, and easy to use, even in systems that have to accommodate thousands of data points and constant business changes.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Product Modelator</h2>
          <p className="text-lg leading-relaxed">
            This was the first domain I worked on and the one I spent the most time with.&nbsp;I joined the project while the analysis was still ongoing.&nbsp;At first glance, it looked like a simple tool with a few screens.&nbsp;But as the requirements evolved, we quickly realized the original concept wouldn't scale.
          </p>

          <p className="text-lg leading-relaxed">
            After a few months, we decided to rethink everything.&nbsp;That's when I proposed using a tree-based layout to reflect the product's deep, parameter-based structure.&nbsp;Each product can contain thousands of attributes, all nested in a hierarchy.&nbsp;The goal was to help users navigate this structure without feeling overwhelmed.
          </p>

          <p className="text-lg leading-relaxed">
            I designed a tree table with breadcrumb navigation and scoped views.&nbsp;This allows users to focus on a specific section of the structure while always understanding where they are.&nbsp;It reduced errors and improved the mental model of the interface.
          </p>

          <p className="text-lg leading-relaxed">
            Another challenge was how often the business logic changed.&nbsp;We redesigned the core forms many times.&nbsp;Eventually, I proposed a modular approach where individual sections of the form could adapt independently.&nbsp;That made us much more agile and saved time across the team.
          </p>

          <p className="text-lg leading-relaxed">
            Lately, our focus has shifted to helping users work with large sets of parameters at once, often in multiple dimensions.&nbsp;It's a constant balancing act between flexibility and clarity.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Tasklist</h2>
          <p className="text-lg leading-relaxed">
            The Tasklist started as a simple list of tasks.&nbsp;Over time, it became a core tool used across different domains in the platform.&nbsp;I've been working on it for about a year and have seen it evolve into a more complex and powerful feature.
          </p>

          <p className="text-lg leading-relaxed">
            The challenge was to support different levels of detail.&nbsp;Some users need to browse tasks quickly, others want to open full details.&nbsp;I designed a layout that supports both.&nbsp;Tasks are presented in expandable cards, with metadata upfront and full content available on click.
          </p>

          <p className="text-lg leading-relaxed">
            We also added sorting, filtering, and bulk actions to support power users.&nbsp;These features had to be simple to use and fast to access.&nbsp;One of the biggest design sprints focused on making the tool responsive.&nbsp;That meant redesigning parts of the layout, rethinking navigation, and aligning on a shared version used by multiple domains.
          </p>

          <p className="text-lg leading-relaxed">
            I worked closely with analysts and developers throughout.&nbsp;We tested each step and iterated together, making sure it worked not just in theory but in practice.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Reporting Dashboards</h2>
          <p className="text-lg leading-relaxed">
            I designed dashboards for supervisors to track how well tasks are being completed across teams. The goal was to show task completion rates and compare performance by week, team, or individual.
          </p>

          <p className="text-lg leading-relaxed">
            Dashboards visualize completed, ongoing, and incomplete tasks. Charts follow a consistent style and include clear labels to help users understand what they're seeing.&nbsp;We tested with supervisors and adjusted layout and terminology to better fit their mental models.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Design System</h2>
          <p className="text-lg leading-relaxed">
            We used the VIGo design system with dynamic tokens via Token Studio. Each domain had to follow brand guidelines (e.g., Kooperativa, ČPP) while maintaining UX consistency.&nbsp;I contributed components and collaborated on theming logic that supports multiple brands.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Reflection</h2>
          <p className="text-lg leading-relaxed">
            Working on Neuron taught me a lot about designing long term, for systems that are constantly evolving and cannot afford to break.&nbsp;It pushed me to think beyond screens and flows and instead focus on adaptability, logic, and resilience.
          </p>

          <p className="text-lg leading-relaxed">
            Whether it was rethinking a tree based parameter editor or redesigning task management for multiple domains, I learned how to build structures that can flex without falling apart.
          </p>

          <p className="text-lg leading-relaxed">
            It also reinforced the importance of close collaboration.&nbsp;Weekly handoffs, workshops with analysts, and regular syncs with developers helped us make decisions quickly and validate them early.
          </p>

          <p className="text-lg leading-relaxed">
            This is the kind of project where good UX does not mean glossy visuals.&nbsp;It means clarity, consistency, and letting people get their work done without friction.
          </p>
        </div>
      </div>
    </CaseStudyLayout>
  )
} 