import React from "react";

import { Ballot } from "@/components/icons/Ballot";
import { BrowserTabs } from "@/components/icons/BrowserTabs";
import { FileText2 } from "@/components/icons/FileText2";
import { Headphones3 } from "@/components/icons/Headphones3";
import { Home } from "@/components/icons/Home";
import { Person } from "@/components/icons/Person";
import { Triangle } from "@/components/icons/Triangle";
import { IconProps } from "@/components/icons/types";

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<IconProps>;
  keywords?: string[];
  isActive?: (pathname: string) => boolean;
  section?: "main" | "projects";
}

export const navigationItems: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: Home,
    keywords: ["home", "dashboard"],
    isActive: (pathname) => pathname === "/",
    section: "main",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    icon: Person,
    keywords: ["about", "bio", "me"],
    isActive: (pathname) => pathname === "/about",
    section: "main",
  },
  {
    id: "writing",
    label: "Writing",
    href: "/writing",
    icon: FileText2,
    keywords: ["writing", "blog", "posts"],
    isActive: (pathname) => pathname.startsWith("/writing"),
    section: "main",
  },
  {
    id: "better-hn",
    label: "Hacker News",
    href: "/hn",
    icon: Triangle,
    keywords: ["hackernews", "hn", "news"],
    isActive: (pathname) => pathname.startsWith("/hn"),
    section: "projects",
  },

  {
    id: "stack",
    label: "Stack",
    href: "/stack",
    icon: Ballot,
    keywords: ["stack", "tools", "tech"],
    isActive: (pathname) => pathname.startsWith("/stack"),
    section: "projects",
  },
  {
    id: "music",
    label: "Listening",
    href: "/listening",
    icon: Headphones3,
    keywords: ["listening", "music", "audio"],
    isActive: (pathname) => pathname === "/listening",
    section: "projects",
  },
  {
    id: "good-websites",
    label: "Sites",
    href: "/sites",
    icon: BrowserTabs,
    keywords: ["sites", "good websites", "websites", "inspiration"],
    isActive: (pathname) => pathname.startsWith("/sites"),
    section: "projects",
  },
];

// Helper functions to filter navigation items
export const getMainNavigationItems = () =>
  navigationItems.filter((item) => item.section === "main");

export const getProjectNavigationItems = () =>
  navigationItems.filter((item) => item.section === "projects");

export const getAllNavigationItems = () => navigationItems;
