"use client";

import {
  ArrowLeft,
  Download,
  ExternalLink,
  FolderDown,
  Github,
  Globe,
  MonitorCheck,
  Star,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import LoadingScreen from "@/components/LoadingScreen";
import type { Extension } from "@/data/integration";
import { getDictionary } from "@/i18n/i18n";

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
  const [imageError, setImageError] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);

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

      // 处理API返回的数据结构
      if (data._source) {
        // 清理图标URL中的反引号
        const cleanedExtension = {
          ...data._source,
          icon: data._source.icon?.replace(/`/g, "").trim(),
          developer: {
            ...data._source.developer,
            avatar: data._source.developer.avatar?.replace(/`/g, "").trim(),
            website: data._source.developer.website?.replace(/`/g, "").trim(),
          },
          url: {
            code: data._source.url.code?.replace(/`/g, "").trim(),
            download: data._source.url.download?.replace(/`/g, "").trim(),
          },
          screenshots:
            data._source.screenshots?.map((screenshot: any) => ({
              ...screenshot,
              url: screenshot.url?.replace(/`/g, "").trim(),
            })) || [],
        };
        setExtension(cleanedExtension);
      } else {
        setExtension(data);
      }
    } catch (err) {
      console.error("Error fetching extension:", err);
      setError(err instanceof Error ? err.message : "Failed to load extension");
    } finally {
      setLoading(false);
    }
  }, [extensionId]);

  useEffect(() => {
    getLocale();
    fetchExtension();
  }, [getLocale, fetchExtension]);

  const handleImageError = () => {
    setImageError(true);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "macos":
        return "/svg/download/apple.svg";
      case "windows":
        return "/svg/download/windows.svg";
      case "linux":
        return "/svg/download/linux.svg";
      default:
        return "/svg/download/default.svg";
    }
  };

  // 加载状态
  if (loading) {
    return <LoadingScreen />;
  }

  // 错误状态
  if (error || !extension) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#04071B] pt-28 md:pt-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Extension Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {error || "The requested extension could not be found."}
            </p>
            <button
              onClick={() => router.push(`/${lang}/integration`)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Extensions
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#04071B] pt-28 md:pt-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with back button */}
        <div className="mb-8">
          <button
            onClick={() => router.push(`/${lang}/integration`)}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Extensions
          </button>
        </div>

        {/* 保持原有的UI结构，但使用从API获取的extension数据 */}
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Extension info */}
          <div className="lg:col-span-2">
            {/* Extension header */}
            <div className="flex items-start space-x-6 mb-8">
              <div className="flex-shrink-0">
                {!imageError && extension.icon ? (
                  <Image
                    src={extension.icon}
                    alt={extension.name}
                    width={128}
                    height={128}
                    className="rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 p-4"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-[120px] h-[120px] bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl flex items-center justify-center p-4">
                    <span className="text-blue-600 dark:text-blue-400 text-4xl font-bold">
                      {extension.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  {extension.name}
                </h1>

                {/* Developer info */}
                <div className="flex items-center space-x-2 mb-4">
                  {extension.developer.avatar ? (
                    <Image
                      src={extension.developer.avatar}
                      alt={extension.developer.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                      onError={() => {}}
                    />
                  ) : (
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {extension.developer.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <span className="text-gray-600 dark:text-gray-400 font-medium">
                    {extension.developer.name}
                  </span>
                </div>

                {/* 统计信息 */}
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>
                      {extension.stats.installs.toLocaleString()} installs
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MonitorCheck className="w-4 h-4" />
                    <span>{extension.stats.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>v{extension.version.number}</span>
                  </div>
                  {extension.url.code && (
                    <a
                      href={extension.url.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Github className="w-4 h-4" />
                      <span>Repo</span>
                    </a>
                  )}
                </div>

                {/* Platform icons and stats */}
                <div className="flex items-center space-x-6 mb-4">
                  {/* Platform support icons */}
                  <div className="flex items-center space-x-2">
                    {extension.platforms.includes("windows") && (
                      <div className="w-6 h-6 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                        <Image
                          src="/svg/download/windows.svg"
                          alt="Windows"
                          width={16}
                          height={16}
                        />
                      </div>
                    )}
                    {extension.platforms.includes("macos") && (
                      <div className="w-6 h-6 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                        <Image
                          src="/svg/download/apple.svg"
                          alt="macOS"
                          width={16}
                          height={16}
                        />
                      </div>
                    )}
                    {extension.platforms.includes("linux") && (
                      <div className="w-6 h-6 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                        <Image
                          src="/svg/download/linux.svg"
                          alt="Linux"
                          width={16}
                          height={16}
                        />
                      </div>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>
                        {extension.stats.installs >= 1000
                          ? `${(extension.stats.installs / 1000).toFixed(1)}k`
                          : extension.stats.installs}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{extension.version.number}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Github className="w-4 h-4" />
                      <span>Repo</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  {extension.description}
                </p>
              </div>
            </div>

            {/* Screenshots */}
            {extension.screenshots && extension.screenshots.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Screenshots
                </h2>
                <div className="space-y-4">
                  {/* Main screenshot */}
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <Image
                      src={extension.screenshots[selectedScreenshot]?.url || ""}
                      alt={
                        extension.screenshots[selectedScreenshot]?.title ||
                        "Screenshot"
                      }
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Screenshot thumbnails */}
                  {extension.screenshots.length > 1 && (
                    <div className="flex space-x-2 overflow-x-auto">
                      {extension.screenshots.map((screenshot, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedScreenshot(index)}
                          className={`flex-shrink-0 w-20 h-12 rounded border-2 overflow-hidden ${
                            selectedScreenshot === index
                              ? "border-blue-500"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                        >
                          <Image
                            src={screenshot.url}
                            alt={screenshot.url}
                            width={80}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Description
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {extension.description}
                </p>
              </div>
            </div>

            {/* Commands */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Commands
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <MonitorCheck className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Toggle Play/Pause
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {extension.action.exec} {extension.action.args.join(" ")}
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Developer info and actions */}
          <div className="space-y-6">
            {/* Install button */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Install</span>
              </button>

              {/* Platform support */}
              <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Supported platforms:
                </p>
                <div className="flex space-x-2">
                  {extension.platforms.map((platform) => (
                    <div key={platform} className="flex items-center space-x-1">
                      <Image
                        src={getPlatformIcon(platform)}
                        alt={platform}
                        width={16}
                        height={16}
                      />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {platform}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Developer info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Developer
              </h3>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  {extension.developer.avatar ? (
                    <Image
                      src={extension.developer.avatar}
                      alt={extension.developer.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {extension.developer.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {extension.developer.name}
                  </h4>
                  {extension.developer.bio && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {extension.developer.bio}
                    </p>
                  )}
                  {extension.developer.location && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      📍 {extension.developer.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Developer links */}
              <div className="mt-4 space-y-2">
                {extension.developer.github_handle && (
                  <a
                    href={`https://github.com/${extension.developer.github_handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>@{extension.developer.github_handle}</span>
                  </a>
                )}
                {extension.developer.website && (
                  <a
                    href={extension.developer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Website</span>
                  </a>
                )}
              </div>
            </div>

            {/* Additional info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Information
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Category:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {extension.category}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Version:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    v{extension.version.number}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Updated:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {new Date(extension.updated).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Type:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {extension.type}
                  </span>
                </div>
              </div>

              {/* Links */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                {extension.url.code && (
                  <a
                    href={extension.url.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Source Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {extension.url.download && (
                  <a
                    href={extension.url.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <FolderDown className="w-4 h-4" />
                    <span>Download</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
