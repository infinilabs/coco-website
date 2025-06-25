"use client";

import { useEffect, useState } from "react";

import { getDictionary } from "@/i18n/i18n";
import Hero from "@/components/home/Hero";
import FeatureAbility from "@/components/home/Ability";
import EfficiencyFeatures from "@/components/home/Efficiency";
import ServerFeature from "@/components/home/Server";
import ToolsFeature from "@/components/home/Tools";
import DeployFeature from "@/components/home/Deploy";
import WorkFeature from "@/components/home/Work";
import Community from "@/components/home/Community";

export default function HomeIndex({ lang }: { lang: string }) {
  const [dict, setDict] = useState<any>();

  const getLocale = async () => {
    const dict = await getDictionary(lang);
    setDict(dict);
  };

  useEffect(() => {
    getLocale();
  }, []);

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

