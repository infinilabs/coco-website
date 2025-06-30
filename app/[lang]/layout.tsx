import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";

// import BaiDuAnalytics from "@/components/BaiDuAnalytics";
// import GoogleAnalytics from "@/components/GoogleAnalytics";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { siteConfig } from "@/data/site";
import { defaultLocale } from "@/i18n/i18n";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";
import "@/styles/loading.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = params.lang || defaultLocale;

  return (
    <html lang={lang} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          poppins.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme={siteConfig.nextThemeColor}
          enableSystem
        >
          <Header lang={lang} />
          <main className="flex flex-col items-center min-h-screen">
            {children}
          </main>
          <Footer lang={lang} />
          <Analytics />
          <TailwindIndicator />
        </ThemeProvider>
        {process.env.NODE_ENV === "development" ? (
          <></>
        ) : (
          <>
            {/* <GoogleAnalytics />
            <BaiDuAnalytics /> */}
          </>
        )}
      </body>
    </html>
  );
}

