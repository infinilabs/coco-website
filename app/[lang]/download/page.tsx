"use client";

import { Copy, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import NavTab from "@/components/header/NavTab";
import AppInstall from "@/components/download/AppInstall";
import ServerInstall from "@/components/download/ServerInstall";
import { defaultLocale, getDictionary } from "@/i18n/i18n";

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
    <section className="w-full flex flex-col items-center justify-center pt-32 sm:px-6 lg:px-8">
      <div className="mb-4 text-[32px] leading-[45px] font-medium bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
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

      <div className="text-gray-400 text-sm pt-10">
        {locale?.time}: 2025-06-13 &nbsp;|&nbsp; {locale?.version}: V 0.5.2
        &nbsp;
        <a href="#" className="text-cyan-300 hover:underline">
          {locale?.notes}
        </a>
        &nbsp;|&nbsp;
        <a href="#" className="text-cyan-300 hover:underline">
          {locale?.docs}
        </a>
      </div>

      {activeTab === "app" && <AppInstall />}
      {activeTab === "server" && <ServerInstall locale={locale}/>}
    </section>
  );
}

