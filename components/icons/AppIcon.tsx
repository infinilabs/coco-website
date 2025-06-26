import React from "react";

interface AppIconProps {
  size?: number | string;
  color?: string;
}

const AppIcon: React.FC<AppIconProps> = ({ size = 24, color = "currentColor" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="none" />
      <g transform="translate(3, 3)" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <rect x="0" y="0" width="7" height="7" rx="1" />
        <rect x="11" y="0" width="7" height="7" rx="1" />
        <rect x="11" y="11" width="7" height="7" rx="1" />
        <rect x="0" y="11" width="7" height="7" rx="1" />
      </g>
    </svg>
  );
};

export default AppIcon;
