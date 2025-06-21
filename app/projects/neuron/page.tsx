import CaseStudyLayout from '@/components/CaseStudyLayout'

export default function NeuronCaseStudy() {
  return (
    <CaseStudyLayout
      title="Neuron – Enterprise UX for Insurance Workflows"
      role="Product Designer"
      impact="Up to 300 internal users daily (depending on domain)"
      tools="Figma, Token Studio"
      timeline="01/2024 – Present"
      disclaimer="Due to NDA, visuals cannot be shown."
    >
      <div className="space-y-12">
        <div className="space-y-6">
          <p className="text-xl">
            In January 2024, I joined the Neuron project for Vienna Insurance Group (VIG) to redesign key internal tools used daily by employees and insurance agents. The initiative aims to streamline workflows and unify the user experience across seven core domains. I led UX efforts in three of them: the Product Modelator, Tasklist, and Reporting dashboards.
          </p>

          <p className="text-xl">
            Our team includes 10 designers and 2 design system maintainers. I collaborate with developers and analysts weekly – receiving briefs, proposing 2–3 design options, and selecting the best solution together. All tools are built from scratch.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Product Modelator</h2>
          <p className="text-xl">
            This desktop app manages complex insurance products with thousands of parameters, structured hierarchically. A key challenge was helping users navigate massive tree structures. I introduced a tree table view combined with breadcrumb navigation and scoped views to reduce cognitive overload.
          </p>

          <p className="text-xl">
            We also redesigned complex form structures for product parameters. The new forms prioritize clarity and only show relevant fields based on context. Test users reported significantly improved orientation and confidence when working with product structures.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Tasklist</h2>
          <p className="text-xl">
            Tasklist helps employees track and manage daily tasks. The design focused on clarity, task categorization, and mobile responsiveness. We introduced responsive grids and consistent hierarchy to ensure ease of use across screen sizes.
          </p>

          <p className="text-xl">
            Previously, users felt overwhelmed and often lost progress when switching contexts. Our redesign introduced persistent task states and simplified task cards with collapsible metadata. These improvements helped test users complete tasks faster with fewer errors.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Reporting Dashboards</h2>
          <p className="text-xl">
            I designed dashboards for supervisors to track how well tasks are being completed across teams. The goal was to show task completion rates and compare performance by week, team, or individual.
          </p>

          <p className="text-xl">
            Dashboards visualize completed, ongoing, and incomplete tasks. Charts follow a consistent style and include clear labels to help users understand what they're seeing. We tested with supervisors and adjusted layout and terminology to better fit their mental models.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Design System</h2>
          <p className="text-xl">
            We used the VIGo design system with dynamic tokens via Token Studio. Each domain had to follow brand guidelines (e.g., Kooperativa, ČPP) while maintaining UX consistency. I contributed components and collaborated on theming logic that supports multiple brands.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Reflection</h2>
          <p className="text-xl">
            Neuron has challenged me to solve large-scale UX problems while navigating constraints of enterprise development. I've deepened my skills in form design, component modularity, and dashboard clarity – all while collaborating closely with cross-functional partners.
          </p>

          <p className="text-xl">
            The tools are currently being finalized for live rollout next month. Even without quantifiable business metrics yet, early feedback confirms that users now better understand structure, complete tasks more confidently, and feel more in control.
          </p>
        </div>
      </div>
    </CaseStudyLayout>
  )
} 