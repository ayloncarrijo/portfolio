const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  i18n,
  webpack(config) {
    const svgLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...svgLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ["@svgr/webpack"],
      }
    );

    svgLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};
