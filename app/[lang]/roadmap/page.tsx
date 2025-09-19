import RoadmapPage from "@/components/roadmap/RoadmapPage";
import { getDictionary } from "@/i18n/i18n";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.roadmap?.title || "Roadmap Overview",
    description:
      dict.roadmap?.subtitle ||
      "Features currently in development and planned for the future.",
  };
}

export default async function Roadmap({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <RoadmapPage dict={dict} lang={lang} />;
}

