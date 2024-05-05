/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			// Basic redirect
			{
				source: "/",
				destination: "/dashboard",
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
			{
				protocol: "https",
				hostname: "bloximages.newyork1.vip.townnews.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.morningbrew.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "pentagram-production.imgix.net",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "theme.zdassets.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "lcmediaagency.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
