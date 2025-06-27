export const DEPLOY_EN = [
  {
    title: "Open Source and Private Deployment",
    description:
      "Coco AI is fully open - source and supports private deployment to meet the high - level requirements of enterprises for data privacy",

    icon: "/svg/home/deploy-1.svg",
    iconWidth: 32,
    iconHeight: 40,
  },
  {
    title: "Cross - platform Support",
    description:
      "Supports MacOS, Windows, and Linux operating systems to meet the usage needs of different users",
    icon: "/svg/home/deploy-2.svg",
    iconWidth: 40,
    iconHeight: 33,
  },
];

export const DEPLOY_ZH = [
  {
    title: "开源与私有部署",
    description: "Coco AI 完全开源，支持私有部署，满足企业对数据隐私的高要求",
    icon: "/svg/home/deploy-1.svg",
    iconWidth: 32,
    iconHeight: 40,
  },
  {
    title: "跨平台支持",
    description: "支持 MacOS、Windows、Linux 操作系统，满足不同用户的使用需求",
    icon: "/svg/home/deploy-2.svg",
    iconWidth: 40,
    iconHeight: 33,
  },
];

interface DeployCollection {
  [key: `DEPLOY_${string}`]: {
    title: string;
    description: string;
    icon: string;
    iconWidth: number;
    iconHeight: number;
  }[];
}

export const ALL_DEPLOY: DeployCollection = {
  DEPLOY_EN,
  DEPLOY_ZH,
};

