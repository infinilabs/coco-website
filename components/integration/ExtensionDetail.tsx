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

import type { Extension } from "@/data/integration";
import { getDictionary } from "@/i18n/i18n";
import ExtensionDetailContent from "./ExtensionDetailContent";
import ExtensionDeveloperInfo from "./ExtensionDeveloperInfo";

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
    return (
      <div className="min-h-screen bg-white dark:bg-[#04071B] pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Loading skeleton */}
          <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-7 mb-6 md:mb-7">
            {/* Icon skeleton */}
            <div className="flex-shrink-0 self-center md:self-start bg-gray-200 dark:bg-gray-700 rounded-lg w-36 h-36 animate-pulse" />

            {/* Text content skeleton */}
            <div className="flex-1 text-center md:text-left">
              <div className="bg-gray-200 dark:bg-gray-700 rounded h-8 w-64 mb-4 animate-pulse mx-auto md:mx-0" />
              <div className="bg-gray-200 dark:bg-gray-700 rounded h-6 w-32 mb-6 animate-pulse mx-auto md:mx-0" />
              <div className="flex flex-col space-y-3 md:flex-row md:items-center md:space-y-0 md:space-x-10">
                <div className="flex items-center justify-center md:justify-start space-x-3 md:space-x-4">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded w-6 h-6 animate-pulse" />
                  <div className="bg-gray-200 dark:bg-gray-700 rounded w-6 h-6 animate-pulse" />
                  <div className="bg-gray-200 dark:bg-gray-700 rounded w-6 h-6 animate-pulse" />
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-6 md:space-x-10">
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-200 dark:bg-gray-700 rounded w-6 h-6 animate-pulse" />
                    <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 w-8 animate-pulse" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-200 dark:bg-gray-700 rounded w-6 h-6 animate-pulse" />
                    <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 w-8 animate-pulse" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-200 dark:bg-gray-700 rounded w-6 h-6 animate-pulse" />
                    <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 w-12 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 w-full max-w-3xl mb-8 animate-pulse mx-auto md:mx-0" />
          <div className="bg-gray-200 dark:bg-gray-700 rounded h-12 w-32 mb-10 animate-pulse mx-auto md:mx-0" />

          <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0">
            <div className="w-full lg:w-[70%] space-y-6">
              <div className="bg-gray-200 dark:bg-gray-700 rounded h-64 animate-pulse" />
              <div className="bg-gray-200 dark:bg-gray-700 rounded h-48 animate-pulse" />
            </div>
            <div className="w-full lg:w-[29%] space-y-6">
              <div className="bg-gray-200 dark:bg-gray-700 rounded h-64 animate-pulse" />
              <div className="bg-gray-200 dark:bg-gray-700 rounded h-12 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !extension) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#04071B] pt-28 md:pt-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {locale?.extensionNotFound}
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {error || locale?.extensionNotFoundDesc}
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

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header with back button */}
        <div className="hidden md:block mb-12 md:mb-20 text-[#666] dark:text-[#C8C8C8] min-h-[24px]">
          <button
            onClick={() => router.push(`/${lang}/integration/extensions`)}
            className="text-left"
          >
            {locale?.extensions || "Extensions"}
          </button>
          {extension && ` > ${extension.name}`}
        </div>

        {/* Extension header */}
        <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-6 md:mb-7">
          <div className="flex-shrink-0 self-center md:self-start w-36 h-36">
            <Image
              src={extension.icon}
              alt={extension.name}
              width={144}
              height={144}
              className="w-full h-full object-contain"
              style={{
                filter: "drop-shadow(rgb(255, 255, 255) 0px 0px 6px)",
              }}
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-3 md:mb-4">
              {extension.name}
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4 md:mb-6">
              <Image
                src={extension.developer.avatar}
                alt={extension.developer.name}
                width={20}
                height={20}
                className="md:w-6 md:h-6 rounded-full object-cover"
                onError={() => {}}
              />
              <span className="text-gray-600 dark:text-[#c8c8c8] font-normal text-sm md:text-base">
                {extension.developer.name}
              </span>
            </div>

            <div className="flex flex-col space-y-3 md:flex-row md:items-center md:space-y-0 md:space-x-10">
              <div className="flex items-center justify-center md:justify-start space-x-3 md:space-x-4">
                <MonitorCheck className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white" />

                {/* Show all platforms if platforms array is empty or show specific platforms */}
                {!extension.platforms || extension.platforms.length === 0 ? (
                  <>
                    <Image
                      src="/svg/extension/macos.svg"
                      alt="macOS"
                      width={20}
                      height={20}
                      className="dark:text-black"
                    />
                    <Image
                      src="/svg/windows11-logo.svg"
                      alt="Windows"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/svg/ubuntu.svg"
                      alt="Linux"
                      width={20}
                      height={20}
                    />
                  </>
                ) : (
                  <>
                    {extension.platforms?.includes("macos") && (
                      <Image
                        src="/svg/extension/macos.svg"
                        alt="macOS"
                        width={20}
                        height={20}
                        className="dark:text-black"
                      />
                    )}
                    {extension.platforms?.includes("windows") && (
                      <Image
                        src="/svg/windows11-logo.svg"
                        alt="Windows"
                        width={20}
                        height={20}
                      />
                    )}
                    {extension.platforms?.includes("linux") && (
                      <Image
                        src="/svg/ubuntu.svg"
                        alt="Linux"
                        width={20}
                        height={20}
                      />
                    )}
                  </>
                )}
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-6 md:space-x-10 text-[#666666] dark:text-[#C8C8C8]">
                <div className="flex items-center space-x-1 md:space-x-2">
                  <FolderDown className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base">
                    {extension.stats.installs >= 1000
                      ? `${(extension.stats.installs / 1000).toFixed(1)}k`
                      : extension.stats.installs}
                  </span>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <a
                    href={extension.url?.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 md:space-x-2"
                  >
                    <GitFork className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-sm md:text-base">
                      {extension.stats.views}
                    </span>
                  </a>
                </div>
                <div className="flex items-center space-x-1 md:space-x-2">
                  <a
                    href={extension.url?.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 md:space-x-2"
                  >
                    <Github className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-sm md:text-base">
                      {locale?.repo || "Repo"}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-8 md:mb-10 text-center md:text-left px-2 md:px-0 max-w-3xl mx-auto md:mx-0">
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
          />

          <ExtensionDeveloperInfo
            extension={extension}
            locale={locale}
            lang={lang}
          />
        </div>
      </div>
    </div>
  );
}
