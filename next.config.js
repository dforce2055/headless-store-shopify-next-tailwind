/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'countryflagsapi.com',
        port: '',
      },
    ],
  },
  domains: [
    'tailwindui.com',
    'cli.vuejs.org',
    'images.unsplash.com',
    'countryflagsapi.com',
  ], // dominios de donde voy a cargar imagenes en el build static
  formats: ['image/avif', 'image/webp'],
}



module.exports = nextConfig
