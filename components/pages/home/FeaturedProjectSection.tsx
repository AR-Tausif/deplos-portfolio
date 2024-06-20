import Image from "next/image";
import DemoImg from "@/assets/images/home/demo-pic.png";
import FeaturedItem from "./FeaturedItem";
import TxtsData from "@/constant/TxtsData";

export default function FeaturedProjectSection() {
  return (
    <section className="w-[64.125rem] flex flex-row items-start justify-end pt-[0rem] px-[0.062rem] pb-[1.937rem] box-border max-w-full text-left text-[2rem] text-white font-h2">
      <div className="flex-1 flex flex-col items-start justify-start gap-[4.875rem] max-w-full mq725:gap-[1.188rem] mq1050:gap-[2.438rem]">
       
        {
          TxtsData.portfolio.projects.map((project, index) => {
            return <FeaturedItem key={project.title}  
            title={project.title}
            desc={project.desc}
            inNum={index}
            img={DemoImg}
            code={project.code} />
          })
        }
      </div>
    </section>
  );
}
