/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "https://nr-baek.github.io/Calculator";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/Calculator/` : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
};

module.exports = nextConfig;
