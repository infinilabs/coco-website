// ESM 导出，供前端动态 import 使用
export const MOCK_RESPONSE = {
  hits: {
    total: { relation: "eq", value: 3 },
    max_score: 1,
    hits: [
      {
        _index: "coco_extension",
        _type: "_doc",
        _id: "apple_music_controls",
        _score: 1,
        _source: {
          _system: {
            owner_id: "cvv85fk61mdus565iqig",
            tenant_id: "cvv85fk61mdus565iqi0",
          },
          category: "Media",
          created: "2025-09-25T05:47:11.043753275Z",
          description:
            "Control Apple Music playback and manage tracks. Includes playback toggles, navigation, and track managements.",
          developer: {
            _system: {
              owner_id: "cvv85fk61mdus565iqig",
              tenant_id: "cvv85fk61mdus565iqi0",
            },
            avatar:
              "https://coco.infini.cloud//extensions/fishsoup/assets/avatar.jpg",
            created: "2025-09-17T14:00:02.489062132Z",
            github_handle: "YutangZ123",
            id: "fishsoup",
            location: "Internet",
            name: "fishsoup",
            updated: "2025-10-23T06:00:05.744962417Z",
            website: "https://github.com/YutangZ123",
          },
          icon: "https://coco.infini.cloud/extensions/fishsoup/apple_music_controls/assets/icon.png",
          id: "b1b9eb18a3a1301163f0f82b3d4896ab",
          name: "Apple Music Controls",
          platforms: ["macos"],
          screenshots: [
            {
              title: "Apple Music Controls",
              url: "https://coco.infini.cloud//extensions/fishsoup/apple_music_controls/assets/screenshot.png",
            },
          ],
          stats: { installs: 2, views: 8 },
          tags: ["Apple", "Music", "Playback", "Tracks", "Playlist", "Library"],
          type: "connector", // 默认类型，可在消费端覆盖
          updated: "2025-10-23T06:00:06.75114265Z",
          url: {
            code: "https://github.com/infinilabs/coco-extensions/tree/main/extensions/fishsoup/apple_music_controls",
          },
          version: { number: "0.1" },
        },
      },
      {
        _index: "coco_extension",
        _type: "_doc",
        _id: "quicklink_tools",
        _score: 1,
        _source: {
          _system: {
            owner_id: "cvv85fk61mdus565iqig",
            tenant_id: "cvv85fk61mdus565iqi0",
          },
          category: "Media",
          created: "2025-09-25T05:47:11.043753275Z",
          description:
            "Control Apple Music playback and manage tracks. Includes playback toggles, navigation, and track managements.",
          developer: {
            _system: {
              owner_id: "cvv85fk61mdus565iqig",
              tenant_id: "cvv85fk61mdus565iqi0",
            },
            avatar:
              "https://coco.infini.cloud//extensions/fishsoup/assets/avatar.jpg",
            created: "2025-09-17T14:00:02.489062132Z",
            github_handle: "infinilabs",
            id: "coco_team",
            location: "Internet",
            name: "Coco Team",
            updated: "2025-10-23T06:00:05.744962417Z",
            website: "https://github.com/infinilabs",
          },
          icon: "https://coco.infini.cloud//extensions/quicklink/assets/icon.png",
          id: "quicklink_tools",
          name: "Quicklink Tools",
          platforms: ["macos", "linux", "windows"],
          screenshots: [],
          stats: { installs: 19, views: 120 },
          tags: ["Quicklink", "Productivity"],
          type: "connector",
          updated: "2025-10-23T06:00:06.75114265Z",
          url: {
            code: "https://github.com/infinilabs/coco-extensions/tree/main/extensions/quicklink",
          },
          version: { number: "0.1" },
        },
      },
      {
        _index: "coco_extension",
        _type: "_doc",
        _id: "mcp_server_demo",
        _score: 1,
        _source: {
          _system: {
            owner_id: "cvv85fk61mdus565iqig",
            tenant_id: "cvv85fk61mdus565iqi0",
          },
          category: "Media",
          created: "2025-09-25T05:47:11.043753275Z",
          description:
            "Control Apple Music playback and manage tracks. Includes playback toggles, navigation, and track managements.",
          developer: {
            _system: {
              owner_id: "cvv85fk61mdus565iqig",
              tenant_id: "cvv85fk61mdus565iqi0",
            },
            avatar:
              "https://coco.infini.cloud//extensions/fishsoup/assets/avatar.jpg",
            created: "2025-09-17T14:00:02.489062132Z",
            github_handle: "mcp",
            id: "mcp_maintainers",
            location: "Internet",
            name: "MCP Maintainers",
            updated: "2025-10-23T06:00:05.744962417Z",
            website: "https://github.com/infinilabs",
          },
          icon: "https://coco.infini.cloud//extensions/mcp_server/assets/icon.png",
          id: "mcp_server_demo",
          name: "MCP Server Demo",
          platforms: ["linux", "macos"],
          screenshots: [],
          stats: { installs: 7, views: 30 },
          tags: ["MCP", "Server"],
          type: "connector",
          updated: "2025-10-23T06:00:06.75114265Z",
          url: {
            code: "https://github.com/infinilabs/coco-extensions/tree/main/extensions/mcp_server",
          },
          version: { number: "0.1" },
        },
      },
    ],
  },
};
