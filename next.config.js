// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['cdn.pixabay.com'],
//   },
// }


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['pixabay.com'],
//   },
//   // ... other config
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pixabay.com', 'cdn.pixabay.com'], // Add both domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.pixabay.com', // Wildcard for all subdomains
      },
    ],
  },
  // ... other config options
}

module.exports = nextConfig