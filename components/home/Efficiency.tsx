import Image from "next/image";

import { ALL_EFFICIENCY } from "@/data/efficiency";

export default function EfficiencyFeatures({
  locale,
  langName,
}: {
  locale: any;
  langName: string;
}) {
  const EFFICIENCY = ALL_EFFICIENCY[`EFFICIENCY_${langName.toUpperCase()}`];

  return (
    <section className="w-full flex flex-col items-center pt-28 md:pt-48 px-4 sm:px-6 lg:px-8">
      <div className="mb-4 font-medium text-3xl md:text-5xl bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
        {locale.title}
      </div>
      <div className="mb-14 font-normal text-base text-black dark:text-white">
        {locale.description}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-7xl">
        {EFFICIENCY?.map((f, i) => (
          <div
            key={f.title + i}
            className="p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]"
          >
            <div className="h-full bg-[#EBF6FF] dark:bg-[#04071B] rounded-[14px] p-8">
              <div className="mb-5">
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={36}
                  height={36}
                  priority
                />
              </div>
              <div className="mb-5 font-medium text-[32px] leading-[45px] text-black dark:text-white">
                {f.title}
              </div>
              <div className="font-normal text-base text-[#9696B4]">
                {f.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

