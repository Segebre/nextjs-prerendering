module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  basePath: process.env.BASE_PATH || '',
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
