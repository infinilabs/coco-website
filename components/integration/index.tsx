"use client";

import { MoveRight } from "lucide-react";
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
      <div className="h-[300px] sm:h-[380px] md:h-[445px] w-full max-w-[1000px] mt-8 sm:mt-12 md:mt-14 mx-auto px-4 sm:px-6 md:px-0 py-12 sm:py-16 md:py-20 bg-[url('/svg/extension/store-bg.svg')] bg-cover bg-center bg-no-repeat">
        <div className="h-auto mb-3 sm:mb-4 text-center font-medium text-2xl sm:text-3xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 dark:from-[#843DFF] dark:to-[#00CEFF] bg-clip-text text-transparent">
          {locale.Integration.title}
        </div>
        <p className="text-sm sm:text-base text-center mb-12 sm:mb-16 md:mb-20 text-gray-600 dark:text-gray-400 px-4">
          {locale.Integration.description}
        </p>
      </div>

      {/* Integration Modules Grid */}
      <div className="mt-6 sm:mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        {/* Top Row - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Extensions - Large Card */}
          <Link href={integrationModules[0].href}>
            <div
              className={`h-[280px] sm:h-[320px] md:h-[380px] group relative backdrop-blur-sm hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333] cursor-pointer`}
            >
              <div className="relative z-10 h-full flex flex-col p-6 sm:p-8 md:p-10 rounded-[15px] bg-[#EBF6FF] dark:bg-[#0B1020]">
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <Images
                    src={integrationModules[0].icon}
                    alt={integrationModules[0].title}
                    width={48}
                    height={48}
                    className="sm:w-[56px] sm:h-[56px]"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white flex flex-col sm:flex-row sm:items-center gap-2">
                  <span>{integrationModules[0].title}</span>
                  <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-semibold rounded-full w-fit">
                    {integrationModules[0].subtitle}
                  </span>
                </h3>

                <p className="text-xs sm:text-sm flex-grow text-gray-600 dark:text-gray-300 leading-relaxed">
                  {integrationModules[0].description}
                </p>

                <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-10">
                  <div className="inline-flex items-center transition-colors text-blue-600 group-hover:text-blue-500 dark:text-blue-400 dark:group-hover:text-blue-300">
                    <MoveRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#28A3FF]" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Connector - Large Card */}
          <div>
            <div className="h-[280px] sm:h-[320px] md:h-[380px] group relative backdrop-blur-sm hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
              <div className="relative z-10 h-full flex flex-col p-6 sm:p-8 md:p-10 rounded-[15px] bg-[#EBF6FF] dark:bg-[#0B1020]">
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <Images
                    src={integrationModules[1].icon}
                    alt={integrationModules[1].title}
                    width={48}
                    height={48}
                    className="sm:w-[56px] sm:h-[56px]"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white flex flex-col sm:flex-row sm:items-center gap-2">
                  <span>{integrationModules[1].title}</span>
                  <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-semibold rounded-full w-fit">
                    {integrationModules[1].subtitle}
                  </span>
                </h3>

                <p className="text-xs sm:text-sm flex-grow text-gray-600 dark:text-gray-300 leading-relaxed">
                  {integrationModules[1].description}
                </p>

                <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-10">
                  <MoveRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4DFE7] dark:text-[#133348]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Small Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {integrationModules.slice(2).map((module, index) => (
            <div key={module.id}>
              <div className="h-[280px] sm:h-[320px] md:h-[380px] group relative backdrop-blur-sm hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
                <div className="relative z-10 h-full flex flex-col p-6 sm:p-8 md:p-10 rounded-[15px] bg-[#EBF6FF] dark:bg-[#0B1020]">
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="text-2xl">
                      <Images
                        src={module.icon}
                        alt={module.title}
                        width={48}
                        height={48}
                        className="sm:w-[56px] sm:h-[56px]"
                      />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white flex flex-col sm:flex-row sm:items-center gap-2">
                    <span>{module.title}</span>
                    <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-semibold rounded-full w-fit">
                      {module.subtitle}
                    </span>
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {module.description}
                  </p>

                  <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-10">
                    <MoveRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4DFE7] dark:text-[#133348]" />
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
