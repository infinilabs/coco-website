"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";

import NavTab from "@/components/header/NavTab";
import AppInstall from "@/components/download/AppInstall";
import ServerInstall from "@/components/download/ServerInstall";
import { defaultLocale, getDictionary } from "@/i18n/i18n";
import {
  appVersion,
  serverVersion,
  appPublish,
  serverPublish,
  appNotes,
  serverNotes,
  appDocs,
  serverDocs,
} from "@/data/download";
import AppIcon from "@/components/icons/AppIcon";
import ServerIcon from "@/components/icons/ServerIcon";


export default function DownloadPageClient() {
  const [lang, setLang] = useState(defaultLocale);
  const searchParams = useSearchParams();

  useEffect(() => {
    const lang =
      searchParams.get("lang") || localStorage.getItem("lang") || defaultLocale;
    setLang(lang);
  }, [searchParams]);

  const [locale, setLocale] = useState<any>();
  const [activeTab, setActiveTab] = useState<"app" | "server">("app");

  const getLocale = useCallback(async () => {
    const dict = await getDictionary(lang);
    setLocale(dict.Download);
  }, [lang]);

  useEffect(() => {
    getLocale();
  }, [getLocale]);

  return (
    <section className="w-full flex flex-col items-center justify-center pt-24 px-4 sm:px-6 lg:px-8">
      <div className="mb-4 text-center text-4xl md:text-6xl font-medium bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
        {locale?.title}
      </div>

      <div className="pt-16">
        <NavTab
          tabs={[
            { label: "Coco AI App", value: "app", icon: AppIcon },
            { label: "Coco AI Server", value: "server", icon: ServerIcon },
          ]}
          value="app"
          onChange={(tab) => setActiveTab(tab.value as "app" | "server")}
        />
      </div>

      <div className="text-center text-black dark:text-white text-base pt-10 flex flex-col md:flex-row md:items-center md:gap-2">
        <span>
          {locale?.time}
          {activeTab === "app" ? appPublish : serverPublish}
        </span>
        <span className="mx-2 hidden md:inline-block">|</span>
        <span>
          {locale?.version}
          {activeTab === "app" ? appVersion : serverVersion}
        </span>
        <a
          href={activeTab === "app" ? appNotes : serverNotes}
          target="_blank"
          className="text-[#14C4C9] hover:underline"
        >
          {locale?.notes}
        </a>
        <span className="mx-2 hidden md:inline-block">|</span>
        <a
          href={activeTab === "app" ? appDocs : serverDocs}
          target="_blank"
          className="text-[#14C4C9] hover:underline"
        >
          {locale?.docs}
        </a>
      </div>

      {activeTab === "app" && <AppInstall locale={locale} />}
      {activeTab === "server" && <ServerInstall locale={locale} />}
    </section>
  );
}

