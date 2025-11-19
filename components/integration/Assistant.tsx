"use client";

import { defaultLocale, getDictionarySync } from "@/i18n/i18n";
import StoreListPage from "./StoreListPage";

export default function AssistantIndex({
  lang = defaultLocale,
}: {
  lang: string;
}) {
  const dict = getDictionarySync(lang);
  const t = dict?.Integration?.connectorStore;

  return (
    <>
      <StoreListPage
        type="assistant"
        lang={lang}
        texts={{
          title: t?.title,
          description: t?.description,
          search: t?.search,
          build: t?.build,
          loading: t?.loading,
          empty: t?.empty,
        }}
        iconUrl="/svg/extension/Assistant.svg"
        buildUrl="https://github.com/infinilabs/coco-server"
      />
    </>
  );
}
