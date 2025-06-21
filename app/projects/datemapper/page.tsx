import Link from 'next/link';

export default function DatemapperPage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-20 py-20">
      <img 
        src="https://source.unsplash.com/random/800x600?sig=3" 
        alt="Datemapper"
        className="w-full rounded-lg shadow-lg mb-8"
      />
      
      <h1 className="mb-4">Datemapper</h1>
      
      <div className="space-y-2 mb-8">
        <p className="meta-text">Role: UI design, prototyping</p>
        <p className="meta-text">Tools: Figma, Notion</p>
        <p className="meta-text">Year: 2022</p>
      </div>
      
      <div className="space-y-8">
        <p>
          Designed a flexible UI for mapping complex data structures. This internal tool was created 
          to help data analysts and engineers visualize and manipulate relationships between different 
          data sources in our enterprise data warehouse.
        </p>
        
        <p>
          The main challenge was creating an interface that could handle the complexity of nested data 
          relationships while remaining intuitive for users with varying technical backgrounds. The 
          solution needed to accommodate both simple one-to-one mappings and complex many-to-many 
          relationships with conditional logic.
        </p>
        
        <p>
          I developed a visual mapping interface with drag-and-drop functionality, hierarchical data 
          visualization, and real-time validation feedback. The design employed familiar metaphors 
          from data flow diagrams while introducing innovative interaction patterns for complex 
          mapping scenarios.
        </p>
        
        <p>
          The final prototype demonstrated a 70% reduction in setup time for new data mappings and 
          significantly reduced errors in data transformation pipelines. The tool became essential 
          for the data team's daily workflows and influenced the design of several subsequent 
          data management interfaces.
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