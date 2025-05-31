"use client";

import Image from "next/image";

import Header from "@/components/Header";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import Installs from "@/components/Installs";
import Connect from "@/components/Connect";
import Features from "@/components/Features";
import Searchbox from "@/components/Searchbox";

export default function Home() {

  return (
    <main className="min-h-screen bg-black">
        
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="relative z-10 bg-cover bg-center h-screen bg-[url('/images/bg.png')]">
        <div className="container mx-auto px-4 pb-16">
          <Header />

          <div className="text-center max-w-5xl mx-auto mt-10 pt-10">
            <div className="text-[#fff] mb-4">
              Where Knowledge Meets Collaboration
            </div>
            <div className="font-medium text-[32px] md:text-6xl text-white leading-[48px] md:leading-tight text-center">
              Unified enterprise search and <br/> Gen-AI assistant for modern teams
            </div>
            <div className="flex justify-center">
              <Searchbox className="w-50px"/>
            </div>
            <p className="max-w-[720px] m-auto mt-4 md:mt-6 font-normal text-sm text-[#676767] leading-[21px] text-center px-4 md:px-0">
              Coco AI is a fully open-source, cross-platform unified search and productivity tool that connects and searches across various data sources, including applications, files, Google Drive, Notion, Yuque, Hugo, and more, both local and cloud-based. By integrating with large models like DeepSeek, Coco AI enables intelligent personal knowledge management, emphasizing privacy and supporting private deployment, helping users quickly and intelligently access their information.
            </p>

            <div className="flex justify-center my-12">
              <a className="flex items-center" href="#install">
                <Image src="/svg/Download.svg" alt="" width={160} height={48} />
              </a>
            </div>
          </div>

          <div className="max-w-6xl text-center mx-auto backdrop-blur-xl rounded-2xl">
            <video controls width="100%" height="360" className="rounded-2xl">
              <source src="/videos/preview.mp4" type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>
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
