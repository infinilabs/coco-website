import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const DatasourceIcon: React.FC<IconProps> = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g transform="translate(2, 3)" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M4,11.0000965 L5.5,8.10009645 C5.83228802,7.44017497 6.50133987,7.01721115 7.24,7.00009645 L18,7.00009645 C18.6191913,6.99901004 19.2039687,7.2847812 19.5835739,7.77396313 C19.963179,8.26314505 20.094799,8.90056638 19.94,9.50009645 L18.4,15.5000965 C18.1707604,16.388024 17.3670212,17.0062849 16.45,17.0001425 L2,17.0001425 C0.8954305,17.0001425 0,16.104666 0,15.0000965 L0,2.00009645 C0,0.895526954 0.8954305,0 2,0 L5.9,0 C6.57966741,-0.00656712118 7.21619763,0.332413469 7.59,0.900096454 L8.4,2.10009645 C8.76992247,2.66181679 9.39741368,2.9999857 10.07,3.00009645 L16,3.00009645 C17.1045695,3.00009645 18,3.89552695 18,5.00009645 L18,7.00009645" />
    </g>
  </svg>
);

export default DatasourceIcon;
