import Link from 'next/link';

const pillClass =
  'absolute bottom-full left-0 mb-5 md:mb-6 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm';

/**
 * Small "available" pill that floats above a heading without shifting layout.
 * The parent must be `position: relative`.
 */
export function AvailabilityPill({ href }: { href?: string }) {
  const content = (
    <>
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-0 motion-safe:animate-soft-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      Available for small projects
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${pillClass} transition-colors hover:border-gray-300 hover:text-black`}
      >
        {content}
      </Link>
    );
  }

  return <span className={pillClass}>{content}</span>;
}
