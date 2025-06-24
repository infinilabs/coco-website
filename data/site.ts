import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiJuejin } from "react-icons/si";
import { SunMoon, Sun, Github, Globe } from "lucide-react";


import { SiteConfig } from "@/types/siteConfig";

const OPEN_SOURCE_URL = "https://github.com/infinilabs/coco-app";

const baseSiteConfig = {
  name: "Coco AI - Search, Connect, Collaborate",
  description:
    "Advanced AI-powered platform for seamless collaboration and discovery",
  url: "https://coco.rs/",
  ogImage: "https://avatars.githubusercontent.com/u/76980829?s=200&v=4",
  metadataBase: "/",
  keywords: ["Coco AI", "Search", "Connect", "Collaborate", "AI", "Platform"],
  authors: [
    {
      name: "INFINI Labs",
      url: "https://github.com/infinilabs",
      twitter: "https://x.com/infinilabs",
    },
  ],
  creator: "INFINI Labs",
  openSourceURL: "https://github.com/infinilabs/coco-app",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "dark", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/logo.png",
  },
  headerLinks: [{ name: "repo", href: OPEN_SOURCE_URL, icon: Github }],
  footerLinks: [
    { name: "email", href: " hello@infini.ltd", icon: MdEmail },
    { name: "twitter", href: "https://x.com/infinilabs", icon: BsTwitterX },
    { name: "github", href: "https://github.com/infinilabs", icon: Github },
    {
      name: "juejin",
      href: "https://juejin.cn/user/26044008768029",
      icon: SiJuejin,
    },
  ],
  footerProducts: [],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};

