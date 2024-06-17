import Image from "next/image";
import ServerImg from "@/assets/images/home/image-3@2x.png";
import TxtsData from "@/constant/TxtsData";

export default function Header() {
  return (
    <div className="w-[64.125rem] flex flex-row items-start justify-center pt-[0rem] px-[0rem] pb-[4.937rem] box-border max-w-full text-center text-gray mq725:pb-[3.188rem] mq725:box-border">
      <div className="w-[39rem] flex flex-col items-end justify-start gap-[2.562rem] max-w-full mq725:gap-[1.25rem]">
        <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[3.562rem] pl-[3.625rem] box-border max-w-full mq725:pl-[1.813rem] mq725:pr-[1.75rem] mq725:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
            <header className="self-stretch relative text-[2rem] leading-[3rem] font-semibold font-h2 text-white text-center">
              {TxtsData.home.header.hero.title}
            </header>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[0.5rem]">
              <div className="text-center font-medium">
                <p>{TxtsData.home.header.hero.desc}</p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] text-left text-white">
              <div className="rounded-8xs bg-bg flex flex-row items-start justify-start py-[0.5rem] px-[1.125rem] border-[1px] border-solid border-gray">
                <div className="relative font-medium">
                  {TxtsData.home.header.hero.btn}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="self-stretch h-[23.188rem] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src={ServerImg}
        />
      </div>
    </div>
  );
}
