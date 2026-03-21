'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout'
import Image from 'next/image'
import BeforeAfterComparison from '../../components/BeforeAfterComparison'

export default function ChismeCaseStudyPage() {
  return (
    <CaseStudyLayout
      title="Chisme: Women's meetups"
      role="Co-Founder & Product Designer"
      impact="20K+ monthly active users, 4.7★ rating, subscription revenue"
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
            Chisme started from a simple observation. I wanted to go for a beer one evening and had no one to join me. That got me thinking about a broader problem, and when I considered who might face it most, I landed on women. Mixed friendship apps tend to drift into dating territory, full of unwanted messages and uncomfortable dynamics. A women-only space built around real-life activities felt like a different and more interesting problem to solve.
          </p>
          <p className="text-lg leading-relaxed">
            I co-founded Chisme and led all product design from concept to launch and beyond. My co-founder handled development; I defined the product direction, designed every flow and screen, built the design system in Figma, and shaped the monetization model.
          </p>
          <p className="text-lg leading-relaxed">
            Before a single line of code was written, we validated the idea with Figma prototypes shared on Instagram and TikTok. We set a target of 100 pre-registrations in the first month. We got 85. Close enough that we decided to put money into ads to test whether real demand existed. Two weeks later we had 200 pre-registrations. We started building.
          </p>
          <p className="text-lg leading-relaxed">
            Chisme launched on October 20, 2024. Within four months, it reached 20,000 monthly active users, a 4.7 App Store rating, and subscription-based revenue.
          </p>
        </section>

        <section aria-labelledby="chisme-key-impact" className="space-y-6">
          <h2
            id="chisme-key-impact"
            className="text-2xl font-semibold mb-4"
          >
            Key impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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

        <section aria-labelledby="chisme-problem" className="space-y-6">
          <h2
            id="chisme-problem"
            className="text-2xl font-semibold mb-4"
          >
            Problem
          </h2>
          <p className="text-lg leading-relaxed">
            Two core challenges shaped the product. First, people rarely take initiative when it comes to meeting strangers. Even interested users tended to wait for someone else to go first. Second, even when users did join a plan, starting a conversation with someone they didn't know felt uncomfortable.
          </p>
          <p className="text-lg leading-relaxed">
            For the platform to work, it needed to address both: a clear way to discover people and activities nearby, a natural entry point for conversations, and an environment safe enough to actually try.
          </p>
        </section>

        <section aria-labelledby="chisme-design-decisions" className="space-y-6">
          <h2
            id="chisme-design-decisions"
            className="text-2xl font-semibold mb-4"
          >
            Key design decisions
          </h2>
          <p className="text-lg leading-relaxed">
            Several early decisions shaped how the product works today.
          </p>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Plan-based interaction model
              </h3>
              <p className="text-lg leading-relaxed">
                Instead of swipe-based matching, Chisme is built around shared activities. Users create real-life plans that others can join. The shared context removes the awkwardness of messaging a stranger out of nowhere and gives conversations a natural starting point.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Encouraging initiative with contextual language
              </h3>
              <p className="text-lg leading-relaxed">
                Early versions used a simple "+" button to create plans. Many users overlooked it. Replacing it with the contextual CTA "Me apetece..." ("I feel like doing...") effectively doubled plan creation. The change worked because it framed the action as expressing an intention, not committing to something.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Reducing conversation friction
              </h3>
              <p className="text-lg leading-relaxed">
                Many users joined plans but hesitated to send the first message. Pre-written introduction messages let users start a conversation with a single tap, giving people a way in without having to come up with something to say.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Keeping plans time-bounded
              </h3>
              <p className="text-lg leading-relaxed">
                Plans live until midnight on the day they're created. This keeps the product focused on spontaneous, same-day activity rather than long-term scheduling. It also keeps the feed fresh and reduces dead plans that never get joined.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Safety through selfie verification
              </h3>
              <p className="text-lg leading-relaxed">
                Selfie verification during onboarding is how the women-only rule is enforced. It adds meaningful friction for bad actors and signals to users that the community takes safety seriously.
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
            After launch, the product evolved based on user behavior. The following iterations address specific usability issues that emerged over time.
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
                Map clustering was introduced, grouping nearby plans when zoomed out. This improved readability and helped users understand activity density across the city.
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
                The initial layout was a single chronological list; as conversations grew, important messages were easily missed. A tab-based structure was introduced with four categories: All, Unread, Direct messages, Plan conversations.
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
                Many users skipped push notifications during onboarding and missed conversations. A persistent notification card was added to messaging and notifications screens until users enable updates. Push opt-in increased from 47% to 62%.
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

          <div className="space-y-10">
            {/* Onboarding flow */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Onboarding flow
              </h3>
              <p className="text-lg leading-relaxed">
                The onboarding collects a name, age confirmation, location, and a selfie. The selfie step is the most unusual and the most intentional: since Chisme is women-only, it's the primary way we verify who's joining the community. Completion rate: 75%.
              </p>

              <div className="mt-4">
                <div className="flex gap-8 overflow-x-auto pb-2 snap-x snap-mandatory">
                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
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
                The map is the primary discovery surface because location is central to how the product works. Plans and people are inherently local, and a map communicates density and proximity in a way a list can't. Premium filters for distance, interests, and language let users narrow what they see. A list view organized by day is also available for users who prefer browsing linearly.
              </p>

              <div className="mt-4">
                <div className="flex gap-8 overflow-x-auto pb-2 snap-x snap-mandatory">
                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
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
                The creation flow lives on a single screen with no more than four inputs: activity type, date, time, and location. That constraint was intentional. If creating a plan feels like filling out a form, people won't do it. The goal was to make it feel as light as sending a message. Replacing the "+" icon with the CTA "Me apetece..." effectively doubled plan creation.
              </p>

              <div className="mt-4">
                <div className="flex gap-8 overflow-x-auto pb-2 snap-x snap-mandatory">
                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 text-gray-400">
                    <span className="text-lg">
                      →
                    </span>
                  </div>

                  <div className="snap-start w-[260px] sm:w-[220px] flex-shrink-0 text-left">
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
                        className="w-[260px] sm:w-[220px] h-auto aspect-[9/19] rounded-xl object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
            One of the harder product decisions was messaging. In most social apps, 1:1 messaging is free. But Chisme is built around group plans, not direct conversations. Group chats inside plans remain free; direct 1:1 messaging requires a subscription. This keeps the focus on shared activities while supporting the business model.
          </p>
        </section>

        <section aria-labelledby="chisme-growth-metrics" className="space-y-6">
          <h2
            id="chisme-growth-metrics"
            className="text-2xl font-semibold mb-4"
          >
            Growth &amp; metrics
          </h2>
          <p className="text-lg leading-relaxed">
            Chisme reached 20,000 monthly active users within four months of launch, through a combination of organic TikTok and Instagram content and Meta advertising. More than 300 active plans are currently running in Spain.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-lg leading-relaxed">
            <li>4.7 App Store (500 reviews)</li>
            <li>4.5 Google Play (350 reviews)</li>
          </ul>
          <p className="text-lg leading-relaxed">
            Monetized through subscriptions covering premium discovery filters and direct messaging.
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
            Building Chisme changed how I think about the relationship between small design decisions and user behavior. Changing a button label or adding a pre-written message starter had measurable effects on how people actually used the product. That's not obvious until you see it in real data.
          </p>
          <p className="text-lg leading-relaxed">
            Co-founding a product also meant designing within real constraints: server costs, development time, two people building in their spare time after their day jobs. That changes how you prioritize. Not every idea gets built. You learn to identify which design decision actually moves the needle.
          </p>
          <p className="text-lg leading-relaxed">
            Designing for a women-only community made trust and safety central from day one. Verification, community standards, and patterns that felt safe enough to actually approach a stranger were foundational, not features added later.
          </p>
        </section>

        <section aria-labelledby="chisme-download" className="space-y-4">
          <h2
            id="chisme-download"
            className="text-2xl font-semibold mb-4"
          >
            Try it yourself
          </h2>
          <p className="text-lg leading-relaxed">
            Chisme is available on both platforms.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://apps.apple.com/es/app/chisme-planes-entre-mujeres/id6753000653"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors text-base font-medium text-gray-900"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.chisme.chismosa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors text-base font-medium text-gray-900"
            >
              Google Play
            </a>
          </div>
        </section>

      </div>
    </CaseStudyLayout>
  )
}
