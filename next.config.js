/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dms.licdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scontent-ams2-1.cdninstagram.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
