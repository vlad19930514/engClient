/** @type {import('next').NextConfig} */
const path = require('path')
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
  },
	sassOptions: {
    includePaths: [path.join(__dirname, 'client/app/styles')],
  },
	images: {
    domains: [ 'storage.googleapis.com',
		'lh1.googleusercontent.com',
		'lh2.googleusercontent.com',
		'lh3.googleusercontent.com',
		'lh4.googleusercontent.com',
		'lh5.googleusercontent.com',
		'lh6.googleusercontent.com',],
  },
}

module.exports = nextConfig

