/** @type {import('next').NextConfig} */
const nextConfig = {

	basePath: '/10k-sentence-journey',
	publicRuntimeConfig: {
		// Will be available on both server and client
		staticFolder: '/',
	},
};

export default nextConfig;
