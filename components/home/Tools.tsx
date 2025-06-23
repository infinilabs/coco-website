import Image from "next/image";

import { ALL_TOOLS } from "@/config/tools";

export default function ToolsFeature({
  locale,
  langName,
}: {
  locale: any;
  langName: string;
}) {
  const TOOLS = ALL_TOOLS[`TOOLS_${langName.toUpperCase()}`];

  return (
    <section className="w-full flex flex-col items-center pt-48 sm:px-6 lg:px-8">
      <div className="mb-4 font-medium text-[48px] leading-[67px] bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
        {locale.title}
      </div>
      <div className="mb-14 font-normal text-[16px] leading-[22px] text-white">
        {locale.description}
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {TOOLS.map((item, index) => (
          <div
            key={item.title + index}
            className="bg-[#0B1020] border border-[#19F3FF22] rounded-2xl p-10 min-h-[340px] flex flex-col justify-start shadow-lg"
          >
            <div className="text-2xl font-semibold text-white mb-6">
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
                    <div className="font-medium text-white">{tool.name}</div>
                    <div className="text-gray-400 text-sm">
                      {tool.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

