const isDev = process.env.NODE_ENV === "development";
const devUrl = "https://coco.infini.cloud";
//const devUrl = "http://dev.infini.cloud:27200";

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
          source: "/api/extensions/:path*",
          destination: `${devUrl}/store/extension/:path*`,
        },
      ];
    },
  }),
};

export default nextConfig;
