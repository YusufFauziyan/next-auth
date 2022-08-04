/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GRAPHQL_URL: "https://dev-khayanganjxhpv.microgen.id/graphql",
    WS_URL: "wss://dev-khayanganjxhpv.microgen.id/graphql",
  },
  images: {
    domains: ["file.mejik.id"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
