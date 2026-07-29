import type { ReactNode } from "react";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  action?: ReactNode;
};

export function PageHeader({ eyebrow, title, subtitle, action }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </header>
  );
}
