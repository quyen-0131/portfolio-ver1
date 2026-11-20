import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Separate output folders avoid Windows ownership conflicts between local tools.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
