import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve images from /public as-is (no Sharp / _next/image pipeline).
  // Fixes environments where native image optimization crashes or returns 500.
  images: {
    unoptimized: true,
  },
  eslint: {
    // Allow production builds even if there are ESLint errors.
    // This avoids Vercel deploys failing on ESLint config option changes.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
