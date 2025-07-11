const isDev = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: `
      default-src 'self';
      script-src 'self' https://coco.infini.cloud;
      style-src 'self' 'unsafe-inline' https://coco.infini.cloud;
      img-src 'self' data: https://coco.infini.cloud;
      connect-src 'self' https://coco.infini.cloud;
      frame-src https://coco.infini.cloud;
    `,
    unoptimized: true,
  },
  distDir: isDev ? "out" : "docs",
};

export default nextConfig;

