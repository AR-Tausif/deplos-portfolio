import MeBox from "./MeBox";

export default function WhyMeSection() {
  return (
    <section className="w-[64.063rem] flex flex-row items-start justify-center pt-[0rem] px-[0rem] pb-[2.25rem] box-border gap-[1.375rem] max-w-full text-left text-[1.5rem] text-white font-h2 mq1000:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start gap-[3.312rem] min-w-[15.313rem] max-w-full text-[2rem] mq450:gap-[1.625rem]">
        <h1 className="m-0 relative text-inherit leading-[2.813rem] font-semibold font-inherit mq450:text-[1.188rem] mq450:leading-[1.688rem] mq1000:text-[1.625rem] mq1000:leading-[2.25rem]">
          Почему мы?
        </h1>as
        <MeBox
        title="Стабильно"
        desc="Наше оборудование имеет безпрерывную поддержку , низкий пинг и отсутствие лагов. А скорость работы позволит установить сервер за 25 секунд."
      />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[2.437rem] px-[0rem] pb-[0rem] box-border min-w-[15.313rem] max-w-full">
        <MeBox
        title="Стабильно"
        desc="Наше оборудование имеет безпрерывную поддержку , низкий пинг и отсутствие лагов. А скорость работы позволит установить сервер за 25 секунд."
      />
      </div>
      <div className="flex-[0.8349] rounded-md box-border flex flex-col items-start justify-start py-[1.437rem] pr-[1.25rem] pl-[2rem] gap-[1.062rem] min-w-[15.313rem] max-w-full border-[1px] border-solid border-border mq450:flex-1">
        <h3 className="m-0 w-[16.438rem] relative text-inherit font-medium font-inherit inline-block mq450:text-[1.188rem]">
          Безопасно
        </h3>
        <div className="w-[16.438rem] relative text-[1rem] leading-[1.938rem] text-gray inline-block">
          У нас установлен сертификат безопасности, все данные передаются в
          зашифрованном виде.
        </div>
      </div>
    </section>
  );
}
