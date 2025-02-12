import Image from "next/image";

export default function Connect() {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-[120px] md:mt-[160px] font-medium text-[32px] md:text-[40px] text-white leading-[48px] md:leading-[64px] text-center">
        Connect Your Tools and AI Models
      </div>
      <div className="max-w-[720px] m-auto mt-4 md:mt-6 font-normal text-sm text-[#676767] leading-[21px] text-center px-4 md:px-0">
        Whether it’s cloud-based, local, or your own AI models, COCO AI
        seamlessly integrates with your ecosystem—keeping everything under your
        control.
      </div>
      <div className="mt-16 md:mt-32 flex justify-center">
        <Image
          src="/svg/connect.svg"
          alt="Coco connect"
          width={1120}
          height={522}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
