import Link from 'next/link';
import { Layout } from '@/components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-black tracking-tight">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600">Page Not Found</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-black hover:bg-gray-50 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
} 