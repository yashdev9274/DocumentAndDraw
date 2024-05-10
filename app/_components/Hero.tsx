import React from 'react'
import { HeroHighlight, Highlight } from "@/component/home/hero-highlight";
import { motion } from "framer-motion";
import MainContainer from "@/component/home/MainContainer";



function Hero() {
  return (
    <section
      className="
        h-full w-full pt-10 
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

          <Highlight className="text-black dark:text-white">
            Stand out as a Developer.
          </Highlight>
        </motion.h1>
      </HeroHighlight>
      <MainContainer />



      {/* <MainContainer /> */}

      {/* Tailwind component starts here */}
    </section>
  )
}

export default Hero