// import React, { useState } from "react";
import MaxWidthWrapper from "@/component/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {
    LoginLink,
    RegisterLink,
    getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

import { ArrowRight } from "lucide-react";
import NavbarMenu from "./navbar-menu";
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {



    return (

        // <NavbarMenu />
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            < MaxWidthWrapper >

                {/* <NavbarMenu /> */}
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link
                        href="/"
                        className="flex z-40 font-semibold"
                    >
                        <span>
                            D&D
                        </span>
                    </Link>



                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link
                                href='/pricing'
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                })}
                            >
                                Pricing
                            </Link>
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

