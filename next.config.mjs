const isDev = process.env.NODE_ENV === "development";
const devUrl = process.env.NEXT_PUBLIC_BASE_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isDev ? {} : { output: "export" }),
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: `
      default-src 'self';
      script-src 'self' ${devUrl};
      style-src 'self' 'unsafe-inline' ${devUrl};
      img-src 'self' data: ${devUrl};
      connect-src 'self' ${devUrl};
      frame-src ${devUrl};
    `,
    unoptimized: true,
  },
  distDir: isDev ? "out" : "docs",
  ...(isDev && {
    async rewrites() {
      return [
        {
          source: "/store/extension/:path*",
          destination: `${devUrl}/store/extension/:path*`,
        },
        {
          source: "/store/server/:path*",
          destination: `${devUrl}/store/server/:path*`,
        },
      ];
    },
  }),
};

export default nextConfig;
