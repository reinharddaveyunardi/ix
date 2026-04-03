const withNextIntl = require("next-intl/plugin")();
/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack(config, { dev }) {
    if (!dev) {
      config.devtool = "source-map";
    }
    return config;
  },
};

module.exports = withNextIntl(config);
