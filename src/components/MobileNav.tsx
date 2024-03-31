"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icons } from "./icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { SidebarNavItem } from "@/lib/types";

export interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarNavItem[];
}

const MobileNav = ({ items }: MobileNavProps) => {
  const pathname = usePathname();

  if (!items?.length) return null;
  return (
    <section className="w-full max-w-[264px] ">
      <Sheet>
        <SheetTrigger asChild>
          <Icons.menu className="h-6 w-6 cursor-pointer sm:hidden" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-background border-none">
          <Link href={"/"} className="flex items-center gap-1">
            {" "}
            <Icons.hand className="h-6 w-6" />
            <p className="text-[26px] font-extrabold">Speechless</p>
          </Link>
          <div className="h-[calc(100vh-72px)] flex-col flex justify-between overflow-y-auto ">
            <SheetClose asChild>
              <section className="flex flex-col gap-6 h-full pt-16">
                {items.map((item, index) => {
                  const Icon = item.icon ? Icons[item.icon] : null;
                  const isActive =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

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
                        <span className="text-lg font-semibold">
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
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
