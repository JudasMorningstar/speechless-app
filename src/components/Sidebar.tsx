"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Icons } from "@/components/icons";
import { SidebarNavItem } from "@/lib/types";
import { sidebarConfig } from "@/config";
import { Separator } from "./ui/separator";

export interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarNavItem[];
}
const SidebarNav = ({ items, className, ...props }: SidebarNavProps) => {
  const pathname = usePathname();
  if (!items?.length) return null;
  // const segment = useSelectedLayoutSegment();

  if (!items?.length) return null;

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col border-r justify-between  p-6 pt-28 text-white max-sm:hidden  lg:w-[264px]">
      <div className="flex flex- flex-col gap-6">
        {items.map((item, index) => {
          const Icon = item.icon ? Icons[item.icon] : null;
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return item.href ? (
            <div>
              <Link
                aria-label={item.title}
                key={index}
                href={item.href}
                target={item.external ? "_blank" : ""}
                rel={item.external ? "noreferrer" : ""}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-lg justify-start",
                  {
                    "bg-primary": isActive,
                  }
                )}
              >
                {Icon && <Icon aria-hidden="true" />}
                <span className="text-lg font-semibold max-lg:hidden">
                  {item.title}
                </span>
              </Link>
            </div>
          ) : (
            <span
              key={index}
              className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
            >
              {item.title}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default SidebarNav;
