export interface Project {
  id: string;
  title: string;
  description: string;
  slug: string;
  link?: string;
  image?: string;
  technologies: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Insurance Product Modeler',
    description: 'Redesigned a modular interface for modeling insurance products, reducing time-to-quote for developers. Focused on usability, design system consistency, and domain logic clarity.',
    slug: 'insurance-product-modeler',
    link: 'https://example.com',
    technologies: ['UX Design', 'Figma', 'Design Systems'],
    featured: true,
  },
  {
    id: '2',
    title: 'Banking Tasklist App',
    description: 'Streamlined a legacy workflow app for insurance agents and underwriters. Improved task overview, navigation, and error handling, while respecting business constraints.',
    slug: 'banking-tasklist-app',
    link: 'https://example.com',
    technologies: ['UX/UI Design', 'User Research', 'Prototyping'],
    featured: true,
  },
  {
    id: '3',
    title: 'Datemapper',
    description: 'Designed a flexible UI for mapping complex data structures. Balanced power-user controls with onboarding simplicity. Used in a data-heavy internal analytics platform.',
    slug: 'datemapper',
    link: 'https://example.com',
    technologies: ['UX Design', 'Data Visualization', 'Complex Interfaces'],
    featured: true,
  },
  {
    id: '4',
    title: 'Workflow Optimization Tool',
    description: 'Streamlined complex approval processes reducing task completion time by 40%.',
    slug: 'workflow-optimization-tool',
    link: 'https://example.com',
    technologies: ['Process Design', 'User Journey Mapping', 'Analytics'],
    featured: false,
  },
]; 