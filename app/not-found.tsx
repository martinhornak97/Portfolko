import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 py-32">
      <h1 className="mb-6">Lost in the wireframes.</h1>
      <p className="mb-12">
        This page doesn't exist — or it was removed during the last redesign.<br />
        Let's get you back on track.
      </p>
      <Link
        href="/"
        className="cta-text px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
      >
        ← Go back home
      </Link>
    </div>
  );
} 