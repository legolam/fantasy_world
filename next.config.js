/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/fantasy_world", // 저장소 이름과 동일하게 설정
  assetPrefix: "/fantasy_world/", // 정적 파일 경로 설정
};

module.exports = nextConfig;
