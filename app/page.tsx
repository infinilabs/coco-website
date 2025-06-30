"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${"en"}`);
  }, [router]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      <FaSpinner
        style={{
          fontSize: 48,
          color: "#14C4C9",
          marginBottom: 24,
          animation: "spin 1s linear infinite",
        }}
      />
      <h2 style={{ fontSize: 24, color: "#333", marginBottom: 8 }}>
        Loading...
      </h2>
      <style>
        {`
      @keyframes spin {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
      }
    `}
      </style>
    </div>
  );
}

