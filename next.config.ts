// next.config.js
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.geojson$/,
      use: ['file-loader'],
    });
    return config;
  },
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
