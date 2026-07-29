import { AppSidebar } from "@/components/AppSidebar";
import { MobileNavigation } from "@/components/MobileNavigation";
import styles from "@/components/AppShell.module.css";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <AppSidebar />
      <MobileNavigation />
      <main className={styles.content}>
        <div className={styles.contentInner}>{children}</div>
      </main>
    </div>
  );
}
