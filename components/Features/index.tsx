import { ExternalLink } from "lucide-react";
import Image from "next/image";

const FeaturesData = [
  {
    title: "Open Source, Free and Freedom",
    description:
      "Fully transparent and customizable. Build on top of COCO AI to fit your unique needs.",
    image: "/svg/source.svg",
    urlName: "GitHub",
    url: "https://github.com/infinilabs/coco-app",
  },
  {
    title: "Unified Search, Data Connected",
    description:
      "Instantly find files, messages, and data across all your apps—Google Drive, Notion, GitHub, and more. With the increasing local or cloud connectors.",
    image: "/svg/search.svg",
  },
  {
    title: "Your Personal AI Assistant",
    description:
      "Interact with your team’s knowledge base through AI-powered chat, driving faster insights and decisions.",
    image: "/svg/chat.svg",
  },
  {
    title: "Privacy First, Secure In Mind",
    description:
      "Self hosting made: Easy. Free. Secure. You can host your own COCO AI server on your own servers and connect to local LLMs. Your data stays within your environment—secure, compliant, and fully under your control.",
    image: "/svg/private.svg",
    urlName: "Coco Al server",
    url: "https://docs.infinilabs.com/coco-server/main/",
  },
];

export default function Features() {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-[140px] md:mt-[240px] font-medium text-[32px] md:text-[40px] text-white leading-[48px] md:leading-[64px] text-center">
        Everything You Need, All in One Platform
      </div>
      <div className="max-w-[720px] m-auto mt-4 md:mt-6 font-normal text-sm text-[#676767] leading-[21px] text-center">
        COCO AI delivers intelligent search, AI-driven insights, and seamless
        collaboration in one platform. Find files, chat with AI, and
        collaborate effortlessly—making every interaction faster, smarter, and
        secure.
      </div>

      <div className="mt-16 md:mt-32">
        {FeaturesData.map((feature, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={feature.title}
              className={`flex flex-col md:flex-row justify-center md:gap-40 ${
                index > 0 ? "mt-16 md:mt-32" : ""
              }`}
            >
              <div className={`${!isEven ? "md:order-2" : "md:order-1"} pb-8 md:pt-20`}>
                <h3 className="text-[28px] md:text-[32px] font-medium text-white mb-4 text-center md:text-left">
                  {feature.title}
                </h3>
                <p className="text-[#676767] text-base leading-6 max-w-[440px] text-center md:text-left">
                  {feature.description}
                </p>
                {feature.url ? (
                  <a
                    href={feature.url}
                    target="_blank"
                    className="mt-6 md:mt-10 flex items-center gap-2 cursor-pointer justify-center md:justify-start"
                  >
                    <span className="text-[#04FEF6]">{feature.urlName}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#04FEF6]" />
                  </a>
                ) : null}
              </div>
              <div className={`${!isEven ? "md:order-1" : "md:order-2"} mb-8 md:mb-0`}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={560}
                  height={320}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
