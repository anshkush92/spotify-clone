/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "wrapped-images.spotifycdn.com",
      "t.scdn.co",
      "i.scdn.co",
    ],
  },
};

module.exports = nextConfig;
