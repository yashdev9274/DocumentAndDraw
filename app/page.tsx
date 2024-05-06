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


const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function Home() {
  return (
    // <MaxWidthWrapper className="sm:p-7 sm:pb-0">
    //   <MainContainer />
    //   {/* <HowToUse />
    //   <WeAreOpenSourced />
    //   <Footer /> */}
    // </MaxWidthWrapper>


    <>

      {/*  */}

      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">Watilist</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            D&D will be live soon. SignUp for the watilist and become our first customer.
          </p>
          <a
            href="#"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            SignUp now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/*  */}


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

      <div className="flex justify-center items-center relative md:mt-[-70px]">
        <Image
          src={dashboard}
          alt="banner image"
          height={1200}
          width={1200}
          className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
        />
        <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
      </div>




      {/* <section
        className="flex justify-center items-center relative md:mt-[-70px]"
      >

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

      </section> */}

      {/* <div className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px] py-10"> */}

      {/* <TextGenerateEffect words={words} /> */}

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
      <section className="
        h-full w-full pt-1 
        relative flex items-center 
        justify-center flex-col">

        <div className="bg-white py-24 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
                in. Explicabo id ut laborum.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                  repellendus etur quidem assumenda.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get access
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Invoices and receipts available for easy company reimbursement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Pricing section ends here */}

      <footer className="border-t-[1px] border-border px-4 md:px-6 pt-10 md:pt-16 bg-[#F6F6F3] dark:bg-[#0C0C0C]">
        <div className="container">
          <div className="flex justify-between items-center border-border border-b-[1px] pb-10 md:pb-16 mb-12">
            <Link href="/" className="scale-50 -ml-[52px] md:ml-0 md:scale-100">
              {/* <LogoLarge /> */}
              <Image src={logo} alt="logo" width={50} height={10} />
              <span className="font-normal md:text-2xl text-right">Doc&Draw</span>
            </Link>

            <span className="font-normal md:text-2xl text-right">
              Stand out as a Developer.
            </span>
          </div>

          <div className="flex flex-col md:flex-row w-full mb-10 md:mb-20">
            <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:w-6/12 justify-between leading-8">
              <div>
                <span className="font-medium">Product</span>
                <ul>
                  <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                    <Link href="/">Features</Link>
                  </li>
                  <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                    <Link href="/story">Story</Link>
                  </li>
                  <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                    <Link href="/updates">Updates</Link>
                  </li>
                  <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                    <Link href="/download">Download</Link>
                  </li>
                  <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                    <Link href="/feature-request">Feature Request</Link>
                  </li>
                </ul>
              </div>

              <div>
                <span>Resources</span>
                <ul>
                  <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                    <Link href="https://git.new/docndraw">Github</Link>
                  </li>
                  <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                    <Link href="/support">Support</Link>
                  </li>
                  <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                    <Link href="/policy">Privacy policy</Link>
                  </li>
                  <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                    <Link href="/terms">Terms and Conditions</Link>
                  </li>
                  <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                    <Link href="/open-startup">Open Startup</Link>
                  </li>
                  <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                    <Link href="/pitch">Investors</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <span>Solutions</span>
              <ul>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  <Link href="/engine">Midday Engine</Link>
                </li>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  <Link href="https://docs.docndraw/">
                    Self hosted
                  </Link>
                </li>
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  <Link href="/">SaaS hosting</Link>
                </li>
                {/* Nothing here yet */}
                {/* <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  <Link href="/open-startup">Open startup</Link>
                </li> */}
                <li className="text-[#707070] transition-colors hover:text-primary dark:text-[#878787]">
                  <Link href="/oss-friends">OSS friends</Link>
                </li>
              </ul>
            </div>

            <div className="md:w-6/12 flex mt-8 md:mt-0 md:justify-end">
              <div className="flex justify-between md:items-end flex-col space-y-14">
                <div className="flex items-center">
                  <SocialLinks />
                </div>
                <div className="md:mr-0 mr-auto">
                </div>
              </div>
            </div>
          </div>


          <p className="text-xs text-[#000000] dark:text-[#3E3E3E] mb-50">
            @2024 DocandDraw
          </p>

        </div>
      </footer>




    </>
  );
}
