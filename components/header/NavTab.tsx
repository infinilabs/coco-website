"use client";

import { useState } from "react";

interface NavTabItem {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
}

interface NavTabProps {
  tabs: NavTabItem[];
  value?: string;
  onChange?: (tab: NavTabItem, index: number) => void;
}

export default function NavTab({
  tabs,
  value,
  onChange,
}: NavTabProps) {
  const [active, setActive] = useState(tabs[0]?.value);

  const handleTabClick = (tab: NavTabItem, idx: number) => {
    setActive(tab.value);
    onChange?.(tab, idx);
    tab.onClick?.();
  };

  return (
    <div className={`inline-block p-[2px] rounded-[41px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]`}>
      <div className={`h-[56px] px-1 flex items-center justify-center bg-[#04071B] text-white rounded-[39px]`}>
        {tabs.map((tab, idx) => {
          const isActive = active === tab.value;
          return (
            <button
              key={tab.value}
              className={`relative z-10 h-12 px-8 rounded-full font-semibold text-base transition-colors
              ${
                isActive
                  ? "text-[#04071b]"
                  : "text-white opacity-80 hover:opacity-100"
              }`}
              style={{
                background: isActive
                  ? "linear-gradient(90deg, #F5D9FF 0%, #00FFF6 100%)"
                  : "transparent",
                boxShadow: isActive ? "0 2px 12px 0 #19F3FF55" : "none",
              }}
              onClick={() => handleTabClick(tab, idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
