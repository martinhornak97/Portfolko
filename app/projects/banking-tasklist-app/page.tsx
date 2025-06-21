import Link from 'next/link';

export default function BankingTasklistAppPage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-20 py-20">
      <img 
        src="https://source.unsplash.com/random/800x600?sig=2" 
        alt="Banking Tasklist App"
        className="w-full rounded-lg shadow-lg mb-8"
      />
      
      <h1 className="mb-4">Banking Tasklist App</h1>
      
      <div className="space-y-2 mb-8">
        <p className="meta-text">Role: UX research, design, handoff</p>
        <p className="meta-text">Tools: Figma, Jira, Microsoft Clarity</p>
        <p className="meta-text">Year: 2023</p>
      </div>
      
      <div className="space-y-8">
        <p>
          Streamlined underwriting workflows across multiple legacy systems. This project focused on 
          unifying fragmented processes that previously required switching between 5 different 
          applications, causing significant friction in the underwriting workflow.
        </p>
        
        <p>
          Through comprehensive user research with underwriting teams, I identified key pain points 
          in the existing workflow. The main challenge was creating a centralized tasklist that could 
          aggregate information from various legacy systems while providing a seamless user experience.
        </p>
        
        <p>
          The solution involved designing a smart task prioritization system with contextual information 
          display, reducing the cognitive load on underwriters. User testing showed a 60% reduction 
          in task completion time and significantly improved user satisfaction scores.
        </p>
        
        <p>
          The project required close collaboration with engineering teams to ensure feasibility while 
          maintaining the integrity of existing systems. The final design was successfully implemented 
          and adopted across all underwriting departments.
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