import Link from "next/link";
import { Icon } from "./Icon";
import { NavigationLinks } from "./NavigationLinks";
import styles from "./AppShell.module.css";

export function Brand() {
  return (
    <Link className={styles.brand} href="/" aria-label="Travel Companion home">
      <span className={styles.brandMark}><Icon name="map" size={23} /></span>
      <span>Travel Companion</span>
    </Link>
  );
}

export function AppSidebar() {
  return (
    <aside className={styles.sidebar}>
      <Brand />
      <NavigationLinks />
      <div className={styles.sidebarNote}>
        <span className={styles.trail} aria-hidden="true">⌁ · ⌁</span>
        <p>Collect moments.<br />Find new adventures.</p>
      </div>
    </aside>
  );
}
