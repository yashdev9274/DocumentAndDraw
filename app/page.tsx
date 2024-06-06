"use client"

import Image from "next/image";
import dashboard from "@/public/asset/dashboard.png";
import screen1 from "@/public/asset/screen1.png";
import { DockMenu } from "./_components/dockMenu";
import { Footer } from "@/component/home/footer";
import Hero from "./_components/Hero";
import PricingSection from "./_components/pricingSection";
import AdBanner from "./_components/AdBanner";

import { BorderBeam } from "@/component/home/border-beam";
import Feature from "@/component/home/feature-section";
import Companies from "@/component/home/social-proof-companies";
import { Testimonials } from "@/component/home/testimonial-grid";
import { Stats } from "@/component/home/stats";
import { Screens } from "@/component/home/screens";





export default function Home() {
  return (

    <>

      <AdBanner />
      <Hero />
      <div className="flex justify-center items-center relative  md:mt-[-60px]">
        <Image
          src={screen1}
          alt="banner image"
          width={1031}
          height={670}
          className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
        />
        <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        <BorderBeam size={250} duration={12} delay={9} />
      </div>

      {/* <Screens /> */}
      <DockMenu />
      <Companies />
      <Feature />
      <PricingSection />
      <Testimonials />
      <Stats />
      <Footer />

    </>
  );
}
