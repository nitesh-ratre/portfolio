const repoName = 'portfolio'; // Make sure this matches your GitHub repository name exactly

const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'fonts.gstatic.com',
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
  // Optimize font loading
  optimizeFonts: true,
};

export default nextConfig;
