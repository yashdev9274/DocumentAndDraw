// import React, { useState } from "react";
import MaxWidthWrapper from "@/component/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
    LoginLink,
    RegisterLink,
    getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import DocNDraw from "@/public/asset/DocNDraw-logo.svg"

import { ArrowRight } from "lucide-react";
// import NavbarMenu from "./navbar-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuBar } from "../NavigationBar";
import { ModeToggle } from "@/component/global/toggle";

const Navbar = ({ className }: { className?: string }) => {



    return (

        // <NavbarMenu />
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            < MaxWidthWrapper >
                {/* <NavigationMenuBar /> */}
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">


                    <Link
                        href="/"
                        className="flex z-40 font-semibold"
                    >
                        {/* <Image src={DocNDraw} alt="logo" className="h-8 relative px-" /> */}
                        <span>
                            D&D
                        </span>

                    </Link>
                    <div>

                        <NavigationMenuBar />
                    </div>
                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            {/* <Link
                                href='/pricing'
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                })}
                            >
                                Pricing
                            </Link> */}
                            <ModeToggle />
                            <LoginLink
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                })}
                            >
                                Sigin
                            </LoginLink>
                            <RegisterLink
                                className={buttonVariants({
                                    size: 'sm',
                                })}>
                                Start for Free{' '}
                                <ArrowRight className='ml-1.5 h-5 w-5' />
                            </RegisterLink>
                        </>
                    </div>
                </div>
            </MaxWidthWrapper >
        </nav >
    );
}

export default Navbar;

