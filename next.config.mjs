/** @type {import('next').NextConfig} */

import dotenv from "dotenv";

dotenv.config({
  path: `./.env.${process.env.MODE}`,
});

const nextConfig = {
  reactStrictMode: true,
  env: {
    MODE: process.env.MODE,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
