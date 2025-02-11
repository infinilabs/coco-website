import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-4 px-40">
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Coco" width={32} height={32} />
        <span className="text-white text-xl ml-2 font-semibold">Coco</span>
      </div>

      <div className="flex items-center gap-10">
        <a
          href="/docs"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Documentation
        </a>
        <a
          href="https://github.com/infinilabs/coco-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="mx-auto"
            src="/images/Github.png"
            alt="Coco Github"
            width={148}
            height={50}
            priority
          />
        </a>
      </div>
    </div>
  );
}
