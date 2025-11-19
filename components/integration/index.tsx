"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import PageLoader from "@/components/ui/PageLoader";
import { startRouteProgress } from "@/components/ui/routeProgress";
import { getDictionarySync } from "@/i18n/i18n";

interface IntegrationIndexProps {
  lang: string;
}

export default function IntegrationIndex({ lang }: IntegrationIndexProps) {
  const locale = getDictionarySync(lang);

  const integrationModules = [
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
      href: `/${lang}/integration/connector`,
      gradient: "from-green-500 to-teal-500",
      size: "large",
    },
    {
      id: "ai-assistant",
      title: locale.Integration.modules.aiAssistant.title,
      subtitle: locale.Integration.modules.aiAssistant.subtitle,
      description: locale.Integration.modules.aiAssistant.description,
      icon: "/svg/extension/Assistant.svg",
      href: `/${lang}/integration/assistant`,
      gradient: "from-blue-500 to-cyan-500",
      size: "small",
    },
    {
      id: "mcp-server",
      title: locale.Integration.modules.mcpServer.title,
      subtitle: locale.Integration.modules.mcpServer.subtitle,
      description: locale.Integration.modules.mcpServer.description,
      icon: "/svg/extension/mcp.svg",
      href: `/${lang}/integration/mcp`,
      gradient: "from-indigo-500 to-purple-500",
      size: "small",
    },
    {
      id: "llm-provider",
      title: locale.Integration.modules.llmProvider.title,
      subtitle: locale.Integration.modules.llmProvider.subtitle,
      description: locale.Integration.modules.llmProvider.description,
      icon: "/svg/extension/LLM.svg",
      href: `/${lang}/integration/llm`,
      gradient: "from-purple-500 to-pink-500",
      size: "small",
    },
    {
      id: "datasource",
      title: locale.Integration.modules.datasource.title,
      subtitle: locale.Integration.modules.datasource.subtitle,
      description: locale.Integration.modules.datasource.description,
      icon: "/svg/extension/Datasource.svg",
      href: `/${lang}/integration/datasource`,
      gradient: "from-purple-500 to-pink-500",
      size: "small",
    },
  ];

  if (!locale) return <PageLoader />;

  return (
    <div className="min-h-screen w-full max-w-7xl relative overflow-hidden transition-colors duration-300">
      <div className="relative w-full mt-8 sm:mt-12 md:mt-14 mx-auto px-4 sm:px-6 md:px-0">
        <div className="relative overflow-hidden">
          <Image
            src="/svg/extension/store-bg.svg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover md:object-contain"
          />
          <div className="relative z-10 py-12 sm:py-16 md:py-20">
            <div className="h-auto mb-3 sm:mb-4 text-center font-medium text-2xl sm:text-3xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-600 dark:from-[#843DFF] dark:to-[#00CEFF] bg-clip-text text-transparent">
              {locale.Integration.title}
            </div>
            <p className="text-sm sm:text-base text-center mb-12 sm:mb-16 md:mb-20 text-gray-600 dark:text-gray-400 px-4">
              {locale.Integration.description}
            </p>
          </div>
        </div>
      </div>

      {/* Integration Modules Grid */}
      <div className="mt-14 w-full mx-auto px-4 sm:p-6 lg:p-4">
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {integrationModules.map((module, index) => (
            <Link
              key={module.id}
              href={module.href}
              onClick={() => startRouteProgress()}
              className="w-full md:w-auto md:flex-[0_0_calc((100%-3rem)/3)]"
            >
              <div className="h-[280px] sm:h-[320px] md:h-[380px] group relative backdrop-blur-sm hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
                <div className="relative z-10 h-full flex flex-col p-6 sm:p-8 md:p-10 rounded-[15px] bg-[#EBF6FF] dark:bg-[#0B1020]">
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="text-2xl">
                      <Image
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
                    <MoveRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#28A3FF]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
