/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed basePath and assetPrefix since Vercel serves the app from the root.
  output: 'export'
};

export default nextConfig;
