/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
    images: {
      domains: ["cdn.sanity.io", "encrypted-tbn0.gstatic.com"],
      },
};

export default nextConfig;
