/** @type {import('next').NextConfig} */

const isProd=process.env.NODE_ENV=="production"
const nextConfig = {
  basePath: isProd ? "/engineering-portfolio":"",
  output:"export",
  distDir:"dist", 
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
