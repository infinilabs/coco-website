import Link from "next/link";

import { staticParams } from "@/i18n/i18n";

export async function generateStaticParams() {
  return staticParams;
}
export default function NotFound() {
  return (
    <div className="w-screen flex flex-col items-center justify-center min-h-screen bg-transparent text-black dark:text-white">
      <h1 className="text-5xl font-bold mb-4">404 - The page does not exist</h1>
      <p className="mb-8">Sorry, the page you are visiting does not exist.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return to the homepage
      </Link>
    </div>
  );
}

