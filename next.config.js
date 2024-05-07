/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  env:{
    RapidAPI_Key : "2ac4984ffemsh2b2c0b79629cb4ep152f64jsnefb888ff6c68"
  }
}

module.exports = nextConfig
