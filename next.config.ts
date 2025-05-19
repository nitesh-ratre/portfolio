const repoName = 'portfolio'; // Make sure this matches your GitHub repository name exactly

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
  // Add trailing slashes to ensure proper asset loading
  trailingSlash: true,
};

export default nextConfig;
