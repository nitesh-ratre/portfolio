const repoName = 'portfolio'; // Replace with your GitHub repository name

const nextConfig = {
  output: 'export', // Required for static site export
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    unoptimized: true,
  },
  typescript: { 
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
