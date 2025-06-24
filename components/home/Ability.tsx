import Image from "next/image";

import { ALL_FEATURES } from "@/config/feature";

export default function FeatureAbility({ langName }: { langName: string }) {
  const FEATURES = ALL_FEATURES[`FEATURES_${langName.toUpperCase()}`];

  return (
    <section className="w-full flex flex-col items-center justify-center gap-20 pt-40 sm:px-6 lg:px-8">
      {FEATURES?.map((feature, index) => (
        <div
          key={feature.title + index}
          className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-14 mb-20"
        >
          <div className="flex-1 text-left px-4">
            <div className="mb-4 text-[32px] leading-[45px] font-medium bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
              {feature.title}
            </div>
            <div className="mb-10 font-normal text-[16px] leading-[22px] text-[#4AF4F9]">
              {feature.subtitle}
            </div>
            <div className="mb-6 font-normal text-[16px] leading-[28px] text-[#666] dark:text-[#C8C8C8]">
              {feature.content}
            </div>
            <div className="font-normal text-[16px] leading-[28px] text-[#666] dark:text-[#C8C8C8]">
              {feature.ability1} <br />
              {feature.ability2} <br />
              {feature.ability3} <br />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#d2e7ff] to-[#b6f0e7] p-2">
              <Image
                src={feature.imgUrl}
                alt={feature.title}
                width={720}
                height={500}
                priority
                className="rounded-xl"
                style={{ background: "transparent" }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

