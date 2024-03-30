import Link from "next/link";
import React from "react";
import { Icons } from "./icons";

const Navbar = () => {
  return (
    <nav className="flex-between  fixed z-50 w-full px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-1">
        {" "}
        <Icons.hand />
        <p className="text-[26px] font-extrabold max-sm:hidden">Speechless</p>
      </Link>
    </nav>
  );
};

export default Navbar;
