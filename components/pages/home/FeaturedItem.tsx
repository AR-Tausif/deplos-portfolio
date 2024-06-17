import Image, { StaticImageData } from "next/image";

type TProps = {
  title: string;
  desc: string;
  img: StaticImageData;
};

export default function FeaturedItem({ title, desc, img }: TProps) {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[2.937rem] max-w-full mq725:gap-[1.438rem] mq1000:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem] box-border min-w-[22.063rem] max-w-full mq450:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.562rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] mq725:gap-[1rem]">
            <h1 className="m-0 relative text-inherit leading-[2.813rem] font-semibold font-inherit mq450:text-[1.188rem] mq450:leading-[1.688rem] mq1000:text-[1.625rem] mq1000:leading-[2.25rem]">
              {title}
            </h1>
            <div className="self-stretch relative text-[1rem] leading-[1.625rem] text-gray">
              {desc}
            </div>
          </div>
          <div className="rounded flex flex-row items-start justify-start py-[0.625rem] px-[1.062rem] whitespace-nowrap text-center text-[1rem] border-[1px] border-solid border-border">
            <div className="relative font-semibold inline-block min-w-[7.25rem]">
              Наш дискорд
            </div>
          </div>
        </div>
      </div>
      <Image
        className="w-[27.125rem] relative rounded-10xs max-h-full object-cover max-w-full mq1000:flex-1"
        loading="lazy"
        alt=""
        src={img}
      />
    </div>
  );
}
