/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "insightsurfer.net",
        port: "",
        pathname: "/website_99e336d3/**",
      },
    ],
  },
};

export default nextConfig;
