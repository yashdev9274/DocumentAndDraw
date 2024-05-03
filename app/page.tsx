"use client"

import MaxWidthWrapper from "@/component/MaxWidthWrapper";
import Footer from "@/component/home/Footer";
import HowToUse from "@/component/home/HowToUse";
import MainContainer from "@/component/home/MainContainer";
import WeAreOpenSourced from "@/component/home/WeAreOpenSourced";
import dashboard from "@/public/asset/dnd-dashboard.svg";
import { ContainerScroll } from "@/component/home/container-scroll-animation";
import { buttonVariants } from '@/components/ui/button';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/component/home/hero-highlight";
import { TextGenerateEffect } from "@/component/home/text-generate-effect";

import Link from 'next/link';

import Image from "next/image";


const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
export default function Home() {
  return (
    // <MaxWidthWrapper className="sm:p-7 sm:pb-0">
    //   <MainContainer />
    //   {/* <HowToUse />
    //   <WeAreOpenSourced />
    //   <Footer /> */}
    // </MaxWidthWrapper>


    <>
      <section
        className="
        h-full w-full pt-36 
        relative flex items-center 
        justify-center flex-col"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

        {/*  */}
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className=" fill-black relative rounded-full px-3 py-1 text-sm leading-6 text-black-600 ring-1 ring-blue-900 hover:ring-gray-900/20">
            Announcing our new feature.{' '}
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        {/*  */}

        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-6xl font-bold text-center md:text-[100px] pt-5 py-7">
            Doc&Draw
          </h1>
        </div>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            With insomnia, nothing&apos;s real. Everything is far away. Everything
            is a{" "}
            <Highlight className="text-black dark:text-white">
              copy, of a copy, of a copy.
            </Highlight>
          </motion.h1>
        </HeroHighlight>

        {/* <MainContainer /> */}

        {/* Tailwind component starts here */}
      </section>

      <div >
        <div className="mx-auto max-w-7xl py-10 sm:px-6 sm:py-25 lg:px-8 h-36 ">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Boost your productivity.
                <br />
                Start using our app today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href={'/dashboard'} target='blank'>
                  Get started
                </Link>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <Image
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src={dashboard}
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px] py-10"> */}

      <TextGenerateEffect words={words} />

      {/* </div> */}
      {/* Tailwind component ends here */}

      {/* Container Scroll Animation starts here */}
      {/* <section>
        <div>

          <div className="flex flex-col overflow-hidden">
            <ContainerScroll
              titleComponent={
                <>
                  <h1 className="text-4xl font-semibold text-black bg:white">
                    Unleash the power of <br />
                    <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                      Scroll Animations
                    </span>
                  </h1>
                </>
              }
            >
              <Image
                src={dashboard}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          </div>
        </div>

      </section> */}



      {/* Container Scroll Animation ends here */}

      {/* Pricing section starts here */}


      {/* Pricing section ends here */}


    </>
  );
}
