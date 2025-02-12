"use client";

import { useState } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import Installs from "@/components/Installs";
import Connect from "@/components/Connect";
import Features from "@/components/Features";

export default function Home() {
  const [isChat, setIsChat] = useState(false);

  const chatOrSearch = () => {
    setIsChat((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="relative z-10 bg-cover bg-center h-screen bg-[url('/images/bg.png')]">
        <div className="container mx-auto px-4 pb-16">
          <Header />

          <div className="text-center max-w-3xl mx-auto my-12">
            <Image
              src="/images/slogan.png"
              alt="Coco slogan"
              width={836}
              height={184}
              priority
            />
            <p className="text-lg text-[#676767] my-8">
Coco AI is a fully open-source, cross-platform unified search and productivity tool that connects and searches across various data sources, including applications, files, Google Drive, Notion, Yuque, Hugo, and more, both local and cloud-based. By integrating with large models like DeepSeek, Coco AI enables intelligent personal knowledge management, emphasizing privacy and supporting private deployment, helping users quickly and intelligently access their information.
            </p>

            <div className="flex justify-center mt-10">
              <a className="flex items-center" href="#install">
                <Image src="/svg/Download.svg" alt="" width={160} height={48} />
              </a>
            </div>
          </div>

          <div className="max-w-2xl mx-auto backdrop-blur-xl rounded-2xl">
            <div className="relative mb-6">
              {isChat ? (
                <Image
                  src="/images/chat.png"
                  alt="Coco chat"
                  width={776}
                  height={513}
                  priority
                />
              ) : (
                <Image
                  src="/images/Search.png"
                  alt="Coco Search"
                  width={776}
                  height={513}
                  priority
                />
              )}
              <div
                className="absolute top-16 right-7 cursor-pointer"
                onClick={chatOrSearch}
              >
                {isChat ? (
                  <Image
                    src="/images/chat-button.png"
                    alt="Coco chat-button"
                    width={68}
                    height={22}
                    priority
                  />
                ) : (
                  <Image
                    src="/images/search-button.png"
                    alt="Coco search-button"
                    width={68}
                    height={22}
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Features />

      <Connect />

      <Installs />

      <Community />

      <Footer />
    </main>
  );
}
