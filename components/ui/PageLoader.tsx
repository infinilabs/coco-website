"use client";

import Image from "next/image";

export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Image
        src="/svg/Loading.svg"
        alt="Loading"
        width={128}
        height={128}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}