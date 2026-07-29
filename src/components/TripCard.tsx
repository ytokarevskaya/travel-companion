import type { TripRecordFields } from "@/data/trips";
import { Rating } from "./Rating";
import styles from "./TripList.module.css";

export function TripCard({ trip }: { trip: TripRecordFields }) {
  return (
    <article className={styles.card}>
      {/* TODO: Implement displaying image from data, use current one as empty state */}
      <div className={`${styles.image} ${styles.cliffs}`} aria-hidden="true">
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
        {/* TODO: Display up to 3 tags */}
        <p className={styles.note} dangerouslySetInnerHTML={{ __html: trip.note }} />
      </div>
    </article>
  );
}
