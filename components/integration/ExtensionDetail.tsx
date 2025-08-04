"use client";

import {
  ArrowLeft,
  FolderDown,
  GitFork,
  Github,
  MonitorCheck,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import LoadingScreen from "@/components/LoadingScreen";
import type { Extension } from "@/data/integration";
import { getDictionary } from "@/i18n/i18n";
import ExtensionDetailContent from "./ExtensionDetailContent";
import ExtensionDeveloperInfo from "./ExtensionDeveloperInfo";

interface RelatedExtension {
  id: string;
  name: string;
  description: string;
  icon?: string;
  iconBg?: string;
}

const relatedExtensions: RelatedExtension[] = [
  {
    id: "netease-music-controls",
    name: "NetEaseMusic Controls Eng...",
    description: "Keyboard control Spotify | Play/Paus...",
    iconBg: "bg-red-500",
  },
  {
    id: "sound-volume-controls",
    name: "Sound Volume Controls",
    description: "Quickly control your Mac's sound volu...",
    iconBg: "bg-blue-500",
  },
  {
    id: "qq-music-controls",
    name: "QQ Music Controls",
    description: "Control QQ Music playback and volu...",
    iconBg: "bg-green-500",
  },
  {
    id: "eject-all-disks",
    name: "Eject All Disks",
    description: "Ejects all mounted disk images",
    iconBg: "bg-teal-500",
  },
];

interface DeveloperExtension {
  id: string;
  name: string;
  description: string;
  iconType: "volume" | "eject" | "music" | "check";
  gradientFrom: string;
  gradientTo: string;
}

const getDeveloperExtensions = (developerId: string): DeveloperExtension[] => {
  return [
    {
      id: "sound-volume-controls",
      name: "Sound Volume Controls",
      description: "Quickly control your Macs sound volume",
      iconType: "volume",
      gradientFrom: "from-purple-500",
      gradientTo: "to-purple-600",
    },
    {
      id: "eject-all-disks",
      name: "Eject All Disks",
      description: "Ejects all mounted disk images",
      iconType: "eject",
      gradientFrom: "from-teal-500",
      gradientTo: "to-teal-600",
    },
    {
      id: "netease-music-controls",
      name: "NetEaseMusic Controls Eng...",
      description: "Keyboard control Spotify | Play/Pause...",
      iconType: "check",
      gradientFrom: "from-red-500",
      gradientTo: "to-red-600",
    },
    {
      id: "qq-music-controls",
      name: "QQ Music Controls",
      description: "Control QQ Music playback and volume",
      iconType: "music",
      gradientFrom: "from-yellow-500",
      gradientTo: "to-yellow-600",
    },
  ];
};

interface ExtensionDetailProps {
  lang: string;
  extensionId: string;
}

export default function ExtensionDetail({
  lang,
  extensionId,
}: ExtensionDetailProps) {
  const { theme } = useTheme();
  const router = useRouter();
  const [locale, setLocale] = useState<any>();
  const [extension, setExtension] = useState<Extension | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getLocale = useCallback(async () => {
    const dict = await getDictionary(lang);
    setLocale(dict.Integration);
  }, [lang]);

  const fetchExtension = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const url =
        process.env.NODE_ENV === "development"
          ? `/api/extensions/${extensionId}`
          : `https://coco.infini.cloud/store/extension/${extensionId}`;

      // const response = await fetch(url);

      // if (!response.ok) {
      //   throw new Error(`Failed to fetch extension: ${response.status}`);
      // }

      // const data = await response.json();
      const data = {
        _index: "coco_extension",
        _type: "_doc",
        _id: "23488499b6c95b54c623265f9416699e",
        _score: 1,
        _source: {
          category: "Media",
          commands: [
            {
              action: {
                args: [
                  "-c",
                  'osascript -e \'tell application "QQMusic" to activate\' -e \'tell application "System Events" to tell process "QQMusic" to tell menu bar 1 to tell menu bar item "播放控制" to tell menu "播放控制" to click menu item "播放"\'',
                ],
                exec: "zsh",
              },
              description: "Play music in QQ Music.",
              icon: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/icon.png",
              name: "Play",
              type: "command",
            },
            {
              action: {
                args: [
                  "-c",
                  'osascript -e \'tell application "QQMusic" to activate\' -e \'tell application "System Events" to tell process "QQMusic" to tell menu bar 1 to tell menu bar item "播放控制" to tell menu "播放控制" to click menu item 1\'',
                ],
                exec: "zsh",
              },
              description: "Toggle play or pause in QQ Music.",
              icon: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/icon.png",
              name: "Play/Pause",
              type: "command",
            },
            {
              action: {
                args: [
                  "-c",
                  'osascript -e \'tell application "QQMusic" to activate\' -e \'tell application "System Events" to tell process "QQMusic" to tell menu bar 1 to tell menu bar item "播放控制" to tell menu "播放控制" to click menu item "下一首"\'',
                ],
                exec: "zsh",
              },
              description: "Play the next track.",
              icon: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/icon.png",
              name: "Next Track",
              type: "command",
            },
            {
              action: {
                args: [
                  "-c",
                  'osascript -e \'tell application "QQMusic" to activate\' -e \'tell application "System Events" to tell process "QQMusic" to tell menu bar 1 to tell menu bar item "播放控制" to tell menu "播放控制" to click menu item "上一首"\'',
                ],
                exec: "zsh",
              },
              description: "Play the previous track.",
              icon: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/icon.png",
              name: "Previous Track",
              type: "command",
            },
            {
              action: {
                args: [
                  "-c",
                  'osascript -e \'tell application "QQMusic" to activate\' -e \'tell application "System Events" to tell process "QQMusic" to tell menu bar 1 to tell menu bar item "播放控制" to tell menu "播放控制" to click menu item "暂停"\'',
                ],
                exec: "zsh",
              },
              description: "Pause the current track.",
              icon: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/icon.png",
              name: "Pause",
              type: "command",
            },
            {
              action: {
                args: [
                  "-c",
                  'osascript -e \'tell application "QQMusic" to activate\' -e \'tell application "System Events" to tell process "QQMusic" to tell menu bar 1 to tell menu bar item "播放控制" to tell menu "播放控制" to click menu item "喜欢歌曲"\'',
                ],
                exec: "zsh",
              },
              description: "Mark the current song as liked.",
              icon: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/icon.png",
              name: "Like Song",
              type: "command",
            },
            {
              action: {
                args: [
                  "-c",
                  'osascript -e \'tell application "QQMusic" to activate\' -e \'tell application "System Events" to tell process "QQMusic" to tell menu bar 1 to tell menu bar item "播放控制" to tell menu "播放控制" to click menu item "取消喜欢"\'',
                ],
                exec: "zsh",
              },
              description: "Remove like mark from the current song.",
              icon: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/icon.png",
              name: "Unlike Song",
              type: "command",
            },
            {
              action: {
                args: [
                  "-c",
                  'osascript -e \'tell application "QQMusic" to activate\' -e \'tell application "System Events" to tell process "QQMusic" to tell menu bar 1 to tell menu bar item "播放控制" to tell menu "播放控制" to click menu item "音量加"\'',
                ],
                exec: "zsh",
              },
              description: "Increase the volume by one step.",
              icon: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/icon.png",
              name: "Volume Up",
              type: "command",
            },
            {
              action: {
                args: [
                  "-c",
                  'osascript -e \'tell application "QQMusic" to activate\' -e \'tell application "System Events" to tell process "QQMusic" to tell menu bar 1 to tell menu bar item "播放控制" to tell menu "播放控制" to click menu item "音量减"\'',
                ],
                exec: "zsh",
              },
              description: "Decrease the volume by one step.",
              icon: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/icon.png",
              name: "Volume Down",
              type: "command",
            },
            {
              action: {
                args: [
                  "-c",
                  'osascript -e \'tell application "QQMusic" to activate\' -e \'delay 1\' -e \'tell application "System Events" to tell process "QQMusic" to tell menu bar 1 to tell menu bar item "播放控制" to tell menu "播放控制" to click menu item 1 of menu 1 of menu item 7\'',
                ],
                exec: "zsh",
              },
              description: "Switch QQ Music to shuffle play mode.",
              icon: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/icon.png",
              name: "Set Shuffle Mode",
              type: "command",
            },
            {
              action: {
                args: [
                  "-c",
                  'osascript -e \'tell application "QQMusic" to activate\' -e \'delay 1\' -e \'tell application "System Events" to tell process "QQMusic" to tell menu bar 1 to tell menu bar item "播放控制" to tell menu "播放控制" to click menu item 2 of menu 1 of menu item 7\'',
                ],
                exec: "zsh",
              },
              description: "Switch QQ Music to repeat play mode.",
              icon: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/icon.png",
              name: "Set Repeat Mode",
              type: "command",
            },
            {
              action: {
                args: [
                  "-c",
                  'osascript -e \'tell application "QQMusic" to activate\' -e \'delay 1\' -e \'tell application "System Events" to tell process "QQMusic" to tell menu bar 1 to tell menu bar item "播放控制" to tell menu "播放控制" to click menu item 3 of menu 1 of menu item 7\'',
                ],
                exec: "zsh",
              },
              description: "Switch QQ Music to sequential play mode.",
              icon: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/icon.png",
              name: "Set Sequential Mode",
              type: "command",
            },
            {
              action: {
                args: [
                  "-c",
                  'osascript -e \'tell application "QQMusic" to activate\' -e \'delay 1\' -e \'tell application "System Events" to tell process "QQMusic" to tell menu bar 1 to tell menu bar item "播放控制" to tell menu "播放控制" to click menu item 8\'',
                ],
                exec: "zsh",
              },
              description: "Toggle display of lyrics in QQ Music.",
              icon: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/icon.png",
              name: "Toggle Lyrics",
              type: "command",
            },
          ],
          created: "2025-07-28T10:48:55.383879735Z",
          description:
            "Control QQ Music playback and volume with quick commands via AppleScript. Supports play, pause, next, previous, volume up/down, mute toggle, like/unlike song, and more.",
          developer: {
            avatar:
              "https://coco.infini.cloud//extensions/medcl/assets/avatar.jpg",
            bio: "Make it work, make it better.",
            created: "2025-07-28T10:48:55.379412739Z",
            github_handle: "medcl",
            id: "medcl",
            location: "Internet",
            name: "Medcl",
            twitter_handle: "medcl",
            updated: "2025-07-28T10:48:55.379412739Z",
            website: "https://medcl.com/",
          },
          icon: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/icon.png",
          id: "23488499b6c95b54c623265f9416699e",
          name: "QQ Music Controls",
          platforms: ["macos"],
          screenshots: [
            {
              title: "QQ Music Playback and Volume Controls",
              url: "https://coco.infini.cloud//extensions/medcl/qq_music_controls/assets/screenshot.jpeg",
            },
          ],
          stats: {
            installs: 1,
            views: 1,
          },
          tags: ["Music", "Media", "Playback", "Volume", "QQMusic", "Audio"],
          type: "extension",
          updated: "2025-07-28T10:48:55.383879735Z",
          url: {
            code: "https://github.com/infinilabs/coco-extensions/tree/main/extensions/medcl/qq_music_controls",
            download:
              "https://coco.infini.cloud/pkg/medcl/23488499b6c95b54c623265f9416699e/qq_music_controls-0.1.zip",
          },
          version: {
            number: "0.1",
          },
        },
      };

      setExtension(data._source);
    } catch (err) {
      console.error("Error fetching extension:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [extensionId]);

  useEffect(() => {
    getLocale();
    fetchExtension();
  }, [getLocale, fetchExtension]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error || !extension) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#04071B] pt-28 md:pt-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {locale?.extensionNotFound || "Extension Not Found"}
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {error ||
                locale?.extensionNotFoundDesc ||
                "The requested extension could not be found."}
            </p>

            <button
              onClick={() => router.push(`/${lang}/integration`)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {locale?.backToExtensions || "Back to Extensions"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const renderExtensionIcon = (iconType: string) => {
    const iconProps = {
      className: "text-white",
      viewBox: "0 0 24 24",
      fill: "currentColor",
    };

    switch (iconType) {
      case "volume":
        return (
          <svg {...iconProps} className="w-10 h-10 text-white">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        );
      case "eject":
        return (
          <svg {...iconProps} className="w-6 h-6 text-white">
            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
          </svg>
        );
      case "check":
        return (
          <svg {...iconProps} className="w-6 h-6 text-white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        );
      case "music":
        return (
          <svg {...iconProps} className="w-6 h-6 text-white">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header with back button */}
        <div className="mb-20">
          <button onClick={() => router.push(`/${lang}/integration`)}>
            {locale?.extensions || "Extensions"}
          </button>
          {` > ${extension.name}`}
        </div>

        {/* Extension header */}
        <div className="flex items-start space-x-6 mb-7">
          <div className="flex-shrink-0">
            <Image
              src={extension.icon}
              alt={extension.name}
              width={128}
              height={128}
            />
          </div>

          <div className="flex-1">
            <div className="text-3xl font-medium text-gray-900 dark:text-white mb-4">
              {extension.name}
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={extension.developer.avatar}
                alt={extension.developer.name}
                width={24}
                height={24}
                className="rounded-full"
                onError={() => {}}
              />
              <span className="text-gray-600 dark:text-[#c8c8c8] font-normal text-base">
                {extension.developer.name}
              </span>
            </div>

            <div className="flex items-center space-x-10 mb-4">
              <div className="flex items-center space-x-4">
                <MonitorCheck className="w-6 h-6 text-black dark:text-white" />
                {extension.platforms.includes("macos") && (
                  <Image
                    src={
                      theme === "dark"
                        ? "/svg/download/macos.svg"
                        : "/svg/download/macos-light.svg"
                    }
                    alt="macOS"
                    width={24}
                    height={24}
                    className="dark:text-black"
                  />
                )}
                {extension.platforms.includes("windows") && (
                  <Image
                    src="/svg/windows11-logo.svg"
                    alt="Windows"
                    width={24}
                    height={24}
                  />
                )}

                {extension.platforms.includes("linux") && (
                  <Image
                    src="/svg/ubuntu.svg"
                    alt="Linux"
                    width={24}
                    height={24}
                  />
                )}
              </div>

              <div className="flex items-center space-x-2">
                <FolderDown className="w-6 h-6" />
                <span>
                  {extension.stats.installs >= 1000
                    ? `${(extension.stats.installs / 1000).toFixed(1)}k`
                    : extension.stats.installs}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <GitFork className="w-6 h-6" />
                <span>{extension.stats.views}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="w-6 h-6" />
                <span>{locale?.repo || "Repo"}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-10">
          {extension.description}
        </p>

        <Link
          href={extension.url.download}
          aria-label="install"
          target="_blank"
        >
          <div
            className={`h-12 w-32 text-center mb-14 leading-[48px] px-4 rounded-full font-medium text-base transition-colors text-[#04071b]`}
            style={{
              background: "linear-gradient(90deg, #F5D9FF 0%, #00FFF6 100%)",
              boxShadow: "0 2px 12px 0 #19F3FF55",
            }}
          >
            {locale?.install || "Loading..."}
          </div>
        </Link>

        <div className="flex justify-between">
          <ExtensionDetailContent
            extension={extension}
            locale={locale}
            lang={lang}
            relatedExtensions={relatedExtensions}
          />

          <ExtensionDeveloperInfo
            extension={extension}
            locale={locale}
            lang={lang}
            getDeveloperExtensions={getDeveloperExtensions}
            renderExtensionIcon={renderExtensionIcon}
          />
        </div>
      </div>
    </div>
  );
}
