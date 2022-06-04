/** @type {import('next').NextConfig} */

const withLess = require("next-with-less");
const withPlugins = require("next-compose-plugins");
const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

const plugins = [
  [
    withLess,
    {
      lessLoaderOptions: {},
    },
  ],
];

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

module.exports = withPlugins(plugins, nextConfig);
