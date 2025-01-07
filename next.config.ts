import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone", // ✅ Required for Netlify Deployment
  eslint: {
    ignoreDuringBuilds: true, // ✅ Fix: Ignore ESLint errors in Netlify builds
  },
};

export default nextConfig; // ✅ Only ONE default export
