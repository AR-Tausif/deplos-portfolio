import { ReactNode } from "react";

export default function Pagecontainer({children}:{children:ReactNode}){
    return(
        <div className="w-full relative flex flex-col items-center justify-start pt-[2.062rem] px-[1.25rem] pb-[3.681rem] box-border gap-[6.375rem] leading-[normal] tracking-[normal] text-left text-[1rem] text-white font-h2 mq725:gap-[1.563rem] mq1050:gap-[3.188rem]">{children}</div>
    )
}