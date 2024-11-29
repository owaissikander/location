/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
        protocol: "https",
        hostname: "**",
      },
      { hostname: "images.unsplash.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "lh3.googleusercontent.com" },
        ]

    },

    eslint:{
        ignoreDuringBuilds: true
    }
    

};

export default nextConfig;
