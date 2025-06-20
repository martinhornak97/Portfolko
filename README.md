# Personal Portfolio

A clean, minimal personal portfolio built with Next.js 13+ (App Router), TypeScript, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 13+ with App Router, TypeScript, Tailwind CSS
- **Clean Design**: Minimal, responsive design inspired by [hansonwu.com](https://www.hansonwu.com/)
- **Performance-First**: Optimized for speed and SEO
- **Accessibility**: Semantic HTML and WCAG-compliant markup
- **Type-Safe**: Full TypeScript support throughout
- **Code Quality**: ESLint + Prettier for consistent code formatting

## Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (via next/font/google)
- **Utils**: clsx for conditional class names
- **Linting**: ESLint with Next.js config
- **Formatting**: Prettier

## Project Structure

```
├── app/
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page
│   ├── projects/[slug]/page.tsx # Dynamic project pages
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Site footer
│   ├── Layout.tsx               # Main layout wrapper
│   ├── ProjectCard.tsx          # Project display component
│   └── index.ts                 # Component exports
├── data/
│   └── projects.ts              # Project data and types
└── public/                      # Static assets
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information
Update the following files with your information:

- **Name and tagline**: `app/page.tsx` (hero section)
- **About content**: `app/about/page.tsx`
- **Contact info**: `app/contact/page.tsx` and `components/Footer.tsx`
- **Navigation branding**: `components/Header.tsx`

### Projects
Edit `data/projects.ts` to add your projects:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project Title',
    description: 'Brief project description',
    slug: 'project-url-slug',
    link: 'https://your-project-url.com',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    featured: true, // Show on homepage
  },
  // Add more projects...
];
```

### Styling
- **Colors**: Update Tailwind classes in components
- **Typography**: Modify font settings in `app/layout.tsx`
- **Layout**: Adjust spacing and sizing in components

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Run TypeScript type checking
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
The app is a standard Next.js application and can be deployed to any platform that supports Node.js.

## Performance Optimizations

- **Next.js Image**: Automatic image optimization
- **Font optimization**: Inter font loaded via next/font/google
- **Static generation**: All pages are statically generated when possible
- **Minimal bundle**: Only necessary code is shipped

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and TypeScript
