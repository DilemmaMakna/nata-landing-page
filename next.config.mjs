/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  // Ensure PostCSS & Tailwind reload
};

export default nextConfig;
