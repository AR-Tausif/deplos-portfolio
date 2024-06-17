import SupportedServices from "@/components/pages/home/SupportedServices";
import Header from "@/components/shared/Header";
import WhyMeSection from "@/components/pages/home/WhyMeSection";
import FeaturedProjectSection from "@/components/pages/home/FeaturedProjectSection";

export default function Home() {
  return (
    <>
      <Header />
      <WhyMeSection />
      <SupportedServices />
      <FeaturedProjectSection />
    </>
  );
}
