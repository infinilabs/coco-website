const isDev = process.env.NODE_ENV === "development";

const getBaseUrl = () => {
  if (isDev) {
    return "http://localhost:3000";
  }
  return "https://coco.rs";
};

const baseUrl = getBaseUrl();

export const HEADER_EN = [
  { label: "Homepage", value: "home", href: `${baseUrl}/en/` },
  {
    label: "Integration",
    value: "integration",
    href: `${baseUrl}/en/integration`,
  },
  {
    label: "Roadmap",
    value: "roadmap",
    href: `${baseUrl}/en/roadmap`,
  },
  { label: "Download", value: "download", href: `${baseUrl}/en/download` },
  {
    label: "Documents",
    value: "docs",
    href: "https://docs.infinilabs.com/coco-app/main/",
    external: true,
  },
];

export const HEADER_ZH = [
  { label: "首页", value: "home", href: `${baseUrl}/zh/` },
  {
    label: "集成",
    value: "integration",
    href: `${baseUrl}/zh/integration`,
  },
  {
    label: "路线图",
    value: "roadmap",
    href: `${baseUrl}/zh/roadmap`,
  },
  { label: "下载", value: "download", href: `${baseUrl}/zh/download` },
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
