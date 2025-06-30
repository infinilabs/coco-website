"use client";

import { useCallback, useEffect, useState } from "react";

import FeatureAbility from "@/components/home/Ability";
import Community from "@/components/home/Community";
import DeployFeature from "@/components/home/Deploy";
import EfficiencyFeatures from "@/components/home/Efficiency";
import Hero from "@/components/home/Hero";
import ServerFeature from "@/components/home/Server";
import ToolsFeature from "@/components/home/Tools";
import WorkFeature from "@/components/home/Work";
import { defaultLocale, getDictionary } from "@/i18n/i18n";

export default function HomeIndex({ lang = defaultLocale }: { lang: string }) {
  const [dict, setDict] = useState<any>();

  const getLocale = useCallback(async () => {
    const dict = await getDictionary(lang);
    setDict(dict);
  }, [lang]);

  useEffect(() => {
    getLocale();
  }, [getLocale]);

  return (
    <>
      {dict ? (
        <>
          <Hero locale={dict.Hero} langName={lang} />
          <FeatureAbility langName={lang} />
          <EfficiencyFeatures locale={dict.Efficiency} langName={lang} />
          <ServerFeature locale={dict.Server} langName={lang} />
          <ToolsFeature locale={dict.Tools} langName={lang} />
          <DeployFeature locale={dict.Deploy} langName={lang} />
          <WorkFeature locale={dict.Work} langName={lang} />
          <Community locale={dict.Community} langName={lang} />
        </>
      ) : null}
    </>
  );
}

