export const EFFICIENCY_EN = [
  {
    title: "Search & Get It Instantly",
    content:
      "Zero switching, unified entry for Files / Web / Knowledge Bases / Plugins / AI Assistants.",
    icon: "/svg/home/efficiency1.svg",
  },
  {
    title: "Keyboard First",
    content:
      "Global hotkey to invoke Coco, operate without leaving your current interface.",
    icon: "/svg/home/efficiency2.svg",
  },
  {
    title: "Quicklink / AI Command",
    content: "Search to invoke, execute commands efficiently.",
    icon: "/svg/home/efficiency3.svg",
  },
  {
    title: "App Launcher",
    content: "Search and open local apps, switch tools without breaking your",
    icon: "/svg/home/efficiency4.svg",
  },
  {
    title: "Quick Al Access",
    content: "Tab to specify an assistant, results presented directly.",
    icon: "/svg/home/efficiency5.svg",
  },
  {
    title: "Built-in Tools",
    content:
      "Calculator, clipboard, to-do list and other common tools ready anytime.",
    icon: "/svg/home/efficiency6.svg",
  },
];

export const EFFICIENCY_ZH = [
  {
    title: "即搜即得",
    content: "零切换，文件 / 网页 / 知识库 / 插件/AI 助手统一入口",
    icon: "/svg/home/efficiency1.svg",
  },
  {
    title: "全键盘操作",
    content: "全局快捷键唤起 Coco，操作不离当前界面",
    icon: "/svg/home/efficiency2.svg",
  },
  {
    title: "Quicklink / AI Command",
    content: "搜索即调用，高效执行指令",
    icon: "/svg/home/efficiency3.svg",
  },
  {
    title: "应用快速启动",
    content: "搜索并打开本地应用，切工具不切思路",
    icon: "/svg/home/efficiency4.svg",
  },
  {
    title: "快速访问 AI ",
    content: "Tab 指定助手，结果直接呈现",
    icon: "/svg/home/efficiency5.svg",
  },
  {
    title: "内置工具",
    content: "计算器、剪贴板、待办事项等常用工具随时唤起",
    icon: "/svg/home/efficiency6.svg",
  },
];

interface EfficiencyCollection {
  [key: `EFFICIENCY_${string}`]: {
    title: string;
    content: string;
    icon: string;
  }[];
}

export const ALL_EFFICIENCY: EfficiencyCollection = {
  EFFICIENCY_EN,
  EFFICIENCY_ZH,
};

