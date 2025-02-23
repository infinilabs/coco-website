import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container m-auto mt-[240px] px-4">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-0 pb-6 border-b border-b-[#2D2D2D]">
        <div className="flex items-center">
          <Image src="/svg/Coco_logo.svg" alt="Coco" width={127} height={40} />
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/infinilabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#676767] hover:text-[#04FEF6] transition-colors"
          >
            <Image src="/svg/github.svg" alt="Github" width={20} height={20} />
          </a>
          <a
            href="https://x.com/infinilabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#676767] hover:text-[#04FEF6] transition-colors"
          >
            <Image
              src="/svg/twitter.svg"
              alt="Twitter"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://discord.com/invite/4tKTMkkvVX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#676767] hover:text-[#04FEF6] transition-colors"
          >
            <Image
              src="/svg/discord.svg"
              alt="Discord"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0 mt-7 pb-10">
        <div className="text-[#9F9FAC] text-sm order-2 md:order-1">
          Copyright © {new Date().getFullYear()} Coco AI.
        </div>
        <div className="flex items-center gap-2 order-1 md:order-2">
          <a
            href="#/terms"
            className="text-[#9F9FAC] hover:text-[#04FEF6] transition-colors"
          >
            Terms
          </a>
          <span className="text-[#9F9FAC]">|</span>
          <a
            href="/privacy"
            className="text-[#9F9FAC] hover:text-[#04FEF6] transition-colors"
          >
            Privacy
          </a>
          <span className="text-[#9F9FAC]">|</span>
          <a
            href="#/cookies"
            className="text-[#9F9FAC] hover:text-[#04FEF6] transition-colors"
          >
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
