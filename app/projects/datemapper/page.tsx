'use client';

import CaseStudyLayout from '@/components/CaseStudyLayout'
import Image from "next/image";

export default function DatemapperCaseStudy() {
  return (
    <CaseStudyLayout
      title="DateMapper: Midpoint venues"
      role="Product Designer"
      impact="Increased user retention and engagement after redesign"
      tools="Figma"
      timeline="2024"
      disclaimer="A curated experience for discovering the perfect meet-up spot"
    >
      <div className="space-y-12">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            I joined the DateMapper team to help create a curated map app that simplifies the challenge of choosing a date location in a large city. The app finds the midpoint between two users and recommends nearby spots tailored to their preferences. I led the UX and UI design of all core screens, collaborating closely with the founders, iterating based on user feedback, and ensuring a clear, mobile-first experience.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Role and Scope</h2>
          <p className="text-lg leading-relaxed">
            I worked as the sole Product Designer on the MVP version of the DateMapper app. My responsibilities included defining the information architecture, designing all key screens, conducting usability testing, and collaborating directly with the founders. The goal was to create an intuitive mobile experience that feels both helpful and inviting.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Problem</h2>
          <p className="text-lg leading-relaxed">
            Coordinating a fair and convenient meeting point is often guesswork. Users needed a tool that could suggest suitable locations based on both users' positions while also offering refined recommendations based on atmosphere or preferences.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="text-lg leading-relaxed">
            Design an app that calculates a midpoint and overlays it with personalized venue suggestions. Create a seamless mobile-first interface that supports this concept while remaining elegant and easy to use.
          </p>
      </div>
      
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Design Process</h2>
      <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Research and Discovery</h3>
              <ul className="text-lg leading-relaxed list-disc pl-6 space-y-2 mb-6">
                <li>Interviewed target users who often plan dates or meetups</li>
                <li>Compared existing tools like Google Maps and Corner app</li>
                <li>Identified missing features such as midpoint calculation and niche filters</li>
              </ul>
              <p className="text-lg font-medium mb-2">Key insight</p>
              <p className="text-lg leading-relaxed">
                People want fast, reliable suggestions that feel personal and require minimal effort
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Information Architecture and User Flow</h3>
              <p className="text-lg leading-relaxed mb-4">
                The structure was designed to be simple and focused on conversion:
              </p>
              <ul className="text-lg leading-relaxed list-disc pl-6 space-y-2 mb-6">
                <li>Landing page: brief intro to the app with a call to explore</li>
                <li>Home page: dual input for starting points and venue preferences</li>
                <li>Results page: curated venues at the calculated midpoint</li>
                <li>Map view: interactive overview of venue locations</li>
                <li>Add venue page: form for event hosts or businesses to suggest venues</li>
              </ul>
              <p className="text-lg font-medium mb-2">User flow</p>
              <ol className="text-lg leading-relaxed list-decimal pl-6 space-y-2">
                <li>Both users enter their locations</li>
                <li>App calculates midpoint and shows venue suggestions</li>
                <li>Filters help refine results</li>
                <li>Users view details and can share links to suggested spots</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Core Screens</h2>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mt-6">Landing page</h3>
              <p className="text-sm uppercase text-muted-foreground font-semibold">Goal</p>
              <p className="text-xl">Introduce the concept and encourage users to try the app</p>
              <p className="text-sm uppercase text-muted-foreground font-semibold">Design</p>
              <p className="text-xl">Simple layout with a short explanation and clear call to action</p>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/DM LP.png"
                  alt="DateMapper landing page"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mt-6">Home page</h3>
              <p className="text-sm uppercase text-muted-foreground font-semibold">Goal</p>
              <p className="text-xl">Allow both users to enter locations and see top suggestions</p>
              <p className="text-sm uppercase text-muted-foreground font-semibold">Design</p>
              <p className="text-xl">Input fields for addresses, category filters, and pre-filled cards with trending venues and events</p>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/DM HP.png"
                  alt="DateMapper home page"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mt-6">Results page</h3>
              <p className="text-sm uppercase text-muted-foreground font-semibold">Goal</p>
              <p className="text-xl">Present venues that match the midpoint and user preferences</p>
              <p className="text-sm uppercase text-muted-foreground font-semibold">Design</p>
              <p className="text-xl">Each card includes images, description, hours, distance to each user, and call to action</p>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/DM Results.png"
                  alt="DateMapper results page"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mt-6">Map view</h3>
              <p className="text-sm uppercase text-muted-foreground font-semibold">Goal</p>
              <p className="text-xl">Visualize venues and midpoint</p>
              <p className="text-sm uppercase text-muted-foreground font-semibold">Design</p>
              <p className="text-xl">Interactive map with user markers, midpoint pin, and clickable venue icons</p>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/DM map.png"
                  alt="DateMapper map view"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mt-6">Add venue or event page</h3>
              <p className="text-sm uppercase text-muted-foreground font-semibold">Goal</p>
              <p className="text-xl">Let others expand the venue database</p>
              <p className="text-sm uppercase text-muted-foreground font-semibold">Design</p>
              <p className="text-xl">Simple form with labeled fields for submitting new locations</p>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/DM add.png"
                  alt="DateMapper add venue page"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Visual Design</h2>
          <ul className="text-lg leading-relaxed list-disc pl-6 space-y-2">
            <li><span className="font-medium">Colors:</span> Neutral tones with calm accent colors to suggest warmth and clarity</li>
            <li><span className="font-medium">Typography:</span> Readable friendly sans-serif with clear hierarchy</li>
            <li><span className="font-medium">Iconography:</span> Custom icons to indicate key actions and reinforce app branding</li>
            <li><span className="font-medium">Components:</span> Designed a small set of components (cards, filters, inputs) with consistent visual language and interaction logic</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Testing and Iteration</h2>
          <p className="text-lg leading-relaxed mb-4">
            Conducted tests with early users. Based on findings:
          </p>
          <ul className="text-lg leading-relaxed list-disc pl-6 space-y-2">
            <li>Added niche filters (queer friendly, woman owned)</li>
            <li>Made distance indicators clearer and more relatable</li>
            <li>Improved microcopy for better clarity</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <ul className="text-lg leading-relaxed list-disc pl-6 space-y-2">
            <li>Translating a fairly technical backend (midpoint logic) into something users can grasp quickly</li>
            <li>Balancing helpful UI with minimal distractions</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Reflection</h2>
          <p className="text-lg leading-relaxed">
            This project reinforced how well-designed tools can turn real-life challenges into simple interactions. Designing for mobile-first forced clarity and focus. Iterating with users and closely collaborating with founders helped us land on a product that feels meaningful, lightweight, and memorable.
        </p>
      </div>
      
        <section className="bg-muted/40 border border-muted rounded-2xl p-6 md:p-10 mt-10">
          <h2 className="text-2xl font-semibold mb-6">Client Testimonial</h2>
          <blockquote className="text-muted-foreground text-base leading-relaxed space-y-5 italic">
            <p>
              "Without Martin, DateMapper would not have been able to get to where it is right now. He brought a high level of professionalism to the project, introducing a very structured and effective approach."
            </p>
            <p>
              "He helped us make some initial quick wins to improve the UX immediately, while simultaneously putting together a long term plan. Martin adapted to our startup needs and timelines and made a clear impact. User stickiness and session duration went up significantly."
            </p>
            <p>
              "We highly recommend working with Martin. Not only is he an outstanding professional, but also a pleasure to work with."
            </p>
          </blockquote>
          <footer className="pt-4 text-sm font-medium text-right text-foreground">
            — Joshua Lever, CEO of DateMapper
          </footer>
        </section>
    </div>
    </CaseStudyLayout>
  );
} 