import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in out/ — deployable to any static host (spec NFR-1).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
