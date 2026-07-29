import type { IconName } from "./Icon";

export type NavigationItem = {
  href: string;
  label: string;
  icon: IconName;
};

export const navigationItems: NavigationItem[] = [
  { href: "/", label: "Journal", icon: "book" },
  { href: "/trips/new", label: "Add Trip", icon: "plus" },
  { href: "/recommendations", label: "Recommendations", icon: "compass" },
];
