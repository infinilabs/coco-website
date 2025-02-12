import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Installs() {
  return (
    <div id="install" className="container mx-auto px-4">
      <div className="mt-[130px] font-medium text-[32px] md:text-[40px] text-white leading-[48px] md:leading-[64px] text-center">
        Installs Everywhere
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button className="px-6 py-2 bg-[#04FEF6] text-[#333] rounded-full">
          Download
        </button>
        {/* <button className="px-6 py-2 bg-transparent text-white rounded-full">
            Quick start
          </button> */}
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8 md:mt-16">
        <div className="bg-[#0C1015] rounded-2xl p-6 w-full md:w-[31%]">
          <div className="flex items-center gap-2 mb-6">
            <Image src="/svg/macos.svg" alt="macOS" width={24} height={24} />
            <span className="font-medium text-white text-xl">macOS</span>
          </div>
          <div className="space-y-4">
            <a
              href="https://release.infinilabs.com/coco/app/stable/Coco%20AI_0.1.0_aarch64.dmg.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#676767] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">Apple Silicon</span>
            </a>
            <a
              href="https://release.infinilabs.com/coco/app/stable/Coco%20AI_0.1.0_universal.dmg.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#676767] cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">Intel Mac</span>
            </a>

            <div className="flex items-center gap-2 text-[#676767] cursor-pointer">
              <Image src="/svg/app-store.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">App Store</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#04FEF6]" />
            </div>
          </div>
        </div>

        <div className="bg-[#0C1015] rounded-2xl p-6 w-full md:w-[31%]">
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="/svg/windows11.svg"
              alt="Windows"
              width={24}
              height={24}
            />
            <span className="font-medium text-white text-xl">Windows</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#676767] cursor-pointer">
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">32-bit</span>
            </div>
            <div className="flex items-center gap-2 text-[#676767] cursor-pointer">
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">64-bit</span>
            </div>
            <div className="flex items-center gap-2 text-[#676767] cursor-pointer">
              <Image src="/svg/m_store.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">Microsoft Store</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#04FEF6]" />
            </div>
          </div>
        </div>

        <div className="bg-[#0C1015] rounded-2xl p-6 w-full md:w-[31%]">
          <div className="flex items-center gap-2 mb-6">
            <Image src="/svg/linux.svg" alt="Linux" width={24} height={24} />
            <span className="font-medium text-white text-xl">Linux</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#676767] cursor-pointer">
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">Amd64</span>
            </div>
            <div className="flex items-center gap-2 text-[#676767] cursor-pointer">
              <Image src="/svg/down.svg" alt="" width={16} height={16} />
              <span className="text-[#04FEF6]">arm64</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
