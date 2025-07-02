import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  // 配置允许的外部图片域名
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'is2-ssl.mzstatic.com',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'is3-ssl.mzstatic.com',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'is4-ssl.mzstatic.com',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'is5-ssl.mzstatic.com',
        port: '',
        pathname: '/image/**',
      },
    ],
  },
  // 确保视频文件能够正确服务
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
