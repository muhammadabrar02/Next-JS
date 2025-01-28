/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
    images: {
        domains: ['cdn.sanity.io'], // Add Sanity's CDN hostname here
      },
};

export default nextConfig;
