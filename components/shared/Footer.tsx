import Image from "next/image";
import LogoImg from "@/assets/images/home/logo.png";
import Pagecontainer from "./PageContainer";
import TxtsData from "@/constant/TxtsData";
export default function Footer() {
  return (
    <Pagecontainer>
      <section className="w-[64.006rem] flex flex-col items-start justify-start gap-[3.375rem] max-w-full text-left text-[2rem] text-white font-h2 mq725:gap-[1.688rem]">
        <div className="self-stretch bg-bg flex flex-col items-start justify-start gap-[1.5rem] max-w-full text-[1rem]">
          <div className="self-stretch rounded flex flex-row items-start justify-between py-[1.25rem] px-[1.375rem] gap-[1.25rem] border-[1px] border-solid border-border mq1000:flex-wrap mq1000:justify-center">
            <div className="w-[16.063rem] flex flex-col items-start justify-start gap-[1.062rem]">
              <div className="flex flex-row items-center justify-start gap-[1.062rem]">
                <Image
                  className="h-[2.25rem] w-[1.688rem] relative object-cover"
                  alt=""
                  src={LogoImg}
                />

                <div className="relative font-semibold inline-block min-w-[5.5rem]">
                  LineNodes
                </div>
              </div>
              <div className="self-stretch relative leading-[1.5rem] text-gray">
                {TxtsData.footer.logoTitle}
              </div>
            </div>
            {TxtsData.footer.links.map((link) => (
              <div
                key={link.text}
                className="bg-bg flex flex-col items-start justify-start gap-[0.687rem]"
              >
                <div className="relative leading-[1.75rem] font-medium">
                  {link.text}
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.187rem] text-gray">
                  {link.items.map((item) => (
                    <div
                      key={item.text}
                      className="relative leading-[1.75rem] cursor-pointer"
                    >
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full">
            <div className="leading-[1.75rem]">
              <p className="text-center">{TxtsData.footer.copyright}</p>
            </div>
            {/* <div className="flex flex-row items-center justify-start gap-[0.375rem]">
              <img
                className="h-[1.756rem] w-[1.756rem] relative object-contain min-h-[1.75rem]"
                loading="lazy"
                alt=""
                src="/public/telegram@2x.png"
              />

              <img
                className="h-[1.756rem] w-[1.756rem] relative object-contain min-h-[1.75rem]"
                loading="lazy"
                alt=""
                src="/public/discord@2x.png"
              />

              <img
                className="h-[1.756rem] w-[1.756rem] relative object-contain min-h-[1.75rem]"
                loading="lazy"
                alt=""
                src="/public/youtube@2x.png"
              />
            </div> */}
          </div>
        </div>
      </section>
    </Pagecontainer>
  );
}
