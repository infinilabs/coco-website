"use client";

import dynamic from "next/dynamic";

import Hero from "@/components/home/Hero";
import SectionSkeleton from "@/components/ui/SectionSkeleton";
import { defaultLocale, getDictionarySync } from "@/i18n/i18n";

const FeatureAbility = dynamic(() => import("./Ability"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const EfficiencyFeatures = dynamic(() => import("./Efficiency"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const ServerFeature = dynamic(() => import("./Server"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const ToolsFeature = dynamic(() => import("./Tools"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const DeployFeature = dynamic(() => import("./Deploy"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const WorkFeature = dynamic(() => import("./Work"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const FAQFeature = dynamic(() => import("./FAQ"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const Community = dynamic(() => import("./Community"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});

export default function HomeIndex({ lang = defaultLocale }: { lang: string }) {
  const dict = getDictionarySync(lang);

  return (
    <>
      <Hero locale={dict.Hero} langName={lang} />

      <div className="content-vis">
        <FeatureAbility langName={lang} />
      </div>
      <div className="content-vis">
        <EfficiencyFeatures locale={dict.Efficiency} langName={lang} />
      </div>
      <div className="content-vis">
        <ServerFeature locale={dict.Server} langName={lang} />
      </div>
      <div className="content-vis">
        <ToolsFeature locale={dict.Tools} langName={lang} />
      </div>
      <div className="content-vis">
        <DeployFeature locale={dict.Deploy} langName={lang} />
      </div>
      <div className="content-vis">
        <WorkFeature locale={dict.Work} langName={lang} />
      </div>
      <div className="content-vis">
        <FAQFeature locale={dict.FAQ} langName={lang} />
      </div>
      <div className="content-vis">
        <Community locale={dict.Community} langName={lang} />
      </div>
    </>
  );
}
