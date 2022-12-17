/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "wrapped-images.spotifycdn.com",
      "t.scdn.co",
      "i.scdn.co",
      "mosaic.scdn.co",
      "blend-playlist-covers.spotifycdn.com",
      "daily-mix.scdn.co",
      "newjams-images.scdn.co",
    ],
  },
};

module.exports = nextConfig;
