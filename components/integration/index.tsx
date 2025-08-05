"use client";

import { MoveRight, Search } from "lucide-react";
import { useTheme } from "next-themes";
import Images from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { getDictionary } from "@/i18n/i18n";

interface IntegrationIndexProps {
  lang: string;
}

export default function IntegrationIndex({ lang }: IntegrationIndexProps) {
  const { theme } = useTheme();
  const [locale, setLocale] = useState<any>();
  const [searchQuery, setSearchQuery] = useState("");

  const getLocale = useCallback(async () => {
    const dict = await getDictionary(lang);
    setLocale(dict);
  }, [lang]);

  useEffect(() => {
    getLocale();
  }, [getLocale]);

  const integrationModules = locale
    ? [
        {
          id: "extensions",
          title: locale.Integration.modules.extensions.title,
          subtitle: locale.Integration.modules.extensions.subtitle,
          description: locale.Integration.modules.extensions.description,
          icon: "/svg/extension/extension.svg",
          href: `/${lang}/integration/extensions`,
          gradient: "from-purple-500 to-blue-500",
          size: "large",
        },
        {
          id: "connector",
          title: locale.Integration.modules.connector.title,
          subtitle: locale.Integration.modules.connector.subtitle,
          description: locale.Integration.modules.connector.description,
          icon: "/svg/extension/Connector.svg",
          href: ``,
          gradient: "from-green-500 to-teal-500",
          size: "large",
        },
        {
          id: "ai-assistant",
          title: locale.Integration.modules.aiAssistant.title,
          subtitle: locale.Integration.modules.aiAssistant.subtitle,
          description: locale.Integration.modules.aiAssistant.description,
          icon: "/svg/extension/Assistant.svg",
          href: ``,
          gradient: "from-blue-500 to-cyan-500",
          size: "small",
        },
        {
          id: "mcp-server",
          title: locale.Integration.modules.mcpServer.title,
          subtitle: locale.Integration.modules.mcpServer.subtitle,
          description: locale.Integration.modules.mcpServer.description,
          icon: "/svg/extension/mcp.svg",
          href: ``,
          gradient: "from-indigo-500 to-purple-500",
          size: "small",
        },
        {
          id: "quicklink",
          title: locale.Integration.modules.quicklink.title,
          subtitle: locale.Integration.modules.quicklink.subtitle,
          description: locale.Integration.modules.quicklink.description,
          icon: "/svg/extension/Quicklink.svg",
          href: ``,
          gradient: "from-purple-500 to-pink-500",
          size: "small",
        },
      ]
    : [];

  if (!locale) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300">
      <div className="h-[480px] mt-14 max-w-6xl mx-auto py-20 bg-[url('/svg/extension/store-bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="h-[79px] mb-4 text-center font-medium text-3xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 dark:from-[#843DFF] dark:to-[#00CEFF] bg-clip-text text-transparent">
          {locale.Integration.title}
        </div>
        <p className="text-base text-center mb-20 text-gray-600 dark:text-gray-400">
          {locale.Integration.description}
        </p>

        <div className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-16 p-[2px] rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-[#5E85FF33] dark:to-[#49FFF333]">
          <div className="w-full relative">
            <div className="absolute inset-y-0 left-0 z-10 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 md:h-5 md:w-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={locale.Integration.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full pl-10 md:pl-12 pr-4 py-3 md:py-4 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white border-gray-200 text-gray-900 placeholder-gray-500 dark:bg-[#04071B] dark:border-[#04071B] dark:text-white dark:placeholder-gray-400 text-sm md:text-base"
            />
          </div>
        </div>
      </div>

      {/* Integration Modules Grid */}
      <div className="mt-14 max-w-7xl mx-auto p-4">
        {/* Top Row - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Extensions - Large Card */}
          <Link href={integrationModules[0].href}>
            <div className="h-[380px] group relative backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
              <div className="relative z-10 h-full flex flex-col p-10 rounded-[16px] bg-[#EBF6FF] dark:bg-[#0B1020]">
                <div className="flex items-center justify-between mb-5">
                  <Images
                    src={integrationModules[0].icon}
                    alt={integrationModules[0].title}
                    width={56}
                    height={56}
                  />
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  {integrationModules[0].title}
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-semibold rounded-full">
                    {integrationModules[0].subtitle}
                  </span>
                </h3>

                <p className="text-sm flex-grow text-gray-600 dark:text-gray-300">
                  {integrationModules[0].description}
                </p>

                <div className="absolute bottom-6 left-10">
                  <div className="inline-flex items-center transition-colors text-blue-600 group-hover:text-blue-500 dark:text-blue-400 dark:group-hover:text-blue-300">
                    <MoveRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Connector - Large Card */}
          <div>
            <div className="h-[380px] group relative backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
              <div className="relative z-10 h-full flex flex-col p-10 rounded-[16px] bg-[#EBF6FF] dark:bg-[#0B1020]">
                <div className="flex items-center justify-between mb-5">
                  <Images
                    src={integrationModules[1].icon}
                    alt={integrationModules[1].title}
                    width={56}
                    height={56}
                  />
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  {integrationModules[1].title}
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-semibold rounded-full">
                    {integrationModules[1].subtitle}
                  </span>
                </h3>

                <p className="text-sm flex-grow text-gray-600 dark:text-gray-300">
                  {integrationModules[1].description}
                </p>

                <div className="absolute bottom-6 left-10">
                  <MoveRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Small Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrationModules.slice(2).map((module, index) => (
            <div key={module.id}>
              <div className="h-[380px] group relative backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
                <div className="relative z-10 h-full flex flex-col p-10 rounded-[16px] bg-[#EBF6FF] dark:bg-[#0B1020]">
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-2xl">
                      <Images
                        src={module.icon}
                        alt={module.title}
                        width={56}
                        height={56}
                      />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    {module.title}
                    <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-semibold rounded-full">
                      {module.subtitle}
                    </span>
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {module.description}
                  </p>

                  <div className="absolute bottom-6 left-10">
                    <MoveRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
