import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { TripList } from "@/components/TripList";
import buttonStyles from "@/components/Button.module.css";
import styles from "./journal.module.css";

export const metadata: Metadata = { title: "My Journal" };

export default function JournalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Your travel story"
        title="My Journal"
        subtitle="All your trips and memories in one place."
        action={
          <Link className={buttonStyles.button} href="/trips/new">
            <Icon name="plus" />
            Add a new trip
          </Link>
        }
      />
      <section aria-label="Past trips" className={styles.grid}>
        <TripList />
      </section>
    </>
  );
}
