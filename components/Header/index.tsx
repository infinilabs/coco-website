"use client"

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Download } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between items-center py-4 px-4 md:px-40">
        <div className="flex items-center">
          <Image src="/svg/Coco_logo.svg" alt="Coco" width={127} height={40} />
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a
            href="#install"
            className="text-white hover:text-gray-300 transition-colors"
          >
             <Download />
          </a>
          <a
            href="https://github.com/infinilabs/coco-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="mx-auto"
              src="/images/Github.png"
              alt="Coco Github"
              width={148}
              height={50}
              priority
            />
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#1C1C1C] px-8 py-4 md:hidden z-50">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <Image src="/svg/Coco_logo.svg" alt="Coco" width={127} height={40} />
            </div>
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-8 mt-10">
            <a
              href="https://docs.infinilabs.com/coco-server/main/"
              className="text-white text-xl hover:text-gray-300 transition-colors"
              target="_blank"
            >
              Documentation
            </a>
            <a
              href="https://github.com/infinilabs/coco-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-gray-300 transition-colors"
            >
              Github
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
