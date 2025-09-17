import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export", // 👈 enables static export
  images: {
    unoptimized: true, // GitHub Pages doesn’t support next/image optimization
  },
  eslint: {
    ignoreDuringBuilds: true, // disable eslint in builds
  },
  trailingSlash: true, // optional (helps with GitHub Pages routing)
}

export default nextConfig
