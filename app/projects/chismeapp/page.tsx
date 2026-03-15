'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout'
import Image from 'next/image'
import BeforeAfterComparison from '../../components/BeforeAfterComparison'

export default function ChismeCaseStudyPage() {
  return (
    <CaseStudyLayout
      title="Chisme – Social discovery app for real-life friendships"
      role="Co-Founder & Product Designer"
      impact="20K+ monthly active users, 4.7★ ratings and subscription-based revenue"
      tools="Figma, Cursor, RevenueCat"
      timeline="2025 – Present"
      disclaimer="Product details focus on UX, product design, and high-level outcomes."
    >
      <div className="space-y-12">
       

        <section aria-labelledby="chisme-overview" className="space-y-6">
          <h2
            id="chisme-overview"
            className="text-2xl font-semibold mb-4"
          >
            Overview
          </h2>
          <p className="text-lg leading-relaxed">
            Chisme is a <strong>women-only</strong> social app that helps women meet new friends through <strong>shared activities</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            Many women want to do something — go to the theatre, play padel, try a new café — but their friends are unavailable. Chisme turns intentions into open invitations: someone creates a plan and other women nearby can join.
          </p>
          <p className="text-lg leading-relaxed">
            The app is intentionally <strong>women-only</strong>. Mixed friendship apps often become dating environments with unwanted messages; Chisme focuses on a <strong>safe space</strong> for genuine friendships.
          </p>
        </section>

        <section aria-labelledby="chisme-key-impact" className="space-y-6">
          <h2
            id="chisme-key-impact"
            className="text-2xl font-semibold mb-4"
          >
            Key impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3">
            <div className="flex flex-col gap-1 rounded-lg border border-gray-100 bg-gray-50/60 px-4 py-4 md:px-5 md:py-5">
              <div className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
                20K+
              </div>
              <div className="text-sm md:text-base text-gray-600">
                Monthly active users
              </div>
            </div>

            <div className="flex flex-col gap-1 rounded-lg border border-gray-100 bg-gray-50/60 px-4 py-4 md:px-5 md:py-5">
              <div className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
                75%
              </div>
              <div className="text-sm md:text-base text-gray-600">
                Onboarding completion
              </div>
            </div>

            <div className="flex flex-col gap-1 rounded-lg border border-gray-100 bg-gray-50/60 px-4 py-4 md:px-5 md:py-5">
              <div className="flex items-center gap-1">
                <span className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
                  4.7
                </span>
                <span className="text-2xl md:text-3xl font-semibold leading-tight text-gray-900">
                  ★
                </span>
              </div>
              <div className="text-sm md:text-base text-gray-600">
                App Store rating
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="chisme-role" className="space-y-6">
          <h2
            id="chisme-role"
            className="text-2xl font-semibold mb-4"
          >
            My role &amp; responsibilities
          </h2>
          <p className="text-lg leading-relaxed">
            As <strong>co-founder</strong> and <strong>product designer</strong>, I shaped the product from <strong>concept to live</strong>. My responsibilities included:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-lg leading-relaxed">
            <li>defining the <strong>core product concept</strong> and interaction model</li>
            <li>designing the UX and interface of the mobile app</li>
            <li>creating the product’s <strong>design system</strong> in Figma</li>
            <li>designing <strong>key flows</strong> (onboarding, discovery, plan creation)</li>
            <li>collaborating with developers and iterating on the product after launch</li>
          </ul>
        </section>

        <section aria-labelledby="chisme-problem" className="space-y-6">
          <h2
            id="chisme-problem"
            className="text-2xl font-semibold mb-4"
          >
            Problem
          </h2>
          <p className="text-lg leading-relaxed">
            Two core challenges: people <strong>rarely take initiative</strong> when meeting strangers (many waited for others to create activities), and even when they joined plans, <strong>starting conversations felt uncomfortable</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            For the platform to work, users needed:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-lg leading-relaxed">
            <li>a clear way to <strong>discover people and activities</strong> nearby</li>
            <li>a <strong>natural entry point</strong> for conversations</li>
            <li>a <strong>safe environment</strong> where interactions feel comfortable</li>
          </ul>
        </section>

        <section aria-labelledby="chisme-design-decisions" className="space-y-6">
          <h2
            id="chisme-design-decisions"
            className="text-2xl font-semibold mb-4"
          >
            Key design decisions
          </h2>
          <p className="text-lg leading-relaxed">
            Several early design decisions shaped how the product works today.
          </p>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Plan-based interaction model
              </h3>
              <p className="text-lg leading-relaxed">
                Instead of swipe-based matching, Chisme is built around <strong>shared activities</strong>: users create real-life plans others can join, reducing the awkwardness of messaging strangers and creating natural reasons to interact.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Encouraging initiative
              </h3>
              <p className="text-lg leading-relaxed">
                Early versions used a simple "+" button; many users overlooked it. Replacing it with the contextual CTA <strong>“Me apetece…”</strong> (“I feel like doing…”) 
                <strong>significantly increased plan creation</strong> (effectively doubled).
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Reducing conversation friction
              </h3>
              <p className="text-lg leading-relaxed">
                Many users joined plans but hesitated to start conversations. <strong>Pre-written introduction messages</strong> let users send a friendly message with a <strong>single tap</strong>, helping conversations start more naturally.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="chisme-iterations" className="space-y-6">
          <h2
            id="chisme-iterations"
            className="text-2xl font-semibold mb-4"
          >
            Key product iterations
          </h2>
          <p className="text-lg leading-relaxed">
            After launch, the product evolved based on user behavior. The following iterations
            address specific usability issues that emerged over time.
          </p>

          <div className="space-y-10">
            {/* Iteration 1: Improving map discovery */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Improving map discovery
              </h3>
              <p className="text-lg leading-relaxed">
                Early versions displayed every plan individually on the map; as plans grew, the interface became cluttered and hard to navigate.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Map clustering</strong> was introduced, grouping nearby plans when zoomed out. This improved <strong>readability</strong> and helped users understand <strong>activity density</strong> across the city.
              </p>
              <div className="mt-4">
                <BeforeAfterComparison
                  beforeImage="/chisme/iterations/Map discovery - before.png"
                  afterImage="/chisme/iterations/Map discovery - after.png"
                  alt="Map discovery – clustering"
                />
              </div>
            </div>

            {/* Iteration 2: Reorganizing conversations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Reorganizing conversations
              </h3>
              <p className="text-lg leading-relaxed">
                The initial layout was a single chronological list; as conversations grew, important messages were easily missed. A <strong>tab-based structure</strong> was introduced with four categories: <strong>All</strong>, <strong>Unread</strong>, <strong>Direct messages</strong>, <strong>Plan conversations</strong>.
              </p>
              <div className="mt-4">
                <BeforeAfterComparison
                  beforeImage="/chisme/iterations/Messages - before.png"
                  afterImage="/chisme/iterations/Messages - after.png"
                  alt="Conversations – tab structure"
                />
              </div>
            </div>

            {/* Iteration 3: Encouraging notification activation */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Encouraging notification activation
              </h3>
              <p className="text-lg leading-relaxed">
                Many users skipped push notifications during onboarding and missed conversations. A <strong>persistent notification card</strong> was added to messaging and notifications screens until users enable updates. Push opt-in increased from <strong>47% to 62%</strong>.
              </p>
              <div className="mt-4">
                <BeforeAfterComparison
                  beforeImage="/chisme/iterations/Notifications - before.png"
                  afterImage="/chisme/iterations/Notifications - after.png"
                  alt="Notifications – persistent card"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="chisme-key-flows"
          className="space-y-6"
        >
          <h2
            id="chisme-key-flows"
            className="text-2xl font-semibold mb-4"
          >
            Key product flows
          </h2>
          <p className="text-lg leading-relaxed">
            Core interactions of the product.
          </p>

          <div className="space-y-10">
            {/* Onboarding flow */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Onboarding flow
              </h3>
              <p className="text-lg leading-relaxed">
                Users enter their name, confirm age, set location, and complete selfie verification before accessing the app. Onboarding completion rate: <strong>75%</strong>.
              </p>

              <div className="mt-4">
                <div className="flex gap-8 overflow-x-auto pb-2 snap-x snap-mandatory">
                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 1
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Enter name
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/onboarding-step-1.png"
                        alt="Onboarding – enter name"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 2
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Verify age
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/onboarding-step-2.png"
                        alt="Onboarding – verify age"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 3
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Set location
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/onboarding-step-3.png"
                        alt="Onboarding – set location"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 4
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Selfie verification
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/onboarding-step-4.png"
                        alt="Onboarding – selfie verification"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 5
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Verification pending
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/onboarding-step-5.png"
                        alt="Onboarding – verification pending"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* People discovery flow */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                People discovery flow
              </h3>
              <p className="text-lg leading-relaxed">
                Map-based discovery and profile browsing; <strong>premium filters</strong> for distance, interests, and language.
              </p>

              <div className="mt-4">
                <div className="flex gap-8 overflow-x-auto pb-2 snap-x snap-mandatory">
                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 1
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Discover people nearby
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/people-flow-step-1.png"
                        alt="People discovery – open map-based discovery"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 2
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Browse nearby people
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/people-flow-step-2.png"
                        alt="People discovery – adjust distance and interests"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 3
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Apply filters
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/people-flow-step-3.png"
                        alt="People discovery – browse people nearby"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 4
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Filtered results
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/people-flow-step-4.png"
                        alt="People discovery – open profile details"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 5
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Start conversation
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/people-flow-step-5.png"
                        alt="People discovery – start a conversation"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan creation flow */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Plan creation flow
              </h3>
              <p className="text-lg leading-relaxed">
                Users create plans by selecting activity, date, and location. Replacing the "+" icon with the CTA <strong>"Me apetece…"</strong> <strong>doubled plan creation</strong>.
              </p>

              <div className="mt-4">
                <div className="flex gap-8 overflow-x-auto pb-2 snap-x snap-mandatory">
                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 1
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Discover nearby plans
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/plan-flow-step-1.png"
                        alt="Plan creation – discover nearby plans"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 2
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Create a new plan
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/plan-flow-step-2.png"
                        alt="Plan creation – create a new plan"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 3
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Choose location
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/plan-flow-step-3.png"
                        alt="Plan creation – choose location"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 4
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Publish the plan
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/plan-flow-step-4.png"
                        alt="Plan creation – publish the plan"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[220px] flex-shrink-0 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-1">
                      Step 5
                    </p>
                    <p className="text-base font-semibold mb-3">
                      Start conversation
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="/chisme/plan-flow-step-5.png"
                        alt="Plan creation – start conversation"
                        width={220}
                        height={465}
                        className="w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="chisme-design-principles" className="space-y-6">
          <h2
            id="chisme-design-principles"
            className="text-2xl font-semibold mb-4"
          >
            Design principles
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Reduce social friction
              </h3>
              <p className="text-lg leading-relaxed">
                Meeting strangers can feel uncomfortable. Interacting around <strong>shared plans</strong> rather than direct messaging reduces pressure.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Encourage initiative
              </h3>
              <p className="text-lg leading-relaxed">
                Most users hesitate to take the first step. <strong>Contextual CTAs</strong> and <strong>quick message templates</strong> encourage participation.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Design for trust
              </h3>
              <p className="text-lg leading-relaxed">
                With strangers connecting, <strong>safety and trust</strong> are critical. <strong>Identity verification</strong> and community-focused patterns create a comfortable environment.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="chisme-monetization" className="space-y-6">
          <h2
            id="chisme-monetization"
            className="text-2xl font-semibold mb-4"
          >
            Monetization
          </h2>
          <p className="text-lg leading-relaxed">
            One of the hardest product decisions was messaging: in most social apps <strong>1:1 messaging</strong> is free, but Chisme is built around group plans. <strong>Group chats</strong> inside plans remain free; direct <strong>1:1 messaging</strong> requires a <strong>subscription</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            This keeps focus on group activities while supporting the <strong>business model</strong>.
          </p>
        </section>

        <section aria-labelledby="chisme-growth-metrics" className="space-y-6">
          <h2
            id="chisme-growth-metrics"
            className="text-2xl font-semibold mb-4"
          >
            Growth &amp; metrics
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-lg leading-relaxed">
            <li><strong>20K+</strong> monthly active users</li>
            <li>7-day retention: <strong>13–16%</strong></li>
            <li>More than <strong>300</strong> active plans currently running in Spain</li>
          </ul>
          <p className="text-lg leading-relaxed">
            App ratings:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-lg leading-relaxed">
            <li><strong>4.7</strong> App Store (<strong>500</strong> reviews)</li>
            <li><strong>4.5</strong> Google Play (<strong>350</strong> reviews)</li>
          </ul>
          <p className="text-lg leading-relaxed">
            Monetized through <strong>subscriptions</strong> (premium discovery filters, direct messaging).
          </p>
        </section>

        <section aria-labelledby="chisme-learnings" className="space-y-6">
          <h2
            id="chisme-learnings"
            className="text-2xl font-semibold mb-4"
          >
            Learnings
          </h2>
          <p className="text-lg leading-relaxed">
            Building Chisme changed how I think about product design. One of the biggest lessons: <strong>small UX decisions</strong> strongly influence user behavior — clearer CTAs or pre-written starters had a <strong>measurable impact</strong> on engagement.
          </p>
          <p className="text-lg leading-relaxed">
            Working with my co-founder (development) taught me to balance design with <strong>technical constraints</strong>, <strong>server costs</strong>, and startup realities.
          </p>
          <p className="text-lg leading-relaxed">
            Designing for a women-only community made <strong>trust and safety</strong> central: mandatory profile photos and richer profiles helped create a safer environment for joining plans.
          </p>
          <p className="text-lg leading-relaxed">
            This project also shifted my view on visual design: I used to focus on pixel-perfect visuals; now I see that <strong>structure, guardrails, and simplicity</strong> often matter more than <strong>visual polish</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            Social products are complex. People rarely take the first step alone — good design means gently guiding behavior and iterating from <strong>real product data</strong>.
          </p>
        </section>
      </div>
    </CaseStudyLayout>
  )
}
