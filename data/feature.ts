export const FEATURES_EN = [
  {
    title: "Find Marketing Solutions",
    subtitle: `From "Rummaging" to "Instant Results"`,
    content: `Switching between 5 platforms to find local files, cloud drives, or emails? With Coco AI, You Can: Enter "2025** Marketing Plan" and search across 20+ data sources simultaneously.`,
    ability1:
      "Unified Local & Cloud Search | Cross-platform, cross-data source, comprehensive results in one search. ",
    ability2:
      "Multimodal Support | Search and display for text, images, data, and more.",
    imgUrl: "/svg/home/market.svg",
  },
  {
    title: "Digest 30-Page Reports in Seconds ",
    subtitle: `From "All-Night Reading" to "AI Refinement"`,
    content:
      "Spending 3 hours reading a 30-page industry report? With Coco AI, You Can:Upload a file, automatically generate a summary + key data charts.",
    ability1: "AI Summarization | Extract conclusions, trends, risk points. ",
    ability2:
      "Efficiency Toolchain | One-click export to PPT / Multilingual translation.",
    imgUrl: "/svg/home/report.svg",
  },
  {
    title: "Team Knowledge Asset Accumulation",
    subtitle: `From "Document Swamp" to "Dynamic Knowledge Hub"`,
    content:
      "Project experiences scattered on personal computers, new members can't access them?With Coco AI, You Can:Meeting notes/project summaries automatically archived, data anonymized, shared with permission groups + AI Q&A. ",
    ability1: "AI Knowledge Steward | Auto-generate FAQs/Knowledge Graphs. ",
    ability2: "Secure Collaboration | Folder-level permission control",
    imgUrl: "/svg/home/team.svg",
  },
  {
    title: "Instant Access to High-Frequency Tools",
    subtitle: `From "Multi-Click" to "Search & Go"`,
    content:
      "Writing a weekly report requires switching tools 5 times -- fragmented operations interrupt deep workflows. With Coco AI, You Can:Capture screenshots / Translate text / Adjust formatting with formatting assistant.",
    ability1: "AI Command | Custom multi-step workflows.",
    ability2: "Global Hotkeys | Bind hotkeys to commands/apps.",
    ability3:
      "System Integration | Seamlessly invoke system functions like screenshot/system settings.",
    imgUrl: "/svg/home/tools.svg",
  },
  {
    title: "One-Stop Complex Tasks",
    subtitle: `From "Platform Switching" to "Integrated Collaboration"`,
    content:
      "Switching to GPT for copywriting, Claude for reading papers—Alt+Tab fatigue is real! With Coco AI, You Can:Easily integrate mainstream models, configure dedicated data sources for each assistant, accurately complete complex tasks.",
    ability1: "Bound Knowledge | Assign data to each assistant",
    ability2: "Agent Matrix | Coordinate multiple assistants",
    ability3: "MCP Protocol | Connect to the large model tool ecosystem.",
    imgUrl: "/svg/home/task.svg",
  },
];

export const FEATURES_ZH = [
  {
    title: "查找市场方案",
    subtitle: "从“翻箱倒柜”到“一搜即得”",
    content:
      "切换5个平台翻找本地文件/云盘/邮件？使用 Coco 你可以：输入“2025**营销方案” ，同时穿透20+数据源",
    ability1: "端云统一搜索 | 跨平台、跨数据源，一次搜索全面命中",
    ability2: "多模态支持 | 支持文本、图片、数据等多种信息形式的搜索与展示",
    imgUrl: "/svg/home/market.svg",
  },
  {
    title: "30页报告秒级消化",
    subtitle: "从“通宵阅读”到“AI精炼”",
    content:
      "阅读30页行业报告耗用3小时？使用 Coco 你可以：上传文件 ， 自动生成摘要+核心数据图表 ",
    ability1: "AI助理摘要 | 提取结论/趋势/风险点",
    ability2: "效率工具链 | 一键导出PPT/翻译多语言",
    imgUrl: "/svg/home/report.svg",
  },
  {
    title: "团队知识资产沉淀",
    subtitle: "从“文档沼泽”到“活水智库”",
    content:
      "项目经验散落个人电脑，新成员无从获取？使用 Coco 你可以：会议记录/项目总结 ，自动入库、数据脱敏，权限组共享+AI问答  ",
    ability1: "AI知识管家 | 自动生成FAQ/知识图谱",
    ability2: "安全协作 | 文件夹级权限控制",
    imgUrl: "/svg/home/team.svg",
  },
  {
    title: "高频工具秒级调用",
    subtitle: "从“多层点击”到“一搜即达”",
    content:
      "写周报时需切换5次工具——碎片化操作打断深度工作流，使用 Coco 你可以：截图工具捕获界面/翻译助手处理文本/排版助手调整格式",
    ability1: "Al Command | 自定义多步工作流",
    ability2: "全局快捷键 | 为指令/应用绑定快捷键",
    ability3: "系统集成 | 无缝调用截图/系统设置等系统功能",
    imgUrl: "/svg/home/tools.svg",
  },
  {
    title: "复杂任务一站通关",
    subtitle: "从“切换平台”到“一站式协作”",
    content:
      "写文案切GPT，读论文切 Claude，Alt+Tab 按到手指抽筋！使用 Coco 你可以：轻松接入主流模型，并为每个助手配置专属数据源，准确完成复杂任务。",
    ability1: "知识库绑定 | 为每个助手配置专属数据源",
    ability2: "智能体矩阵 | 可编排的多助手协作工作流",
    ability3: "MCP 协议 | 对接大模型工具生态",
    imgUrl: "/svg/home/task.svg",
  },
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    subtitle: string;
    content: string;
    ability1: string;
    ability2: string;
    ability3?: string;
    imgUrl: string;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
  FEATURES_ZH,
};

