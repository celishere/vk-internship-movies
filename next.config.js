/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://cinema.celis.works"
  },
  experimental: {
    webpackBuildWorker: true,
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.openmoviedb.com"
      },
      {
        protocol: "https",
        hostname: "st.kp.yandex.net"
      }
    ]
  },
  reactStrictMode: false
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false
});

module.exports = withBundleAnalyzer(nextConfig);