/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.pixabay.com'],
  },
}



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**.pixabay.com',
//       },
//       {
//         protocol: 'https',
//         hostname: '**.pexels.com',
//       },
//       // Add other domains as needed
//     ],
//   },
//   // Other Next.js config options...
// };

// module.exports = nextConfig;