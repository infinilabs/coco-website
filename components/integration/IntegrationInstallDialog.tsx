"use client";

import { getDictionarySync } from "@/i18n/i18n";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import InstallSteps from "./InstallSteps";

interface IntegrationInstallDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lang: string;
  name?: string;
  copied?: boolean;
}

export default function IntegrationInstallDialog({
  open,
  onOpenChange,
  lang,
  name,
  copied = true,
}: IntegrationInstallDialogProps) {
  const dict = getDictionarySync(lang);
  const t = dict?.Integration?.installDialog;

  const locale = {
    title: t?.title ? t.title.replace("{name}", name ?? "") : "",
    copied: t?.copied,
    next: t?.next,
    desc: t?.desc,
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[10000] bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <Dialog.Content className="fixed z-[10001] left-1/2 top-1/2 w-[92vw] max-w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-gray-200/60 dark:border-white/10 bg-[#EBF6FF] dark:bg-[#0B1020] shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=open]:zoom-in-95 data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out-0">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5">
            <Dialog.Title className="text-xl md:text-2xl font-semibold text-black dark:text-white">
              {locale.title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                aria-label="Close"
                className="rounded-full p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          {/* Body */}
          <InstallSteps
            copied={copied}
            copiedText={locale.copied ?? ""}
            nextTitle={locale.next ?? ""}
            description={locale.desc ?? ""}
            screenshotSrc="/images/integration/Install.gif"
            screenshotAlt="Coco Server"
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
