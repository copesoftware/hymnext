import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hymnext",
  assetPrefix: "/hymnext/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
