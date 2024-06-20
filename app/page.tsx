import SupportedServices from "@/components/pages/home/SupportedServices";
import Header from "@/components/shared/Header";
import WhyMeSection from "@/components/pages/home/WhyMeSection";
import FeaturedProjectSection from "@/components/pages/home/FeaturedProjectSection";
import Pagecontainer from "@/components/shared/PageContainer";

export default function Home() {
  return (
    <Pagecontainer>
      <Header />
      {/* <WhyMeSection /> */}
      <SupportedServices />
      <FeaturedProjectSection />
    </Pagecontainer>
  );
}
