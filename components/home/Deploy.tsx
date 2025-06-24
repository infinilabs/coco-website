import Image from "next/image";

import { ALL_DEPLOY } from "@/config/deploy";

export default function DeployFeature({
  locale,
  langName,
}: {
  locale: any;
  langName: string;
}) {
  const DEPLOY = ALL_DEPLOY[`DEPLOY_${langName.toUpperCase()}`];

  return (
    <section className="w-full flex flex-col items-center pt-48 sm:px-6 lg:px-8">
      <div className="mb-4 text-center font-medium text-[48px] leading-[67px] bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
        {locale.title}
      </div>
      <div className="mb-14 text-center font-normal text-[16px] leading-[22px] text-black dark:text-white">
        {locale.description}
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {DEPLOY.map((item, index) => (
          <div
            key={item.title + index}
            className="bg-[#EBF6FF] dark:bg-[#0B1020] border border-[#19F3FF22] rounded-2xl p-10 min-h-[160px] flex flex-col justify-start shadow-lg"
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={item.iconWidth}
              height={item.iconHeight}
              priority
              className="mb-3"
            />
            <div className="mb-5 text-xl font-semibold text-black dark:text-white">
              {item.title}
            </div>
            <div className="text-[#9696B4] text-sm">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

