"use client";

import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";

import NavTab from "@/components/header/NavTab";
import { ALL_SERVER } from "@/data/server";

export default function ServerFeature({
  locale,
  langName,
}: {
  locale: any;
  langName: string;
}) {
  const { theme } = useTheme();

  const [active, setActive] = useState(0);

  const SERVER = ALL_SERVER[`SERVER_${langName.toUpperCase()}`];

  return (
    <section className="w-full flex flex-col items-center pt-48 sm:px-6 lg:px-8">
      <div className="mb-4 text-center font-medium text-[48px] leading-[67px] bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
        {locale.title}
      </div>
      <div className="mb-14 font-normal text-[16px] leading-[22px] text-black dark:text-white text-center max-w-4xl">
        {locale.description}
      </div>
      <a href="https://coco.rs/" className="mb-14">
        {theme === "dark" ? (
          <Image
            src="/svg/home/download-zh.svg"
            alt="download"
            width={160}
            height={48}
          />
        ) : (
          <div
            className={`h-12 leading-[48px] px-8 rounded-full font-semibold text-base transition-colors text-[#04071b]`}
            style={{
              background: "linear-gradient(90deg, #F5D9FF 0%, #00FFF6 100%)",
              boxShadow: "0 2px 12px 0 #19F3FF55",
            }}
          >
            {locale.demo}
          </div>
        )}
      </a>
      <div className="w-full flex justify-center mb-14 rounded-[16px] p-[2px] bg-gradient-to-br from-[#7B61FF] via-[#7B61FF22] to-[#00E5FF22]">
        <div className="rounded-[14px] overflow-hidden max-w-7xl w-full">
          <video width="1280" height="720" controls preload="none">
            <source src={SERVER[active].videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="mb-10">
        <NavTab
          tabs={SERVER}
          value="source"
          onChange={(tab: any, index: number) => setActive(index)}
        />
      </div>
      <div className="text-[#666] dark:text-[#aeaeae] text-center text-sm min-h-[24px]">
        {SERVER[active].desc}
      </div>
    </section>
  );
}

