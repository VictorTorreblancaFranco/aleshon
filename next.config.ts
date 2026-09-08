import type { NextConfig } from 'next';

const isVercelBuild = process.env.BUILD_TARGET === 'vercel';

const nextConfig: NextConfig = isVercelBuild
  ? {
      output: 'export',
      images: {
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
