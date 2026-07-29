import type { Trip } from "@/data/trips";
import { Rating } from "./Rating";
import styles from "./TripCard.module.css";

export function TripCard({ trip }: { trip: Trip }) {
  return (
    <article className={styles.card}>
      <div className={`${styles.image} ${styles[trip.landscape]}`} aria-hidden="true">
        <span className={styles.sun} />
        <span className={styles.backdrop} />
        <span className={styles.foreground} />
        <span className={styles.path} />
      </div>
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <div>
            <h2>{trip.destination}</h2>
            <p className={styles.date}>{trip.date}</p>
          </div>
          <Rating value={trip.rating} />
        </div>
        <span className={styles.type}>{trip.type}</span>
        <p className={styles.note}>{trip.note}</p>
      </div>
    </article>
  );
}
