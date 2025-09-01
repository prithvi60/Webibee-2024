/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.webibee.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "youtube.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
