/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "receive-sms.vercel.app",
          },
        ],
        destination: "https://sms-receiver.online/:path*",
        permanent: true, // 301/308 redirect for SEO
      },
    ];
  },
};

export default nextConfig;
