import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Skadebesiktning is temporarily off the site — keep the indexed URL alive.
      {
        source: "/tjanster/skadebesiktning",
        destination: "/tjanster",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
