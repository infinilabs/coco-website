import Image from "next/image";

import { ALL_TOOLS } from "@/data/tools";

export default function ToolsFeature({
  locale,
  langName,
}: {
  locale: any;
  langName: string;
}) {
  const TOOLS = ALL_TOOLS[`TOOLS_${langName.toUpperCase()}`];

  return (
    <section className="w-full flex flex-col items-center pt-48 px-4 sm:px-6 lg:px-8">
      <div className="mb-4 text-center font-medium text-3xl md:text-5xl bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
        {locale.title}
      </div>
      <div className="mb-14 font-normal text-base text-black dark:text-white">
        {locale.description}
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {TOOLS.map((item, index) => (
          <div
            key={item.title + index}
            className="p-[2px] rounded-[16px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]"
          >
            <div className="h-full bg-[#EBF6FF] dark:bg-[#0B1020] rounded-2xl p-10 min-h-[340px] flex flex-col justify-start shadow-lg">
              <div className="text-2xl font-semibold text-black dark:text-white mb-6">
                {item.title}
              </div>
              <div className="flex flex-col gap-6">
                {item.tool.map((tool, idx) => (
                  <div key={tool.name + idx} className="flex items-start gap-3">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={24}
                      height={24}
                      priority
                    />
                    <div>
                      <div className="font-medium text-black dark:text-white">
                        {tool.name}
                      </div>
                      <div className="text-[#9696B4] text-sm">
                        {tool.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

