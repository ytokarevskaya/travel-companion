import { Brand } from "./AppSidebar";
import { NavigationLinks } from "./NavigationLinks";
import styles from "./AppShell.module.css";

export function MobileNavigation() {
  return (
    <header className={styles.mobileHeader}>
      <div className={styles.mobileBrand}><Brand /></div>
      <NavigationLinks mobile />
    </header>
  );
}
