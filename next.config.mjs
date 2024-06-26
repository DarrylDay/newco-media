/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/dashboard",
				permanent: false,
			},
			{
				source: "/onboarding",
				destination: "/onboarding/business",
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
			{
				protocol: "https",
				hostname: "images.crunchbase.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "d8g345wuhgd7e.cloudfront.net",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
