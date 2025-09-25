"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  variant?: "default" | "compact" | "large";
  size?: "sm" | "md" | "lg";
  lang?: string;
}

export default function NavTab({
  tabs,
  value,
  onChange,
  variant = "default",
  size = "md",
  lang = "en",
}: NavTabProps) {
  const { theme } = useTheme();

  const [active, setActive] = useState(tabs && tabs[0]?.value);
  useEffect(() => {
    if (value) setActive(value);
  }, [value]);

  const handleTabClick = (
    tab: NavTabItem,
    idx: number,
    isExternal: boolean
  ) => {
    !tab.external && !isExternal && setActive(tab.value);
    onChange?.(tab, idx);
    tab.onClick?.();
  };

  const getContainerStyles = () => {
    const baseStyles =
      "flex items-center justify-center bg-[#EBF6FF] dark:bg-[#04071B] text-white rounded-[39px] min-w-fit";

    const variants = {
      default: "h-[52px] px-0.5",
      compact: "h-[32px] px-0.5",
      large: "h-[64px] px-0.5",
    };

    return `${baseStyles} ${variants[variant]}`;
  };

  const getTabItemStyles = (isActive: boolean) => {
    const baseStyles =
      "relative z-10 h-full flex items-center justify-center rounded-full font-semibold transition-colors whitespace-nowrap";

    const variants = {
      default: {
        padding: "px-4 md:px-8",
        gap: "gap-1 md:gap-2",
        text: "text-sm md:text-base",
      },
      compact: {
        padding: "px-2 md:px-4",
        gap: "gap-2",
        text: "text-xs md:text-sm",
      },
      large: {
        padding: "px-6 md:px-10",
        gap: "gap-2 md:gap-3",
        text: "text-base md:text-lg",
      },
    };

    const colors = isActive
      ? "text-[#04071b]"
      : "text-black dark:text-white opacity-80 hover:opacity-100";

    const variantStyles = variants[variant];

    return `${baseStyles} ${variantStyles.padding} ${variantStyles.gap} ${variantStyles.text} ${colors}`;
  };

  const getIconStyles = () => {
    const variants = {
      default: "w-5 h-5 md:w-6 md:h-6",
      compact: "w-4 h-4 md:w-5 md:h-5",
      large: "w-6 h-6 md:w-7 md:h-7",
    };

    return variants[variant];
  };

  const getTextStyles = (isActive: boolean) => {
    const variants = {
      default: "inline-block whitespace-nowrap",
      compact: isActive
        ? "inline-block whitespace-nowrap"
        : "hidden md:inline-block whitespace-nowrap",
      large: "inline-block whitespace-nowrap",
    };

    return variants[variant];
  };

  return (
    <div className="inline-block p-[2px] rounded-[41px] bg-gradient-to-br from-[#5E85FF33] to-[#49FFF333]">
      <div className={getContainerStyles()}>
        {tabs?.map((tab, idx) => {
          const isActive = active === tab.value;
          const Icon = tab.icon;

          const commonProps = {
            className: getTabItemStyles(isActive),
            style: {
              background: isActive
                ? "linear-gradient(90deg, #F5D9FF 0%, #00FFF6 100%)"
                : "transparent",
              boxShadow: isActive ? "0 2px 12px 0 #19F3FF55" : "none",
            },
            onClick: () =>
              handleTabClick(tab, idx, tab.href?.startsWith("http") || false),
          };

          const content = (
            <>
              {Icon ? (
                <Icon
                  color={
                    isActive ? "#04071b" : theme === "dark" ? "#fff" : "#04071b"
                  }
                  className={getIconStyles()}
                />
              ) : null}
              <span className={getTextStyles(isActive)}>{tab.label}</span>
            </>
          );

          return tab.href ? (
            <Link
              key={tab.value}
              {...commonProps}
              href={
                tab.href?.startsWith("http") ? tab.href : `/${lang}${tab.href}`
              }
              target={tab.external ? "_blank" : "_self"}
            >
              {content}
            </Link>
          ) : (
            <button key={tab.value} {...commonProps}>
              {content}
            </button>
          );
        })}
      </div>
    </div>
  );
}
