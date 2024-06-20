import TxtsData from "@/constant/TxtsData";
import MinecraftImg from "@/assets/images/home/minecraft.png";
import NodeImg from "@/assets/images/home/nodejs.png";
import PythonImg from "@/assets/images/home/python.png";
import SupportServiceBox from "./SupportServiceBox";

export default function SupportedServices() {
  return (
    <section className="w-[64.081rem]  flex flex-col sm:flex-row items-center sm:items-start justify-center pt-[0rem] px-[0rem] pb-[2.875rem] box-border gap-[1.25rem] max-w-full text-left text-[2rem] text-white font-h2 mq1000:flex-wrap">
      <div className="w-[20.5rem] flex flex-col items-start justify-start gap-[1rem] min-w-[20.5rem] max-w-full text-center">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center m-auto items-center gap-4">
          <SupportServiceBox img={NodeImg} title="Minecraft" desc="Nodejs is a runtime for runing server for JavaScript" />
          <SupportServiceBox img={PythonImg} title="Python" desc="Python is a high level programming language." />
          <SupportServiceBox img={MinecraftImg} title="Minecraft" desc="Mincraft is a game engine for Java." />
        </div>
      </div>
    </section>
  );
}
