export const INTEGRATION_EN = [
  {
    label: "All Extensions",
    value: "all",
  },
  {
    label: "Recently Added",
    value: "recently",
  },
];

export const INTEGRATION_ZH = [
  {
    label: "所有插件",
    value: "all",
  },
  {
    label: "最近添加",
    value: "recently",
  },
];

interface IntegrationCollection {
  [key: `INTEGRATION_${string}`]: {
    label: string;
    value: string;
  }[];
}

export const ALL_INTEGRATION: IntegrationCollection = {
  INTEGRATION_EN,
  INTEGRATION_ZH,
};
