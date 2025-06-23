"use client";

import Image from "next/image";
import { useState } from "react";

import NavTab from "@/components/header/NavTab";
import { ALL_SERVER } from "@/config/server";

export default function ServerFeature({
  locale,
  langName,
}: {
  locale: any;
  langName: string;
}) {
  const [active, setActive] = useState(0);

  const SERVER = ALL_SERVER[`SERVER_${langName.toUpperCase()}`];

  return (
    <section className="w-full flex flex-col items-center pt-48 sm:px-6 lg:px-8">
      <div className="mb-4 font-medium text-[48px] leading-[67px] bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
        {locale.title}
      </div>
      <div className="mb-14 font-normal text-[16px] leading-[22px] text-white text-center max-w-4xl">
        {locale.description}
      </div>
      <a href="https://coco.rs/" className="mb-14">
        <Image
          src="/svg/home/download-zh.svg"
          alt="download"
          width={160}
          height={48}
        />
      </a>
      <div className="w-full flex justify-center mb-14">
        <div className="rounded-3xl overflow-hidden border-4 border-[#E6F0FF] bg-gradient-to-br from-[#7B61FF] via-[#7B61FF22] to-[#00E5FF22] p-2 max-w-3xl w-full">
          <Image
            src={SERVER[active].imgUrl}
            alt={SERVER[active].label}
            width={1280}
            height={720}
            className="rounded-2xl w-full h-auto"
            style={{ background: "transparent" }}
          />
        </div>
      </div>
      <div className="mb-10">
        <NavTab
          tabs={SERVER}
          value="source"
          onChange={(tab: any, index: number) => setActive(index)}
        />
      </div>
      <div className="text-gray-300 text-center text-sm min-h-[24px]">
        {SERVER[active].desc}
      </div>
    </section>
  );
}

