
import Logo from '@/public/asset/logo.svg'
import Menu from '@/public/asset/icon-menu.svg'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import { buttonVariants } from "@/components/ui/button";
import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (

    <header className='py-1 border-b border-white/15 border-gray-300 md:border-none'>
      <div className='container'>
        <div className='flex justify-between items-center mt-2 md:border border-white/15 md:p-2.5 rounded-xl mx-w-2xl mx-auto'>
          <div className='flex items-center'>
            <div className='border h-10 w-10 rounded-lg inline-flex justify-center intems-center border-gray/15 bg-white'>
              <Link
                href="/"
                className="flex z-40 font-semibold"
              >
                <Image
                  src={Logo}
                  alt="logo"
                  className="h-10 w-8"
                />
              </Link>
            </div>
            <div className='ml-20 items-center hidden md:block'>
              <nav className='flex gap-5 text-sm'>
                <a href='#' className='text-white/70 hover:text-white transition gap-4 ml-20'>Features</a>
                <a href='#' className='text-white/70 hover:text-white transition gap-4 ml-20'>Pricing</a>
                <a href='#' className='text-white/70 hover:text-white transition gap-4 ml-20'>Cangelog</a>
                <a href='#' className='text-white/70 hover:text-white transition gap-4 ml-20'>OpenSource</a>
              </nav>
            </div>
            <div className='flex items-center justify-end ml-20 gap'>
              <button className='relative border py-2 px-3 rounded-lg font-medium text-black text-sm bg-gradient-to-b from-gray-300 to-black shadow-[#0px_0px_12px_#8c45ff]' >
                <div className='absolute inset-0 '>
                  <div className='border border-white/20 absolute inder-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'>
                    <div className='border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'>
                      <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset rounded-lg]'>

                      </div>

                    </div>
                  </div>
                </div>
                {/* <LoginLink postLoginRedirectURL="/dashboard"> Login</LoginLink> */}

                <LoginLink
                  className={buttonVariants({
                    variant: "ghost",
                  })}
                >
                  Sigin
                </LoginLink>

              </button>
              <Image
                src={Menu}
                alt="logo"
                className="h-8 w-8 md:hidden"
              />
            </div>
          </div>
        </div>

      </div>

    </header >


    // <header className="bg-black">
    //   <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    //     <Image src='/logo.svg' alt='logo'
    //       width={100}
    //       height={100}
    //     />

    //     <div className="flex flex-1 items-center justify-end md:justify-between">
    //       <nav aria-label="Global" className="hidden md:block">
    //         <ul className="flex items-center gap-6 text-sm">
    //           <li>
    //             <a className="text-white transition hover:text-gray-100" href="#"> About </a>
    //           </li>

    //           <li>
    //             <a className="text-white transition hover:text-gray-100/75" href="#"> Careers </a>
    //           </li>

    //           <li>
    //             <a className="text-white transition hover:text-gray-100/75" href="#"> History </a>
    //           </li>

    //           <li>
    //             <a className="text-white transition hover:text-gray-100/75" href="#"> Services </a>
    //           </li>

    //           <li>
    //             <a className="text-white transition hover:text-gray-100/75" href="#"> Projects </a>
    //           </li>


    //         </ul>
    //       </nav>

    //       <div className="flex items-center gap-4">
    //         <div className="sm:flex sm:gap-4">
    //           <div
    //             className="block rounded-md  px-5 py-2.5 text-sm font-medium 
    //             text-white transition "

    //           >
    //             <LoginLink postLoginRedirectURL="/dashboard"> Login</LoginLink>
    //           </div>

    //           <div
    //             className="hidden rounded-md bg-gray-100 
    //             px-5 py-2.5 text-sm font-medium
    //              text-black transition
    //               hover:text-slate-800 sm:block"

    //           >
    //             <RegisterLink>Register</RegisterLink>
    //           </div>
    //         </div>

    //         <button
    //           className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
    //         >
    //           <span className="sr-only">Toggle menu</span>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //           >
    //             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </header>

  )
}

export default Header