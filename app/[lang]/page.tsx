import HomeIndex from "@/components/home/HomeIndex";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return <HomeIndex lang={lang} />;
}

