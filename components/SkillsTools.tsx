type StackTool = {
  name: string;
  icon: string;
  imgClass?: string;
};

const stackTools: StackTool[] = [
  { name: 'Figma', icon: '/icons/figma.svg' },
  { name: 'Cursor', icon: '/icons/cursor.svg' },
  { name: 'Claude', icon: '/icons/claude-symbol.svg' },
  { name: 'Framer', icon: '/icons/framer.svg' },
  { name: 'RevenueCat', icon: '/icons/revenuecat.svg' },
  { name: 'Google Analytics 4', icon: '/icons/ga4.svg' },
  { name: 'Miro', icon: '/icons/miro.svg' },
];

const iconSizeClass =
  'max-h-[clamp(2.75rem,4.5vw,5.5rem)] max-w-[clamp(2.75rem,4.5vw,5.5rem)] object-contain';

export default function SkillsTools() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-20">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="meta-text mb-10 md:mb-12">UX Stack</h2>
        <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 md:grid-cols-4 md:gap-x-8 lg:grid-cols-7 lg:gap-x-6 lg:gap-y-0 xl:gap-x-8 2xl:gap-x-10">
          {stackTools.map((tool) => (
            <li key={tool.name} className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="flex h-[clamp(3.25rem,5vw,6.5rem)] w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element -- static SVG assets from /public */}
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className={tool.imgClass ?? iconSizeClass}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="meta-text min-h-[2.5em] text-center leading-snug">{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
