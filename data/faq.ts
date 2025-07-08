export const FAQ_EN = [
  {
    question: "Is Coco AI fully open-source?",
    answer:
      "Yes, all core components of Coco AI are open-source projects. The Coco App is licensed under the MIT License, while Coco Server is licensed under the AGPL-3.0 License. \n These open-source licenses allow you to freely download, use, modify, and commercialize Coco AI without requiring additional permission from us.",
  },
  {
    question: "How does Coco AI's search function work?",
    answer:
      "Coco AI offers a unified search interface supporting local, cloud-based, and multimodal search. It can search across files, applications, and various cloud data sources (such as Google Drive, Notion, Yuque, Hugo, RSS), and supports both text and voice input.",
  },
  {
    question: "How does Coco AI keep my data secure?",
    answer:
      "Coco AI supports fully offline deployment, ensuring internal data is processed locally. You may also opt for private cloud deployment to meet security and compliance requirements.",
  },
  {
    question: "How is Coco AI deployed locally?",
    answer:
      "Local deployment primarily applies to Coco Server, enabling enterprise-level capabilities. Once running, you can access the backend dashboard to configure data sources, models, assistants, and more. Deployment is flexible—compatible with macOS, Linux, Windows, or via Docker. <a href='https://docs.infinilabs.com/coco-server/main/docs/getting-started/install/' target='_blank' rel='noopener noreferrer' style='color: #14C4C9; text-decoration: underline;'>[View Deployment Guide]</a>",
  },
  {
    question: "Can I use Coco App without deploying Coco Server?",
    answer:
      "Yes. You can install Coco App independently, retaining local file search, application quick-launch, and a rich plugin ecosystem. \n You may also connect to Coco Cloud for online services (cloud search, AI features) to extend functionality.",
  },
  {
    question: "Can Coco App connect to multiple Coco Servers?",
    answer:
      "Yes. Coco App supports simultaneous connections to multiple Coco Servers. Configure server addresses in-app to enable hybrid search across servers and manage deployment environments. Ideal for cross-team use of distinct knowledge bases/AI assistants.",
  },
  {
    question: "Can we embed Coco AI into our website?",
    answer:
      "Yes. Coco AI provides embeddable web components (e.g., search bar, AI assistant) for your site or system—as simple as adding an image. \n No app installation is needed, delivering the same seamless experience as the desktop version.",
  },
];

export const FAQ_ZH = [
  {
    question: "Coco AI 是完全开源的吗?",
    answer:
      "是的，Coco AI 的核心组件均为开源项目。Coco App 采用 MIT 协议，Coco Server 采用 AGPL-3.0 协议。\n 在开源协议的指导下，您可自由下载安装使用、修改和商用，无需额外获得我们的许可。",
  },
  {
    question: "Coco AI 的搜索功能如何运作?",
    answer:
      "Coco AI 提供统一搜索入口，支持本地、云端、多模态搜索，可同时检索文件、应用和各类云端数据源（如 Google Drive、Notion、Yuque、Hugo、RSS 等），并支持文字、语音输入。",
  },
  {
    question: "Coco AI 如何保证我的数据安全?",
    answer:
      "Coco AI 支持完全离线部署，内部数据内部处理；您也可以选择私有云部署，保障数据安全与合规要求。",
  },
  {
    question: "Coco AI 的本地部署方式?",
    answer:
      "本地部署主要针对 Coco Server，用于扩展企业级功能，运行后可访问后台管理页面，配置数据源、模型和助手等，部署方式灵活，支持 macOS、Linux、Windows，也可通过 Docker 快速搭建。<a href='https://docs.infinilabs.com/coco-server/main/docs/getting-started/install/' target='_blank' rel='noopener noreferrer' style='color: #14C4C9; text-decoration: underline;'>[查看部署指南]</a>",
  },
  {
    question: "不部署 Coco Server，我可以单独使用 Coco App 吗?",
    answer:
      "可以。您可以单独安装 Coco App，无需部署 Coco Server，并且依然可以使用本地文件搜索和应用快捷启动，以及丰富的插件生态。\n 此外，您还可以选择连接 Coco Cloud 提供的在线服务，体验云端的搜索、AI 能力，进一步扩展应用场景。",
  },
  {
    question: "Coco App 可以连接多个 Coco Server 吗?",
    answer:
      "可以。Coco App 支持同时连接多个 Coco Server，您可以在 App 中配置不同的服务器地址，支持多个 Coco Server 混合搜索，可以切换和管理多个部署环境。这对于需要跨团队、跨部门使用不同知识库和 AI 助手的用户非常有帮助。",
  },
  {
    question: "可以把 Coco AI 嵌入到我们的网站里吗？",
    answer:
      "可以。Coco AI 提供 Web 组件，你可以像插入图片一样，把 Coco AI 的搜索框、AI 助手等嵌入到自己的网页或系统里。\n 无需安装 App，也能获得和桌面端一样流畅的体验。",
  },
];

interface FAQCollection {
  [key: `FAQ_${string}`]: {
    question: string;
    answer: string;
  }[];
}

export const ALL_FAQ: FAQCollection = {
  FAQ_EN,
  FAQ_ZH,
};

