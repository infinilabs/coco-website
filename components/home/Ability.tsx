import Image from "next/image";

import { ALL_FEATURES } from "@/data/feature";

export default function FeatureAbility({ langName }: { langName: string }) {
  const FEATURES = ALL_FEATURES[`FEATURES_${langName.toUpperCase()}`];

  return (
    <section className="w-full flex flex-col items-center justify-center gap-20 pt-40 px-4 sm:px-6 lg:px-8">
      {FEATURES?.map((feature, index) => (
        <div
          key={feature.title + index}
          className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-14 mb-20"
        >
          <div className="flex-1 text-left">
            <div className="mb-4 text-[32px] leading-[45px] font-medium bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
              {feature.title}
            </div>
            <div className="mb-10 font-normal text-base text-[#28A3FF]">
              {feature.subtitle}
            </div>
            <div className="mb-6 font-normal text-base text-[#666] dark:text-[#C8C8C8]">
              {feature.content}
            </div>
            <div className="font-normal text-base text-[#666] dark:text-[#C8C8C8]">
              {feature.ability1} <br />
              {feature.ability2} <br />
              {feature.ability3} <br />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl p-[2px] bg-gradient-to-br from-[#d2e7ff] to-[#b6f0e7] ">
              <Image
                src={feature.imgUrl}
                alt={feature.title}
                width={720}
                height={500}
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
