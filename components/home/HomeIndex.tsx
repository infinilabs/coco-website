import { defaultLocale, getDictionary } from "@/i18n/i18n";
import Hero from "@/components/home/Hero";
import FeatureAbility from "@/components/home/Ability";
import EfficiencyFeatures from "@/components/home/Efficiency";
import ServerFeature from "@/components/home/Server";
import ToolsFeature from "@/components/home/Tools";
import DeployFeature from "@/components/home/Deploy";
import WorkFeature from "@/components/home/Work";
import Community from "@/components/home/Community";

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <>
      <Hero locale={dict.Hero} langName={langName} />
      <FeatureAbility langName={langName} />
      <EfficiencyFeatures locale={dict.Efficiency} langName={langName} />
      <ServerFeature locale={dict.Server} langName={langName} />
      <ToolsFeature locale={dict.Tools} langName={langName} />
      <DeployFeature locale={dict.Deploy} langName={langName} />
      <WorkFeature locale={dict.Work} langName={langName} />
      <Community locale={dict.Community} langName={langName}/>
    </>
  );
}

