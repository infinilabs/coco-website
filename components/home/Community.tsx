"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import LinearGradientBtn from "@/components/LinearGradientBtn";
import SubscriptionInput from "@/components/SubscriptionInput";
import {
  GithubStarPrefixKey,
  localStorageGetWithTTL,
  localStorageSetWithTTL,
} from "@/lib/utils";

export default function Community({
  locale,
  langName,
}: {
  locale: any;
  langName: string;
}) {
  const { theme } = useTheme();

  const [githubStars, setGithubStars] = useState<string>("Star");

  const fetchGithubStars = async () => {
    const repoStarKey = `${GithubStarPrefixKey}infinilabs`;
    const cachedStars = localStorageGetWithTTL(repoStarKey);

    if (cachedStars) {
      setGithubStars(cachedStars);
      return;
    }

    try {
      const response = await fetch(
        "https://api.github.com/repos/infinilabs/coco-app"
      );
      const data = await response.json();

      if (data.stargazers_count) {
        const starCount = data.stargazers_count.toString();
        setGithubStars(starCount);
        localStorageSetWithTTL(repoStarKey, starCount, 3600000);
      }
    } catch (error) {
      console.error("Failed to fetch GitHub stars:", error);
      setGithubStars("Star");
    }
  };

  useEffect(() => {
    fetchGithubStars();
  }, []);

  return (
    <div className="container m-auto text-center section-community relative pt-48 sm:px-6 lg:px-8">
      <div className="mb-4 font-medium text-[48px] leading-[67px] bg-gradient-to-r from-[#843DFF] to-[#00CEFF] bg-clip-text text-transparent">
        {locale.title}
      </div>
      <div className="mb-14 font-normal text-[16px] leading-[22px] text-white">
        {locale.description}
      </div>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <div className="rounded-lg bg-[#EBF6FF] dark:bg-[#04071B] py-10 px-6 flex flex-col justify-around items-start gap-4 sm:px-10">
          <div className="text-black dark:text-white font-medium text-base">
            {locale.cardName1}
          </div>
          <a href="https://github.com/infinilabs/coco-app" target={"_blank"}>
            <LinearGradientBtn>
              <div className="flex justify-start items-center gap-2 px-2 min-w-20">
                <Image
                  src={
                    theme === "dark"
                      ? "/svg/github.svg"
                      : "/svg/github-light.svg"
                  }
                  width={18}
                  height={18}
                  alt="github"
                />
                <span className="text-black dark:text-yellow-200 text-sm">
                  {githubStars}
                </span>
              </div>
            </LinearGradientBtn>
          </a>
        </div>
        <div className="rounded-lg bg-[#EBF6FF] dark:bg-[#04071B] py-10 px-6 flex flex-col justify-around items-start gap-4 sm:px-10">
          <div className="text-black dark:text-white font-medium text-base">
            {locale.cardName2}
          </div>
          <a href="https://discord.com/invite/4tKTMkkvVX" target={"_blank"}>
            <LinearGradientBtn>
              <div className="flex justify-start items-center gap-2 px-2">
                <Image
                  src={
                    theme === "dark"
                      ? "/svg/discord.svg"
                      : "/svg/discord-light.svg"
                  }
                  alt="discord"
                  width={18}
                  height={18}
                  className="h-auto"
                />
                <span className="text-black dark:text-yellow-200 text-sm">
                  Discord
                </span>
              </div>
            </LinearGradientBtn>
          </a>
        </div>
        <div className="rounded-lg bg-[#EBF6FF] dark:bg-[#04071B] py-10 px-6 col-span-2 flex flex-col justify-center items-center gap-4 sm:px-10 sm:items-start">
          <div className="text-black dark:text-white font-medium text-base">
            {locale.cardName3}
          </div>
          <SubscriptionInput />
        </div>
      </div>
    </div>
  );
}

