import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone", // ✅ Important for Netlify deployment
};

export default nextConfig;
