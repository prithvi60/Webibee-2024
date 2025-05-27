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
        hostname: "mywebibeeworld.b-cdn.net",
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
