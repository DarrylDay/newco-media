/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			// Basic redirect
			{
				source: "/",
				destination: "/dashboard/vendors",
				permanent: false,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets-global.website-files.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
