"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { getDictionary } from "@/i18n/i18n";

interface RoadmapPageProps {
  dict: any;
  lang: string;
}

export default function RoadmapPage({ dict, lang }: RoadmapPageProps) {
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({});

  const [locale, setLocale] = useState<any>();
  const getLocale = useCallback(async () => {
    const dict = await getDictionary(lang);
    setLocale(dict.Roadmap);
  }, [lang]);

  useEffect(() => {
    getLocale();
  }, [getLocale]);

  if (!locale) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pt-24 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="mb-4 font-medium text-3xl md:text-5xl bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
          {locale.title}
        </div>
        <div className="mb-14 font-normal text-base text-black dark:text-white">
          {locale.subtitle}
        </div>

        <Link
          href={`https://github.com/infinilabs/coco-app/issues`}
          aria-label="download"
          className="mb-14 inline-block"
          target="_blank"
        >
          <div
            className={`h-12 leading-[48px] px-8 rounded-full font-semibold text-base text-[#04071b] inline-block hover:scale-105 transform transition-transform duration-200`}
            style={{
              background: "linear-gradient(90deg, #F5D9FF 0%, #00FFF6 100%)",
              boxShadow: "0 2px 12px 0 #19F3FF55",
            }}
          >
            {locale.cta}
          </div>
        </Link>
      </motion.div>

      <div className="w-full max-w-7xl mt-32">
        <div className="progress mb-40">
          <div className="">
            <div className="flex items-center gap-5 text-3xl font-medium mb-4">
              <Image
                src={locale.progressad.icon}
                alt="progress"
                width={40}
                height={40}
              />
              {locale.progressad.title}
            </div>
            <div className="text-base dark:text-[#999]">
              {locale.progressad.subTitle}
            </div>
          </div>

          {locale.progressad.content.map((item: any, index: number) => (
            <div className="mt-12" key={item.title + index}>
              <div className="flex items-center gap-5 text-xl font-medium mb-4">
                <div className="w-3 h-3 bg-[#0053FF] rounded-full"></div>
                {item.title}
              </div>
              <div className="text-base dark:text-[#999]">{item.subTitle}</div>
            </div>
          ))}
        </div>

        <div className="next mb-40">
          <div className="">
            <div className="flex items-center gap-5 text-3xl font-medium mb-4">
              <Image
                src={locale.next.icon}
                alt="progress"
                width={40}
                height={40}
              />
              {locale.next.title}
            </div>
            <div className="text-base dark:text-[#999]">
              {locale.next.subTitle}
            </div>
          </div>

          {locale.next.content.map((item: any, index: number) => (
            <div className="mt-12" key={item.title + index}>
              <div className="flex items-center gap-5 text-xl font-medium mb-4">
                <div className="w-3 h-3 bg-[#D700FF] rounded-full"></div>
                {item.title}
              </div>
              <div className="text-base dark:text-[#999]">{item.subTitle}</div>
            </div>
          ))}
        </div>

        <div className="completed mb-40">
          <div className="">
            <div className="flex items-center gap-5 text-3xl font-medium mb-4">
              <Image
                src={locale.completed.icon}
                alt="progress"
                width={40}
                height={40}
              />
              {locale.completed.title}
            </div>
            <div className="text-base dark:text-[#999]">
              {locale.completed.subTitle}
            </div>
          </div>

          {locale.completed.versionContent.map(
            (itemVersion: any, indexVersion: number) => {
              const versionKey = `${itemVersion.version}-${indexVersion}`;
              const isOpen = openStates[versionKey] || false;

              return (
                <Collapsible.Root
                  key={itemVersion.version + indexVersion}
                  className=""
                  open={isOpen}
                  onOpenChange={(open) =>
                    setOpenStates((prev) => ({ ...prev, [versionKey]: open }))
                  }
                >
                  <Collapsible.Trigger asChild>
                    <div className="flex items-center gap-2 mt-10 text-xl font-medium cursor-pointer hover:text-blue-600 transition-colors">
                      <ChevronRight
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                      {itemVersion.version}
                    </div>
                  </Collapsible.Trigger>

                  <Collapsible.Content>
                    {itemVersion.content.map((item: any, index: number) => (
                      <div className="mt-12 pl-8" key={item.title + index}>
                        <div className="flex items-center gap-5 text-xl font-medium mb-4">
                          <div className="w-3 h-3 bg-[#22D454] rounded-full"></div>
                          {item.title}
                        </div>
                        <div className="text-base dark:text-[#999]">
                          {item.subTitle}
                        </div>
                      </div>
                    ))}
                  </Collapsible.Content>
                </Collapsible.Root>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

