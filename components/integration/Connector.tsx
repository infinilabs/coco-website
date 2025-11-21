"use client";

import { defaultLocale, getDictionarySync } from "@/i18n/i18n";
import StoreListPage from "./StoreListPage";

export default function ConnectorIndex({
  lang = defaultLocale,
}: {
  lang: string;
}) {
  const dict = getDictionarySync(lang);
  const t = dict?.Integration?.connectorStore;

  return (
    <>
      <StoreListPage
        type="connector"
        lang={lang}
        texts={{
          title: t?.title,
          description: t?.description,
          search: t?.search,
          build: t?.build,
          loading: t?.loading,
          empty: t?.empty,
        }}
        iconUrl="/svg/extension/Connector.svg"
        buildUrl="https://github.com/infinilabs/coco-server"
      />
    </>
  );
}
