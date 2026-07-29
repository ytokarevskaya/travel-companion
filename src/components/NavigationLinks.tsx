"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { navigationItems } from "./navigation";
import styles from "./NavigationLinks.module.css";

export function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className={mobile ? styles.mobileNav : styles.navigation}>
      {navigationItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href === "/" &&
            pathname.startsWith("/trips/") &&
            pathname !== "/trips/new");
        return (
          <Link aria-current={isActive ? "page" : undefined} className={`${styles.link} ${mobile ? styles.mobileLink : ""} ${isActive ? styles.active : ""}`} href={item.href} key={item.href}>
            <Icon name={item.icon} size={mobile ? 19 : 21} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
