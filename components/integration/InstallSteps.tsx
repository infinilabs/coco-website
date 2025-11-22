"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

type StepItem = {
  title: string;
  description?: string;
  status: "completed" | "current" | "upcoming";
};

interface InstallStepsProps {
  steps?: StepItem[];
  copied?: boolean;
  copiedText?: string;
  nextTitle?: string;
  description?: string;
  screenshotSrc: string;
  screenshotAlt?: string;
  className?: string;
}

export default function InstallSteps({
  steps,
  copied = false,
  copiedText = "",
  nextTitle = "",
  description = "",
  screenshotSrc,
  screenshotAlt = "screenshot",
  className,
}: InstallStepsProps) {
  const items: StepItem[] =
    steps && steps.length
      ? steps
      : [
          { title: copiedText, status: copied ? "completed" : "upcoming" },
          { title: nextTitle, description, status: "current" },
        ];

  return (
    <div className={["px-6 pb-6", className].filter(Boolean).join(" ")}>
      <ol className="space-y-1">
        {items.map((step, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={idx} className="flex items-start">
              <div className="relative flex flex-col items-center mr-3">
                {step.status === "completed" ? (
                  <CheckCircle2
                    className="h-6 w-6 text-[#20B759]"
                    aria-hidden="true"
                  />
                ) : step.status === "current" ? (
                  <span
                    className="relative inline-block h-6 w-6 mt-[2px]"
                    aria-hidden="true"
                  >
                    <span className="absolute inset-0 rounded-full border-2 border-gray-400 dark:border-gray-300" />
                    <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#20B759]" />
                  </span>
                ) : (
                  <span
                    className="inline-block h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600 mt-[3px]"
                    aria-hidden="true"
                  />
                )}

                {!isLast && (
                  <span
                    className={`mt-1 inline-block w-[2px] h-8 rounded ${
                      step.status === "completed"
                        ? "bg-[#20B759]"
                        : "bg-gray-300 dark:bg-gray-700"
                    }`}
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="flex-1">
                <div
                  className={
                    step.status === "completed"
                      ? "text-emerald-600 dark:text-emerald-400 font-medium"
                      : step.status === "current"
                      ? "text-black dark:text-white font-semibold"
                      : "text-[#56657E] dark:text-[#C8C8C8]"
                  }
                >
                  {step.title}
                </div>
                {step.description && (
                  <p className="mt-2 text-sm md:text-base text-[#56657E] dark:text-[#C8C8C8]">
                    {step.description}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-4 rounded-xl overflow-hidden border border-gray-200/60 dark:border-white/10">
        <Image
          src={screenshotSrc}
          alt={screenshotAlt}
          width={1200}
          height={800}
          className="w-full h-auto"
          priority={false}
        />
      </div>
    </div>
  );
}
