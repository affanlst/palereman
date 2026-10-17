import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
