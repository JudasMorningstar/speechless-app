import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import SidebarNav from "@/components/Sidebar";
import { Separator } from "@/components/ui/separator";

import { sidebarConfig } from "@/config";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <SidebarNav
          items={sidebarConfig.sidebarNav}
          className="bg-background"
        />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px- 14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
