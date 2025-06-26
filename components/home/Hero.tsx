"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Searchbox from "@/components/Searchbox";

const Hero = ({ locale, langName }: { locale: any; langName: string }) => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <section
        lang={langName}
        className="w-full flex flex-col items-center justify-center pt-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center text-black dark:text-white text-base mb-4 font-normal">
          {locale.title1}
        </div>
        <h1 className="max-w-4xl text-center font-bold text-3xl md:text-5xl leading-snug text-black dark:text-white mb-12">
          {locale.title2}
        </h1>
        <div className="w-full flex justify-center">
          <Searchbox />
        </div>
        <div className="text-center text-[#666] dark:text-[#c8c8c8] text-base max-w-2xl mx-auto mb-12">
          {locale.description}
        </div>
        <Link
          href={`/download?lang=${langName}`}
          aria-label="download"
          className="mb-14"
        >
          <div
            className={`h-12 leading-[48px] px-8 rounded-full font-semibold text-base transition-colors text-[#04071b]`}
            style={{
              background: "linear-gradient(90deg, #F5D9FF 0%, #00FFF6 100%)",
              boxShadow: "0 2px 12px 0 #19F3FF55",
            }}
          >
            {locale.download}
          </div>
        </Link>
        <div className="max-w-7xl text-center mx-auto">
          <video
            width="1280"
            height="720"
            controls
            autoPlay
            muted
            preload="auto"
            playsInline
            className="rounded-2xl"
          >
            <source src="/videos/preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
};

export default Hero;

