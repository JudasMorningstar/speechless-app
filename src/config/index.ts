import { Icons } from "@/components/icons";
import { SidebarNavItem } from "@/lib/types";

export interface SidebarConfigProps {
  sidebarNav: SidebarNavItem[];
}

export const sidebarConfig: SidebarConfigProps = {
  sidebarNav: [
    {
      title: "Home",
      href: "/",
      icon: "home",
      items: [],
    },
    {
      title: "Upcoming",
      href: "/upcoming",
      icon: "up_coming",
      items: [],
    },
    {
      title: "Previous",
      href: "/previous",
      icon: "previous",
      items: [],
    },
    {
      title: "Recordings",
      href: "/recordings",
      icon: "video",
      items: [],
    },
    {
      title: "Personal Room",
      href: "/personal-room",
      icon: "add_personal",
      items: [],
    },
  ],
};
