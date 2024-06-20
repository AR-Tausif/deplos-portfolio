import Image from "next/image";
import LogoImg from "@/assets/images/home/logo.png";
import Pagecontainer from "./PageContainer";
import TxtsData from "@/constant/TxtsData";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import NavlinkHoverItems from "./NavlinkHoverItems";
type TItem = {
  text: string;
  path: string;
};

export default function Navbar() {
  const navLinksArray = Object.values(TxtsData.home.header.nav.links);
  console.dir(navLinksArray);
  const NavLinks = navLinksArray.map((item: TItem) => (
    <a
      key={item.path}
      className="[text-decoration:none] relative text-white inline-block min-w-[4.125rem] cursor-pointer"
      id="text44"
    >
      {item.text}
    </a>
  ));
  return (
    <Pagecontainer>
      <div className="w-[64.125rem] flex flex-row items-start justify-end py-[0rem] px-[0.062rem] box-border max-w-full">
        <div className="flex-1 bg-bg flex flex-row items-center justify-between max-w-full gap-[1.25rem] mq1000:flex-wrap">
          <div
            className="flex flex-row items-center justify-start gap-[1.062rem] cursor-pointer"
            id="headerContentContainer"
          >
            <Image
              className="h-[2.25rem] w-[1.688rem] relative object-cover"
              loading="lazy"
              alt=""
              src={LogoImg}
            />

            <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[5.5rem]">
              LineNodes
            </a>
          </div>
          <div className="hidden sm:flex">
            <NavlinkHoverItems />
          </div>

          <div className="flex flex-row items-center justify-start gap-[1.75rem text-gray mq725:flex-wrap">
            <button className="cursor-pointer py-[0.5rem] px-[1.125rem] bg-[transparent] rounded-8xs flex flex-row items-start justify-start border-[1px] border-solid border-border hover:bg-dimgray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-200">
              <a className="[text-decoration:none] relative text-[1rem] font-medium font-h2 text-gray text-left">
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </Pagecontainer>
  );
}
