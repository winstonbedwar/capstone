/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be served by GitHub Pages.
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
