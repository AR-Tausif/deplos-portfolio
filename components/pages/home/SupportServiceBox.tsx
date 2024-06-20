import Image, { StaticImageData } from "next/image";

type TProps ={
    img:StaticImageData,
    title:string,
    desc:string
}
export default function SupportServiceBox ({img, title, desc}:TProps){
    return (
        <div className="w-[20.644rem] flex flex-col items-start justify-start gap-[1.75rem] min-w-[20.644rem] max-w-full mq725:flex-1">
        <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-start py-[0.875rem] px-4 gap-[1.687rem] border-[1px] border-solid border-border mq450:pr-[1.25rem] mq450:box-border">
            <Image
              className="h-[3rem] w-[3.063rem] relative object-cover"
              alt=""
              src={img}
            />

            <div className="flex flex-col items-start justify-start gap-2">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[5.688rem] mq450:text-[1.188rem]">
                {title}
              </h3>
                  <div className="relative text-sm min-w-[7.5rem]">
                    {desc}
                  </div>
            </div>
          </div>
          </div>
    )
}