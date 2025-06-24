export const WORK_EN = [
  {
    name: "Liu Chen",
    role: "Content Ops",
    avatar: "/images/home/work-user-1.png",
    content:
      "I used to waste so much time looking for files. Now one sentence gets everything—even stuff I buried in Notion",
  },
  {
    name: "Olivia",
    role: "Content Manager",
    avatar: "/images/home/work-user-2.png",
    content:
      "COCO is like having ten AI assistants at my fingertips. Switching between them is faster than switching browser tabs.",
  },
  {
    name: "Ke Chen",
    role: "IT Head",
    avatar: "/images/home/work-user-3.png",
    content:
      "I embedded Coco AI  into our internal portal. Now people search with Coco AI  before they even ask a colleague.",
  },
  {
    name: "Thomas",
    role: "Sales Manager",
    avatar: "/images/home/work-user-4.png",
    content:
      "I used to search across my desktop, email, and cloud drives for contracts. Now I find the exact clause with a single search",
  },
  {
    name: "Han Wang",
    role: "CTO",
    avatar: "/images/home/work-user-5.png",
    content:
      "COCO integrates with our internal auth, runs on our network, and provides role-specific assistants—like HR's doc retriever or Finance's data explainer. Each team gets a flawless, 24/7 assistant that never quits.",
  },
  {
    name: "Tian Wu",
    role: "Programmer",
    avatar: "/images/home/work-user-6.png",
    content:
      "Feels like Raycast, ChatGPT, and a search engine rolled into one box.",
  },
];

export const WORK_ZH = [
  {
    name: "刘良",
    role: "内容运营",
    avatar: "/images/home/work-user-1.png",
    content:
      "平时找文件用半天，现在一句话查出来了，室之间 Notion 里的都能精确到",
  },
  {
    name: "奥利维亚",
    role: "内容经理",
    avatar: "/images/home/work-user-2.png",
    content: "COCO 省掉了个⼈快捷栏用量，切助手比切标签要流畅",
  },
  {
    name: "柯晨",
    role: "IT 负责人",
    avatar: "/images/home/work-user-3.png",
    content:
      "在群里把 Coco AI 组件群聊了内网系统，大家现在习惯问问题先找 Coco AI，再问人",
  },
  {
    name: "托马斯",
    role: "销售经理",
    avatar: "/images/home/work-user-4.png",
    content: "最喜欢不用切来切去，资料、邮件、窗口都能在一个地方搞定",
  },
  {
    name: "王涵",
    role: "CTO",
    avatar: "/images/home/work-user-5.png",
    content:
      "Coco 直接接入内部知识系统，研发/内容同事直接多角色 AI 助手联动。我们从一个文档检索点，体验到一个双模助手，用起来感觉每个人多了个秘书，而且会进化，不会掉队。",
  },
  {
    name: "吴天",
    role: "程序员",
    avatar: "/images/home/work-user-6.png",
    content: "感觉就是 Raycast + ChatGPT + 搜索引擎都装进了一个柜⼦",
  },
];

interface WorkCollection {
  [key: `WORK_${string}`]: {
    name: string;
    role: string;
    avatar: string;
    content: string;
  }[];
}

export const ALL_WORK: WorkCollection = {
  WORK_EN,
  WORK_ZH,
};

