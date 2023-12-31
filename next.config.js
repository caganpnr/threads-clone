/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    //If you don't add the line below it's not going to now how to render mongoose actions
    serverComponentsExternalPackages: ["mongoose"],
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
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
    typescript: {
      ignoreBuildErrors: true,
    },
  },
};

module.exports = nextConfig;
