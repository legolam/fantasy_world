/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/nextjs-character-generator", // GitHub Pages용 경로 설정 (저장소 이름)
  assetPrefix: "/nextjs-character-generator/", // 정적 파일 경로 설정
};

module.exports = nextConfig;
