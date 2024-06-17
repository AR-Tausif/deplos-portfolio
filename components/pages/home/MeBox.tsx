type TProps ={
    title:string;
    desc:string;
}
export default function MeBox({ title, desc }:TProps) {
  return (
    <div className="self-stretch rounded-md flex flex-col items-start justify-start py-[1.437rem] pr-[1.25rem] pl-[2rem] gap-[1.062rem] text-[1.5rem] border border-gray-600 hover:border-[1px] hover:border-gray-100">
      <h3 className="m-0 w-[16.438rem] relative text-inherit font-medium font-inherit inline-block mq450:text-[1.188rem]">
        {title}
      </h3>
      <div className="w-[16.438rem] relative text-[1rem] leading-[1.938rem] text-gray inline-block">
        {desc}
      </div>
    </div>
  );
}
