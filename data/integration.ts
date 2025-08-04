export interface Developer {
  id: string;
  created: string;
  updated: string;
  name: string;
  avatar: string;
  twitter_handle?: string;
  github_handle?: string;
  location?: string;
  website?: string;
  bio?: string;
}

export interface Screenshot {
  url: string;
  title?: string;
}

export interface Stats {
  installs: number;
  views: number;
}

export interface Url {
  code: string;
  download: string;
}

export interface Version {
  number: string;
}

export interface Action {
  exec: string;
  args: string[];
}

export interface Command {
  action: Action;
  description: string;
  icon: string;
  name: string;
  type: string;
}

export interface Extension {
  id: string;
  created: string;
  updated: string;
  name: string;
  description: string;
  icon: string;
  type: string;
  platforms: string[];
  developer: Developer;
  url: Url;
  version: Version;
  screenshots: Screenshot[];
  action?: Action;
  stats: Stats;
  category?: string;
  enabled?: boolean;
  commands?: Command[];
  tags?: string[];
}

export interface ExtensionApiResponse {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: Extension;
}

export interface ExtensionApiResponse {
  _id: string;
  _source: Extension;
  found: boolean;
}

// API response type definition
export interface ApiResponse {
  hits: {
    total: {
      relation: string;
      value: number;
    };
    hits?: Array<{
      _index: string;
      _type: string;
      _id: string;
      _score: number;
      _source: Extension;
    }>;
  };
}

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
