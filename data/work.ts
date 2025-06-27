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
    name: "刘晨",
    role: "内容运营",
    avatar: "/images/home/work-user-1.png",
    content:
      "平时找文件最头疼，现在一句话全搜出来了，连之前 Notion 里写的都能搜到",
  },
  {
    name: "Olivia",
    role: "内容经理",
    avatar: "/images/home/work-user-2.png",
    content: "COCO 就像十个AI秘书驻扎在我屏幕上，切助手比切标签页还快",
  },
  {
    name: "Ke Chen",
    role: "IT 负责人",
    avatar: "/images/home/work-user-3.png",
    content:
      "我直接把 Coco AI 组件嵌到了内网系统，大家现在习惯有问题先搜 Coco AI，再问人",
  },
  {
    name: "Thomas",
    role: "销售经理",
    avatar: "/images/home/work-user-4.png",
    content: "最喜欢它不用切来切去，查资料、算个数、翻译都能在一个地方搞定",
  },
  {
    name: "Han Wang",
    role: "CTO",
    avatar: "/images/home/work-user-5.png",
    content:
      "Coco 能对接公司自己的权限系统、部署在内网，还能设置多角色 AI 助手。我们给人事一个文档检索助手，给财务一个数据解释助手，用起来就像每个人多了个秘书，而且不会出错、不会辞职。",
  },
  {
    name: "Tian Wu",
    role: "程序员",
    avatar: "/images/home/work-user-6.png",
    content: "感觉是把 Raycast + ChatGPT + 搜索引擎都装进了一个框",
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

