import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Allow production builds even if there are ESLint errors.
    // This avoids Vercel deploys failing on ESLint config option changes.
    ignoreDuringBuilds: true,
  },
  /* Allow cross-origin requests for development */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
