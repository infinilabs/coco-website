"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

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
    <section className="w-full flex flex-col items-center pt-48 px-4 sm:px-6 lg:px-8">
      <div className="mb-4 text-center font-medium text-3xl md:text-5xl bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
        {locale.title}
      </div>
      <div className="mb-14 font-normal text-base text-black dark:text-white">
        {locale.description}
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {WORK.map((f, i) => (
          <div
            key={f.name + i}
            className="p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]"
          >
            <div className="h-full bg-[#EBF6FF] dark:bg-[#0B1020] rounded-xl p-6 min-h-[120px] flex flex-col shadow-lg">
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
          </div>
        ))}
      </div>
      <div className="p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
        <div className="h-full w-full max-w-7xl bg-[#EBF6FF] dark:bg-[#0B1020] rounded-2xl p-0 md:p-8 flex flex-col items-center shadow-lg">
          <div className="mb-4 mx-4 text-center font-medium text-3xl md:text-5xl bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
            {locale.title2}
          </div>
          <Link href={`/download?lang=${langName}`} aria-label="now">
            <div
              className={`h-12 leading-[48px] px-8 rounded-full font-semibold text-base transition-colors text-[#04071b]`}
              style={{
                background: "linear-gradient(90deg, #F5D9FF 0%, #00FFF6 100%)",
                boxShadow: "0 2px 12px 0 #19F3FF55",
              }}
            >
              {locale.now}
            </div>
          </Link>
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
      </div>
    </section>
  );
}

