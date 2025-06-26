import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const LLMSIcon: React.FC<IconProps> = ({
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
    <g transform="translate(3, 2)" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M18,5.99794919 C17.9992679,5.2841508 17.6181681,4.6248482 17,4.26794919 L10,0.267949192 C9.38119785,-0.0893163975 8.61880215,-0.0893163975 8,0.267949192 L1,4.26794919 C0.38183192,4.6248482 0.00073214874,5.2841508 0,5.99794919 L0,13.9979492 C0.00073214874,14.7117476 0.38183192,15.3710502 1,15.7279492 L8,19.7279492 C8.61880215,20.0852148 9.38119785,20.0852148 10,19.7279492 L17,15.7279492 C17.6181681,15.3710502 17.9992679,14.7117476 18,13.9979492 L18,5.99794919 Z" />
      <polyline points="0.3 4.99794919 9 9.99794919 17.7 4.99794919" />
      <line x1="9" y1="19.9979492" x2="9" y2="9.99794919" />
    </g>
    <rect x="0" y="0" width="24" height="24" fill="none" />
  </svg>
);

export default LLMSIcon;
