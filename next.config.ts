import withPWA from "next-pwa";
import { NextConfig } from "next";

const nextConfig: NextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})({
  output: 'standalone',
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "schoolhealth.plus",
        pathname: "/**",
      },
    ],
    unoptimized: process.env.NODE_ENV === "development", // Allow unoptimized images during development
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Keep webpack enabled for PWA support
  webpack: (config) => {
    // Let next-pwa handle webpack config
    return config;
  },
  turbopack: {
    // Turbopack configuration
    rules: {
      // Add any specific rules if needed
    },
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            // Security headers
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
});

export default nextConfig;
