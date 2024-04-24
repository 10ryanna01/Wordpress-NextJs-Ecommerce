/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: "export",

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
