import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "avatar.vercel.sh",
      },
    ],
    domains: [
      "qgame3ccfcbtygae.public.blob.vercel-storage.com",
      "1udpeavbq8bc6uxp.public.blob.vercel-storage.com",
    ],
  },
};

export default nextConfig;
