/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://ashwin-shrestha.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
