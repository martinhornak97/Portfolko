import CaseStudyLayout from '@/components/CaseStudyLayout'

export default function EnterpriseDesignSystemCaseStudy() {
  return (
    <CaseStudyLayout
      title="Enterprise Design System: Insurance ecosystem"
      role="Product / UX Designer"
      impact="15-20% faster delivery and 40-50% less UI inconsistency/rework"
      tools="Figma Variables, Component architecture, Cross-functional collaboration"
      timeline="01/2026 - 03/2026"
      disclaimer="Visuals are intentionally omitted due to NDA. This case study focuses on architecture, tradeoffs, and system decisions."
    >
      <div className="space-y-10">
        <section className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Timeline</p>
              <p className="mt-1 text-2xl font-semibold text-[#333333]">3 months</p>
              <p className="mt-1 text-sm text-gray-600">Jan-Mar 2026</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Brands supported</p>
              <p className="mt-1 text-2xl font-semibold text-[#333333]">2</p>
              <p className="mt-1 text-sm text-gray-600">One shared system</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Variables total</p>
              <p className="mt-1 text-2xl font-semibold text-[#333333]">938</p>
              <p className="mt-1 text-sm text-gray-600">Core + Theme</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Variable split</p>
              <p className="mt-1 text-2xl font-semibold text-[#333333]">618 / 320</p>
              <p className="mt-1 text-sm text-gray-600">Core / Theme</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Context</h2>
          <p className="text-lg leading-relaxed">
            I led end-to-end delivery of a multi-brand design system for a large insurance ecosystem, with claims reporting as the primary use case. The system had to support two brands, desktop and mobile, and complex internal workflows built around forms.
          </p>
          <p className="text-lg leading-relaxed">
            The design system was built retrospectively while teams were already shipping. The core challenge was introducing structure and consistency without slowing active delivery.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Role and scope</h2>
          <p className="text-lg leading-relaxed">
            As Product / UX Designer, I owned delivery decisions across variable architecture, form patterns, component composition, and responsive variants. I worked directly with engineering and analysts to keep design decisions implementable in production conditions.
          </p>
          <p className="text-lg leading-relaxed">
            I focused on reducing ambiguity in handoff and minimizing rework, while building a system teams could scale over time.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Delivery approach</h2>
          <p className="text-lg leading-relaxed">
            Instead of trying to build everything at once, I prioritized claims reporting flows first and delivered reusable patterns around field states, validation behavior, error handling, and review steps.
          </p>
          <p className="text-lg leading-relaxed">
            This approach improved immediate delivery outcomes while creating foundations that could be reused by other internal workflows.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">System architecture</h2>
          <p className="text-lg leading-relaxed">
            I separated Core and Theme at the variable level. Core held stable structural rules (spacing, sizing, layout behavior), while Theme handled brand-specific visual semantics.
          </p>
          <p className="text-lg leading-relaxed">
            This kept behavior and structure shared across both brands, while allowing visual differences without duplicating components.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Responsive and component strategy</h2>
          <p className="text-lg leading-relaxed">
            I treated desktop and mobile as distinct interaction contexts, not simple scale-down states. Components used explicit variants such as `mobile`, `desktop`, `inline`, and `stacked` to reduce implementation ambiguity.
          </p>
          <p className="text-lg leading-relaxed">
            The system covered foundations and reusable components for form-heavy workflows, including InputField, Select, Textarea, Datepicker, Checkbox, Radio, FileUpload, Label, Modal, Container, TileGroup, Alert, Card, and AccordionGroup.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Execution model</h2>
          <p className="text-lg leading-relaxed">
            I ran iterative working sessions with design and engineering to align constraints early, clarify behavior before handoff, and keep delivery pace stable.
          </p>
          <p className="text-lg leading-relaxed">
            The operating principle was practical: ship clear patterns teams can implement immediately, then scale the system through repeatable governance.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Outcome</h2>
          <p className="text-lg leading-relaxed">
            The rollout delivered measurable impact: 15-20% faster delivery, 40-50% reduction in UI inconsistency/rework, and migration of 4 out of 5 modules to the new system.
          </p>
          <p className="text-lg leading-relaxed">
            Beyond component quality, the key result was a delivery-ready operating model teams could use consistently across brands and platforms.
          </p>
        </section>
      </div>
    </CaseStudyLayout>
  )
}
