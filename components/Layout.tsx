import { Inter } from 'next/font/google';
import { Header } from './Header';
import { Footer } from './Footer';
import { clsx } from 'clsx';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={clsx('min-h-screen bg-white text-black', inter.className)}>
      <Header />
      <main className={clsx('flex-1', className)}>{children}</main>
      <Footer />
    </div>
  );
} 