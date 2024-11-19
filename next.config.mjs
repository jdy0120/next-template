/** @type {import('next').NextConfig} */

import dotenv from "dotenv";

dotenv.config({
  path: `./envs/.env.${process.env.MODE}`,
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
  rewrites: async () => {
    return [
      {
        source: "/:path*",
        destination: "https://stg.the-dive.io/admin/api/:path*",
      },
    ];
  },
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export default nextConfig;
