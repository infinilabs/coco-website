"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Searchbox from "@/components/Searchbox";

const Hero = ({ locale, langName }: { locale: any; langName: string }) => {
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
        <div className="max-w-5xl text-center font-semibold text-3xl md:text-[56px] md:leading-[85px] text-black dark:text-white md:mb-12">
          {locale.title2}
          <br />
          <div>{locale.title3}</div>
        </div>
        <div className="w-full flex justify-center">
          <Searchbox />
        </div>
        <div className="text-center text-[#666] dark:text-[#c8c8c8] text-base max-w-3xl mx-auto mb-12">
          {locale.description}
        </div>
        <Link
          href={`/${langName}/download`}
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
            loop
            muted
            preload="auto"
            playsInline
            poster="/images/home/app.png"
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

