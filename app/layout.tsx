import { Analytics } from "@vercel/analytics/react";
import { Viewport } from "next";
import { Poppins } from "next/font/google";
// import localFont from "next/font/local";

// import BaiDuAnalytics from "@/app/BaiDuAnalytics";
// import GoogleAnalytics from "@/app/GoogleAnalytics";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
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
// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  icons: siteConfig.icons,
  metadataBase: siteConfig.metadataBase,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
};
export const viewport: Viewport = {
  themeColor: siteConfig.themeColors,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = defaultLocale;

  return (
    <html lang={lang} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          // fontSans.variable,
          // geistSans.variable,
          // geistMono.variable,
          poppins.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme={siteConfig.nextThemeColor}
          enableSystem
        >
          <Header />
          <main className="flex flex-col items-center">{children}</main>
          <Footer />
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

