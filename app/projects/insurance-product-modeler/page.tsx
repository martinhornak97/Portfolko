import Link from 'next/link';

export default function InsuranceProductModelerPage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-20 py-20">
      <img 
        src="https://source.unsplash.com/random/800x600?sig=1" 
        alt="Insurance Product Modeler"
        className="w-full rounded-lg shadow-lg mb-8"
      />
      
      <h1 className="mb-4">Insurance Product Modeler</h1>
      
      <div className="space-y-2 mb-8">
        <p className="meta-text">Role: UX design, prototyping, design system</p>
        <p className="meta-text">Tools: Figma, Notion, Cursor</p>
        <p className="meta-text">Year: 2024</p>
      </div>
      
      <div className="space-y-8">
        <p>
          Redesigned a modular interface for modeling insurance products. This project involved creating 
          a comprehensive design system that could accommodate the complex requirements of insurance 
          product configuration while maintaining usability for non-technical users.
        </p>
        
        <p>
          The challenge was to transform a legacy system with scattered functionality into a cohesive, 
          intuitive interface that allows product managers to create and modify insurance offerings 
          efficiently. Through extensive user research and iterative prototyping, we developed a 
          modular approach that breaks down complex insurance products into manageable components.
        </p>
        
        <p>
          The resulting design system not only improved user efficiency by 40% but also provided 
          a foundation for future product development, ensuring consistency across all insurance 
          product management interfaces.
        </p>
      </div>
      
      <Link 
        href="/projects" 
        className="cta-text block mt-12 hover:opacity-70 transition-opacity"
      >
        ← Back to all projects
      </Link>
    </div>
  );
} 