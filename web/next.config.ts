import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.buymeacoffee.com",
			},
		],
		unoptimized: true, // For static export compatibility
	},
};

export default nextConfig;
