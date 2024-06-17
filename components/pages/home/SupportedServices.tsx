import TxtsData from "@/constant/TxtsData";
import Image from "next/image";
import MinecraftImg from "@/assets/images/home/minecraft.png";
import NodeImg from "@/assets/images/home/nodejs.png";
import PythonImg from "@/assets/images/home/python.png";

export default function SupportedServices() {
  return (
    <section className="w-[64.081rem] flex flex-row items-start justify-center pt-[0rem] px-[0rem] pb-[2.875rem] box-border gap-[1.25rem] max-w-full text-left text-[2rem] text-white font-h2 mq1000:flex-wrap">
      <div className="w-[20.5rem] flex flex-col items-start justify-start gap-[1rem] min-w-[20.5rem] max-w-full mq1000:flex-1">
        <h1 className="m-0 self-stretch relative text-inherit leading-[2.813rem] font-semibold font-inherit mq450:text-[1.188rem] mq450:leading-[1.688rem] mq1000:text-[1.625rem] mq1000:leading-[2.25rem]">
          {TxtsData.home.supportedServices.title}
        </h1>
        <div className="w-[19.688rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border text-[1rem] text-gray">
          <div className="flex-1 relative leading-[1.75rem]">
            {TxtsData.home.supportedServices.desc}
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start gap-[1.106rem] min-w-[27.5rem] max-w-full text-[1.5rem] mq725:flex-wrap mq725:min-w-full">
        <div className="flex-1 rounded-8xs box-border overflow-hidden flex flex-row items-center justify-start py-[0.875rem] pr-[6.625rem] pl-[1.687rem] gap-[1.687rem] min-w-[13.438rem] max-w-full border-[1px] border-solid border-border mq450:pr-[1.25rem] mq450:box-border">
          <Image
            className="h-[3rem] w-[3.063rem] relative object-cover"
            loading="lazy"
            alt=""
            src={NodeImg}
          />

          <div className="flex-1 flex flex-col items-start justify-start gap-[1.062rem]">
            <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[5.75rem] mq450:text-[1.188rem]">
              Node.js
            </h3>
            <div className="flex flex-row items-start justify-start gap-[0.625rem] text-[1rem] text-gray">
              <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                <div className="relative font-medium inline-block min-w-[7.5rem]">
                  Дискорд боты
                </div>
                <div className="relative font-medium inline-block min-w-[5rem]">
                  Телеграм
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[0.375rem]">
                <div className="relative font-medium">Сервера</div>
                <div className="relative font-medium">Forge</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20.644rem] flex flex-col items-start justify-start gap-[1.75rem] min-w-[20.644rem] max-w-full mq725:flex-1">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full">
            <div className="flex-1 rounded-8xs box-border overflow-hidden flex flex-row items-center justify-start py-[0.875rem] pr-[6.187rem] pl-[1.687rem] gap-[1.687rem] max-w-full border-[1px] border-solid border-border mq450:pr-[1.25rem] mq450:box-border">
              <Image
                className="h-[3rem] w-[3.063rem] relative object-cover"
                alt=""
                src={MinecraftImg}
              />

              <div className="flex-1 flex flex-col items-start justify-start gap-[1.062rem]">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[7.375rem] mq450:text-[1.188rem]">
                  Minecraft
                </h3>
                <div className="flex flex-row items-start justify-start gap-[0.625rem] text-[1rem] text-gray">
                  <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                    <div className="relative font-medium inline-block min-w-[3.375rem]">
                      Vanilla
                    </div>
                    <div className="relative font-medium inline-block min-w-[3.375rem]">
                      Spigot
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                    <div className="relative font-medium inline-block min-w-[3.938rem]">
                      Sponge
                    </div>
                    <div className="relative font-medium inline-block min-w-[3rem]">
                      Forge
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-8xs overflow-hidden flex flex-row items-center justify-start py-[0.875rem] pr-[6.625rem] pl-[1.687rem] gap-[1.687rem] border-[1px] border-solid border-border mq450:pr-[1.25rem] mq450:box-border">
            <Image
              className="h-[3rem] w-[3.063rem] relative object-cover"
              alt=""
              src={PythonImg}
            />

            <div className="flex flex-col items-start justify-start gap-[1.062rem]">
              <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[5.688rem] mq450:text-[1.188rem]">
                Python
              </h3>
              <div className="flex flex-row items-start justify-start gap-[0.625rem] text-[1rem] text-gray">
                <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                  <div className="relative font-medium inline-block min-w-[7.5rem]">
                    Дискорд боты
                  </div>
                  <div className="relative font-medium inline-block min-w-[4.563rem]">
                    Сервера
                  </div>
                </div>
                <div className="hidden flex-col items-start justify-start gap-[0.375rem]">
                  <div className="relative font-medium">Сервера</div>
                  <div className="relative font-medium">Forge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
