import MaxWidthWrapper from "@/component/MaxWidthWrapper";
import Footer from "@/component/home/Footer";
import HowToUse from "@/component/home/HowToUse";
import MainContainer from "@/component/home/MainContainer";
import WeAreOpenSourced from "@/component/home/WeAreOpenSourced";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper className="sm:p-7 sm:pb-0">
      <MainContainer />
      <HowToUse />
      <WeAreOpenSourced />
      <Footer />
    </MaxWidthWrapper>


  );
}
