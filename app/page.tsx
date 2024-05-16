"use client"

import MaxWidthWrapper from "@/component/MaxWidthWrapper";
// import Footer from "@/component/home/Footer";
import HowToUse from "@/component/home/HowToUse";
import MainContainer from "@/component/home/MainContainer";
import WeAreOpenSourced from "@/component/home/WeAreOpenSourced";
import dashboard from "@/public/asset/dashboard.png";
import { ContainerScroll } from "@/component/home/container-scroll-animation";
import { buttonVariants } from '@/components/ui/button';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/component/home/hero-highlight";
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';
import logo from "@/public/asset/pen-svgrepo-com.svg"
import { TextGenerateEffect } from "@/component/home/text-generate-effect";
// import footer from "@/component/home/footer";

import Link from 'next/link';

import Image from "next/image";
import { SocialLinks } from "@/component/home/social-links";
import { DockMenu } from "./_components/dockMenu";
import { Footer } from "@/component/home/footer";
import Hero from "./_components/Hero";
import PricingSection from "./_components/pricingSection";
import AdBanner from "./_components/AdBanner";

import { BorderBeam } from "@/component/home/border-beam";
import { Companies } from "@/component/home/social-proof-companies";




export default function Home() {
  return (

    <>

      <AdBanner />
      <Hero />

      {/* Dashboard component starts here */}
      <div className="flex justify-center items-center relative md:mt-[-70px]">
        <Image
          src={dashboard}
          alt="banner image"
          height={1200}
          width={1200}
          className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
        />
        <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        <BorderBeam size={250} duration={12} delay={9} />
      </div>

      <DockMenu />
      <Companies />

      <PricingSection />

      <Footer />


    </>
  );
}
