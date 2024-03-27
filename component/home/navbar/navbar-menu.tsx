"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./NavbarComponent";

import Link from "next/link";



const NavbarMenu = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (

        <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Services">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/web-dev">Web Development</HoveredLink>
                    <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                    <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                    <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
                <div className="  text-sm grid grid-cols-2 gap-10 p-4">

                    <ProductItem
                        title="Algochurn"
                        href="/pdfchatai-dashboard"
                        src="/asset/preview.png"
                        description="Prepare for tech interviews like never before."
                    />

                </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/hobby">Hobby</HoveredLink>
                    <HoveredLink href="/individual">Individual</HoveredLink>
                    <HoveredLink href="/team">Team</HoveredLink>
                    <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                </div>
            </MenuItem>


        </Menu>
    );
}


export default NavbarMenu;