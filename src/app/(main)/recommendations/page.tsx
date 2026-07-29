import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { RecommendationCard } from "@/components/RecommendationCard";
import buttonStyles from "@/components/Button.module.css";
import { recommendations } from "@/data/recommendations";
import styles from "./recommendations.module.css";

export const metadata: Metadata = { title: "Recommendations" };

export default function RecommendationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Chosen for you"
        title="Recommendations"
        subtitle="Ideas for your next adventure, just for you."
        action={<button className={`${buttonStyles.button} ${buttonStyles.secondary}`} type="button" aria-disabled="true"><Icon name="sparkles" />Surprise me again</button>}
      />
      <aside className={styles.summary} aria-label="Travel preference summary">
        <div className={styles.summaryIcon}><Icon name="compass" size={24} /></div>
        <div>
          <p className={styles.kicker}>Your travel compass</p>
          <h2>Nature first, with room to wander</h2>
          <p>You tend to love scenic walks, quiet landscapes, charming old towns, and trips that feel relaxed rather than rushed.</p>
        </div>
        <div className={styles.preferences}><span>Nature</span><span>Day trips</span><span>Easy–moderate</span><span>Scenic</span></div>
      </aside>
      <section aria-label="Recommended destinations" className={styles.grid}>
        {recommendations.map((recommendation) => <RecommendationCard key={recommendation.destination} recommendation={recommendation} />)}
      </section>
      <p className={styles.note}><Icon name="sparkles" size={15} />Recommendations are sample content for now. Personal suggestions will arrive in a future version.</p>
    </>
  );
}
