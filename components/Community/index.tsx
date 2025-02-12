import { useState, useEffect } from "react";
import Image from "next/image";

import LinearGradientBtn from "@/components/LinearGradientBtn";
import SubscriptionInput from "@/components/SubscriptionInput";
import {
  GithubStarPrefixKey,
  localStorageGetWithTTL,
  localStorageSetWithTTL,
} from "@/lib/utils";

export default function Community() {
  const [githubStars, setGithubStars] = useState<string>("Star");

  const fetchGithubStars = async () => {
      const repoStarKey = `${GithubStarPrefixKey}infinilabs`;
      const cachedStars = localStorageGetWithTTL(repoStarKey);
  
      if (cachedStars) {
        setGithubStars(cachedStars);
        return;
      }
  
      try {
        const response = await fetch('https://api.github.com/repos/infinilabs/coco-app');
        const data = await response.json();
        
        if (data.stargazers_count) {
          const starCount = data.stargazers_count.toString();
          setGithubStars(starCount);
          localStorageSetWithTTL(repoStarKey, starCount, 3600000);
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stars:', error);
        setGithubStars('Star');
      }
    };
  
    useEffect(() => {
      fetchGithubStars();
    }, []);

  return (
    <div
      className="container m-auto  text-center section-community relative p-4 pt-[140px]"
    >
      <div className="font-normal text-[40px] text-white leading-[60px]">
        Join Our Community
      </div>
      <div className="font-normal text-[14px] text-white leading-[24px] mt-6">
        Get the latest updates and discuss with other users.
      </div>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <div className="rounded-lg bg-gray-900/70 py-10 px-6 flex flex-col justify-around items-start gap-4 sm:px-10">
          <div className="text-gray-400 font-medium text-base">
            Star on GitHub
          </div>
          <a href="https://github.com/infinilabs/coco-app" target={"_blank"}>
            <LinearGradientBtn>
              <div className="flex justify-start items-center gap-2 px-2 min-w-20">
                <Image
                  src="/svg/github.svg"
                  width={18}
                  height={18}
                  alt="github"
                />
                <span className="text-yellow-200 text-sm">{githubStars}</span>
              </div>
            </LinearGradientBtn>
          </a>
        </div>
        <div className="rounded-lg bg-gray-900/70 py-10 px-6 flex flex-col justify-around items-start gap-4 sm:px-10">
          <div className="text-gray-400 font-medium text-base">
            Join the discussion
          </div>
          <a href="https://discord.com/invite/4tKTMkkvVX" target={"_blank"}>
            <LinearGradientBtn>
              <div className="flex justify-start items-center gap-2 px-2 min-w-20">
                <Image
                  src="/svg/discord.svg"
                  alt="discord"
                  width={18}
                  height={18}
                />
                <span className="text-yellow-200 text-sm">Discord</span>
              </div>
            </LinearGradientBtn>
          </a>
        </div>
        <div className="rounded-lg bg-gray-900/70 py-10 px-6 col-span-2 flex flex-col justify-center items-center gap-4 sm:px-10 sm:items-start">
          <div className="text-gray-400 font-medium text-base">
            Join the occasional newsletter
          </div>
          <SubscriptionInput />
        </div>
      </div>
    </div>
  );
}
