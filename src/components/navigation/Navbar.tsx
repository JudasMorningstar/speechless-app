import Link from "next/link";
import React from "react";
import { Icons } from "../icons";
import MobileNav from "./MobileNav";
import { sidebarConfig } from "@/config";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex flex-between  fixed z-50 w-full  bg-background border-b border-b-border px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-1">
        {" "}
        <Icons.hand className="h-6 w-6" />
        <p className="text-[26px] font-extrabold max-sm:hidden">Speechless</p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav items={sidebarConfig.sidebarNav} />
      </div>
    </nav>
  );
};

export default Navbar;
