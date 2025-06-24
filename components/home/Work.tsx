"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import { ALL_WORK } from "@/data/work";

export default function WorkFeature({
  locale,
  langName,
}: {
  locale: any;
  langName: string;
}) {
  const { theme } = useTheme();

  const WORK = ALL_WORK[`WORK_${langName.toUpperCase()}`];

  return (
    <section className="w-full flex flex-col items-center pt-48 sm:px-6 lg:px-8">
      <div className="mb-4 font-medium text-[48px] leading-[67px] bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
        {locale.title}
      </div>
      <div className="mb-14 font-normal text-[16px] leading-[22px] text-black dark:text-white">
        {locale.description}
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 px-4">
        {WORK.map((f, i) => (
          <div
            key={f.name + i}
            className="bg-[#EBF6FF] dark:bg-[#0B1020] border border-[#19F3FF22] rounded-xl p-6 min-h-[120px] flex flex-col shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                <Image
                  src={f.avatar}
                  alt={f.name}
                  width={36}
                  height={36}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-black dark:text-white font-medium text-base">
                  {f.name}
                </div>
                <div className="text-[#9696B4] text-xs">{f.role}</div>
              </div>
            </div>
            <div className="text-black dark:text-white text-sm">
              {f.content}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-5xl bg-[#EBF6FF] dark:bg-[#0B1020] border border-[#19F3FF22] rounded-2xl p-0 md:p-8 flex flex-col items-center shadow-lg">
        <div className="mb-4 text-center font-medium text-[48px] leading-[67px] bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
          {locale.title2}
        </div>
        <a href="#" target="_blank">
          <Image
            src={
              theme === "dark" ? locale.btnImg : "/svg/home/work-en-light.svg"
            }
            alt={locale.title2}
            width={160}
            height={48}
            className="rounded-xl"
            style={{ background: "transparent" }}
          />
        </a>
        <div className="w-full flex justify-center pb-8">
          <Image
            src={
              theme === "dark"
                ? "/svg/home/ai-power.svg"
                : "/svg/home/ai-power-light.svg"
            }
            alt="AI Power"
            width={1178}
            height={403}
            className="rounded-xl"
            style={{ background: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
}

