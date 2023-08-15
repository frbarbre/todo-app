/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: ["mongoose"],
      serverActionsBodySizeLimit: "4mb"
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.clerk.com",
        },
        {
          protocol: "https",
          hostname: "images.clerk.dev",
        },
      ],
      typescript: {
        ignoreBuildErrors: true,
      },
    },
  };
  
  module.exports = nextConfig;