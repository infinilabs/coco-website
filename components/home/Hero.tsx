"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const Hero = ({ locale, langName }: { locale: any; langName: string }) => {
  const { theme } = useTheme();

  return (
    <>
      <section
        lang={langName}
        className="w-full flex flex-col items-center justify-center pt-24 sm:px-6 lg:px-8"
      >
        <div className="text-center text-black dark:text-white text-base mb-4 font-normal">
          {locale.title1}
        </div>
        <h1 className="text-center font-bold text-3xl md:text-5xl leading-snug text-black dark:text-white mb-12">
          {locale.title2}
          <br />
          <span className="inline-block mt-2">{locale.title3}</span>
        </h1>
        <div className="flex justify-center mb-12">
          <Image
            src={
              theme === "dark"
                ? "/svg/home/input-zh.svg"
                : "/svg/home/input-light.svg"
            }
            alt="input"
            width={640}
            height={60}
          />
        </div>
        <div className="text-center text-[#666] dark:text-[#c8c8c8] text-sm max-w-2xl mx-auto mb-12">
          {locale.description}
        </div>
        <Link
          href={`/${langName}/download`}
          aria-label="download"
          className="mb-14"
        >
          {theme === "dark" ? (
            <Image
              src="/svg/home/download-zh.svg"
              alt="download"
              width={160}
              height={48}
            />
          ) : (
            <div
              className={`h-12 leading-[48px] px-8 rounded-full font-semibold text-base transition-colors text-[#04071b]`}
              style={{
                background: "linear-gradient(90deg, #F5D9FF 0%, #00FFF6 100%)",
                boxShadow: "0 2px 12px 0 #19F3FF55",
              }}
            >
              {locale.download}
            </div>
          )}
        </Link>
        <div className="max-w-7xl text-center mx-auto">
          <video width="1280" height="720" controls autoPlay muted preload="auto" playsInline className="rounded-2xl">
            <source src="/videos/preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
};

export default Hero;

