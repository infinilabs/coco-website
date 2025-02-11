"use client";

import { useState } from "react";
import Image from "next/image";

import Header from "@/components/Header";

export default function Home() {
  const [isChat, setIsChat] = useState(false);

  const chatOrSearch = () => {
    setIsChat((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 pb-16 bg-[url('/images/bg.png')]">
        <Header />

        <div className="flex justify-center items-center mb-8 mt-12">
          <Image
            src="/images/logo.png"
            alt="Coco logo"
            width={58}
            height={42}
            priority
          />
        </div>

        <div className="text-center max-w-3xl mx-auto mt-14 mb-12">
          <Image
            src="/images/slogan.png"
            alt="Coco slogan"
            width={836}
            height={184}
            priority
          />
          <p className="text-lg text-gray-400 mt-6 mb-8">
            Coco AI unifies all your enterprise applications and data—Google
            Workspace, Dropbox, GitHub, and more—into one powerful search and
            Gen-AI chat platform.
            <br />
            Instantly access and interact with your team’s unique knowledge,
            driving collaboration and insights across your data.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C1C1C] border border-[#2C2C2C] text-white hover:bg-[#2C2C2C] transition-colors">
                <Image
                  src="/images/apple.svg"
                  alt="macOS"
                  width={20}
                  height={20}
                />
                <span>macOS</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-full bg-[#1C1C1C] border border-[#2C2C2C] rounded-lg py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-[#2C2C2C] text-sm"
                >
                  Apple Silicon
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-[#2C2C2C] text-sm"
                >
                  Intel Mac
                </a>
              </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C1C1C] border border-[#2C2C2C] text-white hover:bg-[#2C2C2C] transition-colors">
              <Image
                src="/images/windows.svg"
                alt="Windows"
                width={20}
                height={20}
              />
              <span>Windows</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C1C1C] border border-[#2C2C2C] text-white hover:bg-[#2C2C2C] transition-colors">
              <Image
                src="/images/linux.svg"
                alt="Linux"
                width={20}
                height={20}
              />
              <span>Linux</span>
            </button>
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

        <div className="mt-28 flex justify-center text-white text-opacity-60">
          ©2024 INFINI Labs, All Rights Reserved.
        </div>
      </div>
    </main>
  );
}
