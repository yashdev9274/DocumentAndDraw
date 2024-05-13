"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { SocialLinks } from "@/component/home/social-links";
import { LogoLarge } from "./logo-large";
import MaxWidthWrapper from "../MaxWidthWrapper";


const navigation = {
    product: [
        { name: "Blog", href: "/blog" },
        { name: "Brand", href: "/brand" },
        { name: "Changelog", href: "/changelog" },
        { name: "Customers", href: "/customers" },
        { name: "Enterprise", href: "/enterprise" },
        { name: "Pricing", href: "/pricing" },
        { name: "Help Center", href: "/help" },
    ],
    resources: [
        { name: "Blog", href: "/blog" },
        { name: "Brand", href: "/brand" },
        { name: "Changelog", href: "/changelog" },
        { name: "Customers", href: "/customers" },
        { name: "Enterprise", href: "/enterprise" },
        { name: "Pricing", href: "/pricing" },
        { name: "Help Center", href: "/help" },
    ],

};

export function Footer() {
    const pathname = usePathname();

    if (pathname.includes("pitch")) {
        return null;
    }

    const { domain = "https://docndraw.vercel.app" } = useParams() as { domain: string };

    const createHref = (href: string) =>
        domain === "https://docndraw.vercel.app" ? href : `https://docndraw.vercel.app${href}`;

    return (

        <footer className="border-t-[1px] border-border px-4 md:px-6 pt-10 md:pt-16 bg-[#F6F6F3] ">
            <MaxWidthWrapper className="relative z-10 overflow-hidden border border-b-0 border-gray-200 bg-white/50 pb-60 pt-16 backdrop-blur-lg md:rounded-t-2xl">
                <div className="xl:grid xl:grid-cols-3 xl:gap-5 px-8">
                    <div className="space-y-6">

                        <Link href="/" className="scale-50 -ml-[52px] md:ml-0 md:scale-100">
                            {/* <LogoLarge /> */}
                            <span className="sr-only">Doc&Draw</span>
                        </Link>

                        <span className="font-normal md:text-2xl text-right">
                            Stand out as a Developer.
                        </span>
                        <div className="md:w-6/12 flex mt-8 md:mt-0 md:justify-end">
                            <div className="flex justify-between md:items-end flex-col space-y-14">
                                <div className="flex items-center">
                                    {/* <GithubStars /> */}
                                    <SocialLinks />
                                </div>
                                <div className="md:mr-0 mr-auto">
                                    {/* <StatusWidget /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 grid grid-cols-2 gap-2 xl:col-span-2 xl:mt-0">
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2  xl:col-span-2 xl:mt-0 px-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-800">
                                    Product
                                </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.product.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={createHref(item.href)}
                                                {...(domain !== "https://docndraw.vercel.app" && {
                                                    // onClick: () => {
                                                    //     va.track("Referred from custom domain", {
                                                    //         domain,
                                                    //         medium: `footer item (${item.name})`,
                                                    //     });
                                                    // },
                                                })}
                                                className="text-sm text-gray-500 hover:text-gray-800"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-800">Resources</h3>
                                <ul role="list" className="mt-1 space-y-4">
                                    {navigation.resources.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={createHref(item.href)}
                                                {...(domain !== "https://docndraw.vercel.app" && {
                                                    // onClick: () => {
                                                    //     va.track("Referred from custom domain", {
                                                    //         domain,
                                                    //         medium: `footer item (${item.name})`,
                                                    //     });
                                                    // },
                                                })}
                                                className="text-sm text-gray-500 hover:text-gray-800"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <p className="text-xs text-[#000000] dark:text-[#3E3E3E] mb-50 px-5 mt-5">
                    @2024 DocandDraw
                </p>
            </MaxWidthWrapper>
        </footer>

    );
}