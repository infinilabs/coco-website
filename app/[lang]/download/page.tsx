"use client";

import { Copy, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import NavTab from "@/components/header/NavTab";
import AppInstall from "@/components/download/AppInstall";
import ServerInstall from "@/components/download/ServerInstall";
import { defaultLocale, getDictionary } from "@/i18n/i18n";
import data from "@/public/data.json";

const appVersion = data.app;
const serverVersion = data.server;

const appPublish = data.app_publish;
const serverPublish = data.server_publish;

const appNotes = "https://github.com/infinilabs/coco-app/releases";
const serverNotes = "https://github.com/infinilabs/coco-server/releases";

const appDocs = "https://docs.infinilabs.com/coco-app/main/";
const serverDocs = "https://docs.infinilabs.com/coco-server/main/";

export default function DownloadPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const [locale, setLocale] = useState<any>();
  const [activeTab, setActiveTab] = useState<"app" | "server">("app");

  const getLocale = async () => {
    const langName = lang || defaultLocale;
    const dict = await getDictionary(langName);
    setLocale(dict.Download);
  };

  useEffect(() => {
    getLocale();
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center pt-24 px-4 sm:px-6 lg:px-8">
      <div className="mb-4 text-[56px] leading-[85px] font-medium bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
        {locale?.title}
      </div>

      <div className="pt-16">
        <NavTab
          tabs={[
            { label: "Coco AI App", value: "app" },
            { label: "Coco AI Server", value: "server" },
          ]}
          value="app"
          onChange={(tab) => setActiveTab(tab.value as "app" | "server")}
        />
      </div>

      <div className="text-black dark:text-white text-base pt-10">
        {locale?.time}
        {activeTab === "app" ? appPublish : serverPublish}
        <span className="mx-2">|</span>
        {locale?.version}
        {activeTab === "app" ? appVersion : serverVersion}
        <a
          href={activeTab === "app" ? appNotes : serverNotes}
          target="_blank"
          className="text-[#14C4C9] hover:underline ml-2.5"
        >
          {locale?.notes}
        </a>
        <span className="mx-2">|</span>
        <a
          href={activeTab === "app" ? appDocs : serverDocs}
          target="_blank"
          className="text-[#14C4C9] hover:underline"
        >
          {locale?.docs}
        </a>
      </div>

      {activeTab === "app" && <AppInstall locale={locale}/>}
      {activeTab === "server" && <ServerInstall locale={locale} />}
    </section>
  );
}

