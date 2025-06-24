export const TOOLS_EN = [
  {
    title: "Coco App Extensions",
    tool: [
      {
        name: "Extensions",
        description: "Flexible plugin development and integration for customized workflows",
        icon: "/svg/home/tool-app-1.svg",
      },
      {
        name: "Quick Link",
        description: "Jump directly to browsers, apps, or custom links via shortcuts",
        icon: "/svg/home/tool-app-2.svg",
      },
      {
        name: "AI command",
        description: "Enable contextual tools in search mode for instant invocation",
        icon: "/svg/home/tool-app-3.svg",
      },
    ],
  },
  {
    title: "Coco Server Extensions",
    tool: [
      {
        name: "Connector",
        description: "Unified interface to connect diverse data sources",
        icon: "/svg/home/tool-server-1.svg",
      },
      {
        name: "RSA（Remote Search Adapter）",
        description: "Integrate with existing systems through remote search",
        icon: "/svg/home/tool-server-2.svg",
      },
      {
        name: "MCP protocol support",
        description: "Compatible with MCP standards for horizontal scaling",
        icon: "/svg/home/tool-server-3.svg",
      },
    ],
  },
];

export const TOOLS_ZH = [
  {
    title: "Coco APP 扩展",
    tool: [
      {
        name: "拓展",
        description: "自由开发和集成插件，打造高度个性化的工作流",
        icon: "/svg/home/tool-app-1.svg",
      },
      {
        name: "Quick Link",
        description: "支持通过快捷方式直接跳转到浏览器、应用或任何指定链接",
        icon: "/svg/home/tool-app-2.svg",
      },
      {
        name: "AI command",
        description: "通过AI command，在搜索模式下实现场景化智能应用，快速调用",
        icon: "/svg/home/tool-app-3.svg",
      },
    ],
  },
  {
    title: "Coco Server 扩展",
    tool: [
      {
        name: "Connector",
        description: "通过统一、自定义接口连接多种数据源",
        icon: "/svg/home/tool-server-1.svg",
      },
      {
        name: "RSA（Remote Search Adapter）",
        description: "使用实现 Remote Search 来满足现有系统的集成",
        icon: "/svg/home/tool-server-2.svg",
      },
      {
        name: "MCP 协议支持",
        description: "兼容标准 MCP 协议服务，便于横向扩展",
        icon: "/svg/home/tool-server-3.svg",
      },
    ],
  },
];

interface Tool {
  name: string;
  description: string;
  icon: string;
}
interface ToolsCollection {
  [key: `TOOLS_${string}`]: {
    title: string;
    tool: Tool[];
  }[];
}

export const ALL_TOOLS: ToolsCollection = {
  TOOLS_EN,
  TOOLS_ZH,
};

