import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h1 className="text-5xl font-bold mb-4">404 - The page does not exist</h1>
      <p className="mb-8">Sorry, the page you are visiting does not exist.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return to the homepage
      </Link>
    </div>
  );
}

