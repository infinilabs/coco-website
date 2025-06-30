export const HEADER_EN = [
  { label: "Homepage", value: "home", href: "/en" },
  { label: "Download", value: "download", href: "/en/download" },
  {
    label: "Documents",
    value: "docs",
    href: "https://docs.infinilabs.com/coco-app/main/",
    external: true,
  },
];

export const HEADER_ZH = [
  { label: "首页", value: "home", href: "/zh" },
  { label: "下载", value: "download", href: "/zh/download" },
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

