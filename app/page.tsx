"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { getLangFromPath } from "@/lib/utils";

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    const lang = getLangFromPath();
    router.replace(`/${lang}`);
  }, [router]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src="/svg/Loading.svg"
        alt="Loading"
        width={128}
        height={128}
        priority
      />
    </div>
  );
}

