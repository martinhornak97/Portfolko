export default function SkillsTools() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-20">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="meta-text mb-10">
          UX Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-12 text-center items-center">
          {[
            { name: 'Figma', icon: '/icons/figma.svg' },
            { name: 'Miro', icon: '/icons/miro.svg' },
            { name: 'Clarity', icon: '/icons/clarity.svg' },
            { name: 'Cursor', icon: '/icons/cursor.svg' },
            { name: 'Notion', icon: '/icons/notion.svg' },
            { name: 'Lovable', icon: '/icons/lovable.svg' },
            { name: 'V0', icon: '/icons/v0.svg' },
          ].map((tool) => (
            <div key={tool.name} className="flex flex-col items-center space-y-4">
              <div className="w-48 h-48 flex items-center justify-center">
                <img src={tool.icon} alt={tool.name} className="max-w-full max-h-full object-contain" />
              </div>
              <span className="meta-text">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 