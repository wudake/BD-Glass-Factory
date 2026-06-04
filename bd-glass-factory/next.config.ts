import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  // Let Nginx handle compression (Brotli + Gzip) — avoids double-compression
  compress: false,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Enable React Strict Mode for better performance patterns
  reactStrictMode: true,

  turbopack: {
    root: process.cwd(),
  },

  // Optimize tree-shaking for heavy icon library
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
