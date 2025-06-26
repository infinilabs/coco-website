import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const RobotIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#FFFFFF",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="0" y="0" width="24" height="24" fill="none" />
    <g transform="translate(2, 4)" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="10 4 10 0 6 0" />
      <rect x="2" y="4" width="16" height="12" rx="2" />
      <line x1="0" y1="10" x2="2" y2="10" />
      <line x1="18" y1="10" x2="20" y2="10" />
      <line x1="13" y1="9" x2="13" y2="11" />
      <line x1="7" y1="9" x2="7" y2="11" />
    </g>
  </svg>
);

export default RobotIcon;
