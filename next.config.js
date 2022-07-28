/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,

  async redirects() {
    return [
      {
        source: "/payload",
        destination: "/api/payload", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
};
