/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  env: {
		APP_ENV: process.env.NODE_ENV,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:5000/api/:path*',
				
			}
			
		]
	},
	compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  }
}

module.exports = nextConfig

