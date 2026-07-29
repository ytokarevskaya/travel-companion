import type { Recommendation } from "@/data/recommendations";
import { Icon } from "./Icon";
import styles from "./RecommendationCard.module.css";

export function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  return (
    <article className={styles.card}>
      <div className={`${styles.illustration} ${styles[recommendation.illustration]}`} aria-hidden="true">
        <span className={styles.sun} />
        <span className={styles.horizon} />
        <Icon name="compass" size={26} />
      </div>
      <div className={styles.body}>
        <div className={styles.topline}>
          <span>{recommendation.type}</span>
          <span className={`${styles.match} ${recommendation.match === "Medium" ? styles.medium : ""}`}>{recommendation.match} match</span>
        </div>
        <h2>{recommendation.destination}</h2>
        <div className={styles.tags}>{recommendation.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <p className={styles.description}>{recommendation.description}</p>
        <div className={styles.reason}>
          <Icon name="sparkles" size={18} />
          <p><strong>Why it fits you</strong>{recommendation.reason}</p>
        </div>
      </div>
    </article>
  );
}
