"use client";

import React from "react";

interface ServerIconProps {
  size?: number | string;
  color?: string;
}

const ServerIcon: React.FC<ServerIconProps> = ({
  size = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="none" />
      <g
        transform="translate(2, 2)"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <rect x="0" y="0" width="20" height="8" rx="2" />
        <rect x="0" y="12" width="20" height="8" rx="2" />
        <line x1="4" y1="4" x2="4.01" y2="4" />
        <line x1="4" y1="16" x2="4.01" y2="16" />
      </g>
    </svg>
  );
};

export default ServerIcon;

