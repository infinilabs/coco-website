export const SERVER_EN = [
  {
    label: "Data Sources",
    value: "source",
    desc: "Unified integration of local files, cloud drives, databases, etc., build your own knowledge base",
    videoUrl: "/videos/DataSource.mp4",
  },
  {
    label: "AI Assistants",
    value: "assistant",
    desc: "Create multi-role AI assistants, connect different data and models, meet diverse usage scenarios",
    videoUrl: "/videos/AIAssistant.mp4",
  },
  {
    label: "LLMs",
    value: "model",
    desc: "Flexibly integrate mainstream large model services, compatible with any model provider conforming to OpenAI/Gemini API formats",
    videoUrl:  "/videos/LLMS.mp4",
  },
  {
    label: "MCP",
    value: "mcp",
    desc: "Embed COCO AI as a component into web pages or systems, rapidly empower your products or business processes",
    videoUrl: "/videos/MCP.mp4",
  },
  {
    label: "Integration",
    value: "embed",
    desc: "Compatible with the MCP protocol, enabling you to easily integrate different AI tools, enhancing the flexibility and efficiency of intelligent services",
    videoUrl: "/videos/Integration.mp4",
  },
];

export const SERVER_ZH = [
  {
    label: "数据源",
    value: "source",
    desc: "统一接入本地文件、云盘、数据库等数据源，打造属于你的知识库 ",
    videoUrl: "/videos/DataSource.mp4",
  },
  {
    label: "AI 助手",
    value: "assistant",
    desc: "创建多角色 AI 助手，连接不同数据与模型，满足多样化使用场景",
    videoUrl: "/videos/AIAssistant.mp4",
  },
  {
    label: "模型",
    value: "model",
    desc: "灵活接入主流大模型服务，兼容任何符合openai/gemini API格式的模型提供商",
    videoUrl: "/videos/LLMS.mp4",
  },
  {
    label: "MCP",
    value: "mcp",
    desc: "将 COCO AI 作为组件嵌入网页或系统，快速赋能你的产品或业务流程",
    videoUrl: "/videos/MCP.mp4",
  },
  {
    label: "嵌入组件",
    value: "embed",
    desc: "兼容 MCP 协议，您轻松接入不同的 AI 工具，提升智能服务的灵活性与效率",
    videoUrl: "/videos/Integration.mp4",
  },
];

interface ServerCollection {
  [key: `SERVER_${string}`]: {
    label: string;
    value: string;
    desc: string;
    videoUrl: string;
  }[];
}

export const ALL_SERVER: ServerCollection = {
  SERVER_EN,
  SERVER_ZH,
};

