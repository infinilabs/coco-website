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

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch extension: ${response.status}`);
      }

      const data = await response.json();
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
              onClick={() => router.push(`/${lang}/integration/extensions`)}
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
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header with back button */}
        <div className="mb-12 md:mb-20">
          <button
            onClick={() => router.push(`/${lang}/integration/extensions`)}
          >
            {locale?.extensions || "Extensions"}
          </button>
          {` > ${extension.name}`}
        </div>

        {/* Extension header */}
        <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-6 md:mb-7">
          <div className="flex-shrink-0 self-center md:self-start">
            <Image
              src={extension.icon}
              alt={extension.name}
              width={96}
              height={96}
              className="md:w-32 md:h-32"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-3 md:mb-4">
              {extension.name}
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3 md:mb-4">
              <Image
                src={extension.developer.avatar}
                alt={extension.developer.name}
                width={20}
                height={20}
                className="md:w-6 md:h-6 rounded-full"
                onError={() => {}}
              />
              <span className="text-gray-600 dark:text-[#c8c8c8] font-normal text-sm md:text-base">
                {extension.developer.name}
              </span>
            </div>

            <div className="flex flex-col space-y-3 md:flex-row md:items-center md:space-y-0 md:space-x-10 mb-3 md:mb-4">
              <div className="flex items-center justify-center md:justify-start space-x-3 md:space-x-4">
                <MonitorCheck className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white" />
                {extension.platforms.includes("macos") && (
                  <Image
                    src={
                      theme === "dark"
                        ? "/svg/download/macos.svg"
                        : "/svg/download/macos-light.svg"
                    }
                    alt="macOS"
                    width={20}
                    height={20}
                    className="md:w-6 md:h-6 dark:text-black"
                  />
                )}
                {extension.platforms.includes("windows") && (
                  <Image
                    src="/svg/windows11-logo.svg"
                    alt="Windows"
                    width={20}
                    height={20}
                    className="md:w-6 md:h-6"
                  />
                )}

                {extension.platforms.includes("linux") && (
                  <Image
                    src="/svg/ubuntu.svg"
                    alt="Linux"
                    width={20}
                    height={20}
                    className="md:w-6 md:h-6"
                  />
                )}
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-6 md:space-x-10">
                <div className="flex items-center space-x-1 md:space-x-2">
                  <FolderDown className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base">
                    {extension.stats.installs >= 1000
                      ? `${(extension.stats.installs / 1000).toFixed(1)}k`
                      : extension.stats.installs}
                  </span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <GitFork className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base">
                    {extension.stats.views}
                  </span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <Github className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base">
                    {locale?.repo || "Repo"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-8 md:mb-10 text-center md:text-left px-2 md:px-0">
          {extension.description}
        </p>

        <div className="flex justify-center md:justify-start mb-10 md:mb-14">
          <Link
            href={`coco://install_extension_from_store?id=${extension.id}`}
            aria-label="install"
            target="_blank"
          >
            <div
              className={`h-10 md:h-12 w-28 md:w-32 text-center leading-[40px] md:leading-[48px] px-3 md:px-4 rounded-full font-medium text-sm md:text-base transition-colors text-[#04071b]`}
              style={{
                background: "linear-gradient(90deg, #F5D9FF 0%, #00FFF6 100%)",
                boxShadow: "0 2px 12px 0 #19F3FF55",
              }}
            >
              {locale?.install || "Loading..."}
            </div>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0">
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
