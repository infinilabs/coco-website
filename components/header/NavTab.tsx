"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

interface NavTabItem {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}

interface NavTabProps {
  tabs: NavTabItem[];
  value?: string;
  onChange?: (tab: NavTabItem, index: number) => void;
}

export default function NavTab({ tabs, value, onChange }: NavTabProps) {
  const { theme } = useTheme();

  const [active, setActive] = useState(tabs && tabs[0]?.value);

  const handleTabClick = (tab: NavTabItem, idx: number) => {
    setActive(tab.value);
    onChange?.(tab, idx);
    tab.onClick?.();
  };

  return (
    <div
      className={`inline-block p-[2px] rounded-[41px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]`}
    >
      <div
        className={`h-[52px] px-1 flex items-center justify-center bg-[#EBF6FF] dark:bg-[#04071B] text-white rounded-[39px]`}
      >
        {tabs.map((tab, idx) => {
          const isActive = active === tab.value;
          const Icon = tab.icon;
          return (
            <button
              key={tab.value}
              className={`relative z-10 h-12 px-4 md:px-8 flex items-center gap-1 md:gap-2 rounded-full font-semibold text-sm md:text-base transition-colors
              ${
                isActive
                  ? "text-[#04071b]"
                  : "text-black dark:text-white opacity-80 hover:opacity-100"
              }`}
              style={{
                background: isActive
                  ? "linear-gradient(90deg, #F5D9FF 0%, #00FFF6 100%)"
                  : "transparent",
                boxShadow: isActive ? "0 2px 12px 0 #19F3FF55" : "none",
              }}
              onClick={() => handleTabClick(tab, idx)}
            >
              {Icon ? (
                <Icon
                  color={
                    isActive ? "#04071b" : theme === "dark" ? "#fff" : "#04071b"
                  }
                  className={`w-5 h-5 md:w-6 md:h-6`}
                />
              ) : null}
              <span
                className={
                  isActive
                    ? "inline-block sm:inline-block"
                    : "hidden sm:inline-block"
                }
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

