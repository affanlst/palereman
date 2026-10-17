import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "palereman\\.vercel\\.app" }],
      destination: "https://paleremancafe.web.id/:path*",
      permanent: true,
    }];
  },
};

export default nextConfig;
