import Link from "next/link";
import React from "react";

import { siteConfig } from "@/config/site";

const HeaderLinks = () => {
  const links = siteConfig.headerLinks;

  return (
    <div className="flex flex-row items-center gap-6">
      {links.map((link, index) => (
        <Link
          key={link.name + index}
          aria-label={link.name}
          href={link.href}
          target="_blank"
          rel="noopener norefferer nofollow"
          className={`flex max-w-[24px] flex-col items-center justify-center`}
        >
          {link.icon &&
            React.createElement(link.icon, {
              className: "text-lg text-[#666] dark:text-[#999]",
            })}
        </Link>
      ))}
    </div>
  );
};
export default HeaderLinks;

