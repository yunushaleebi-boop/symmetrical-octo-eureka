/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // important for Cloudflare Pages (static mode)
  images: { unoptimized: true }
};

export default nextConfig;
