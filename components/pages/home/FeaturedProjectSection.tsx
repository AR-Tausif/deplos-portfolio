import Image from "next/image";
import DemoImg from "@/assets/images/home/demo-pic.png";
import FeaturedItem from "./FeaturedItem";

export default function FeaturedProjectSection() {
  return (
    <section className="w-[64.125rem] flex flex-row items-start justify-end pt-[0rem] px-[0.062rem] pb-[1.937rem] box-border max-w-full text-left text-[2rem] text-white font-h2">
      <div className="flex-1 flex flex-col items-start justify-start gap-[4.875rem] max-w-full mq725:gap-[1.188rem] mq1050:gap-[2.438rem]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[2.937rem] max-w-full mq725:gap-[1.438rem] mq1000:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.812rem] px-[0rem] pb-[0rem] box-border min-w-[22.063rem] max-w-full mq450:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full mq725:gap-[1rem]">
                <h1 className="m-0 relative text-inherit leading-[2.813rem] font-semibold font-inherit inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[1.688rem] mq1000:text-[1.625rem] mq1000:leading-[2.25rem]">
                  Удобная панель управления
                </h1>
                <div className="self-stretch relative text-[1rem] leading-[1.625rem] text-gray">
                  Быстрая и легкая панель позволит использовать наш хостинг без
                  проблем. С ней вы в разы облегчите создание вашего сервера.
                </div>
              </div>
              <button className="cursor-pointer py-[0.625rem] px-[1.062rem] bg-[transparent] rounded flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-border hover:bg-dimgray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-200">
                <div className="relative text-[1rem] font-semibold font-h2 text-white text-center">
                  Перейти к панели
                </div>
              </button>
            </div>
          </div>
          <Image
            className="w-[27.125rem] relative rounded-10xs max-h-full object-cover max-w-full mq1000:flex-1"
            loading="lazy"
            alt=""
            src={DemoImg}
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[2.937rem] max-w-full mq725:gap-[1.438rem] mq1000:flex-wrap">
          <Image
            className="w-[27.125rem] relative rounded-10xs max-h-full object-cover max-w-full mq1000:flex-1"
            loading="lazy"
            alt=""
            src={DemoImg}
          />

          <div className="flex-1 flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border min-w-[22.063rem] max-w-full mq450:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.562rem] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full mq725:gap-[1rem]">
                <h1 className="m-0 relative text-inherit leading-[2.813rem] font-semibold font-inherit inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[1.688rem] mq1000:text-[1.625rem] mq1000:leading-[2.25rem]">
                  Система партнерства
                </h1>
                <div className="self-stretch relative text-[1rem] leading-[1.625rem] text-gray">
                  Если у вас есть аудитория в какой-то социальной сети, которая
                  интересуется серверами хостинга, то вы можете смело подать на
                  партнёрство с нами. И получите за это большие призы
                </div>
              </div>
              <button className="cursor-pointer py-[0.625rem] px-[1.062rem] bg-[transparent] rounded flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-border hover:bg-dimgray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-200">
                <div className="relative text-[1rem] font-semibold font-h2 text-white text-center inline-block min-w-[8.063rem]">
                  Узнать больше
                </div>
              </button>
            </div>
          </div>
        </div>
        <FeaturedItem
          title="Удобная панель управления"
          desc="Быстрая и легкая панель позволит использовать наш хостинг без проблем. С ней вы в разы облегчите создание вашего сервера."
          img={DemoImg}
        />
      </div>
    </section>
  );
}
