/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/huconwebsite',
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
}

export default nextConfig
