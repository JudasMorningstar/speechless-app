"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Icons } from "@/components/icons";
import { SidebarNavItem } from "@/lib/types";
import { sidebarConfig } from "@/config";

export interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarNavItem[];
}
const SidebarNav = ({ items, className, ...props }: SidebarNavProps) => {
  const pathname = usePathname();
  //   if (!items?.length) return null;
  return (
    <section className="sticky left-0 h-screen top-0 flex w-fit flex-col justify-between bg-border p-6 pt-28 max-sm:hidden lg-w[264px] ">
      <div className="flex flex- flex-col gap-6">
        {items.map((link, index) => {
          const Icon = link.icon ? Icons[link.icon] : null;
          const isActive =
            pathname === link.href || pathname?.startsWith(link.href as string);
          return link.href ? (
            <Link
              href={link.href as string}
              key={index}
              className={cn(
                "flex items-center gap-4 p-4 rounded-lg justify-start",
                {
                  "bg-primary": isActive,
                }
              )}
            >
              {Icon && <Icon />}
              <span>{link.title}</span>
            </Link>
          ) : (
            <span
              key={index}
              className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
            >
              {link.title}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default SidebarNav;
