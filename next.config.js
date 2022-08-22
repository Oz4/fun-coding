const menu = require("./src/setup/menu.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img.seadn.io'],
  },
  env: {
    menu: menu.get('src/pages'),
  },
}

module.exports = nextConfig
