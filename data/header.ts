export const HEADER_EN = [
  { label: "Homepage", value: "home", href: "https://coco.rs/en/" },
  {
    label: "Integration",
    value: "integration",
    href: "https://coco.rs/en/integration",
  },
  {
    label: "Roadmap",
    value: "roadmap",
    href: "https://coco.rs/en/roadmap",
  },
  { label: "Download", value: "download", href: "https://coco.rs/en/download" },
  {
    label: "Documents",
    value: "docs",
    href: "https://docs.infinilabs.com/coco-app/main/",
    external: true,
  },
];

export const HEADER_ZH = [
  { label: "首页", value: "home", href: "https://coco.rs/zh/" },
  {
    label: "集成",
    value: "integration",
    href: "https://coco.rs/zh/integration",
  },
  {
    label: "路线图",
    value: "roadmap",
    href: "https://coco.rs/zh/roadmap",
  },
  { label: "下载", value: "download", href: "https://coco.rs/zh/download" },
  {
    label: "文档",
    value: "docs",
    href: "https://docs.infinilabs.com/coco-app/main/",
    external: true,
  },
];

interface HeaderCollection {
  [key: `HEADER_${string}`]: {
    label: string;
    value: string;
    href: string;
    external?: boolean;
  }[];
}

export const ALL_HEADER: HeaderCollection = {
  HEADER_EN,
  HEADER_ZH,
};
