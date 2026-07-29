import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import buttonStyles from "@/components/Button.module.css";
import styles from "./new-trip.module.css";

export const metadata: Metadata = { title: "Add a Trip" };

export default function NewTripPage() {
  return (
    <>
      <PageHeader eyebrow="A new memory" title="Add a Trip" subtitle="Capture the details now, so the feeling stays with you." />
      <form className={styles.form}>
        <div className={styles.formIntro}>
          <span><Icon name="map" size={22} /></span>
          <div><h2>Trip details</h2><p>Tell your future self where the path took you.</p></div>
        </div>
        <div className={styles.fields}>
          <label className={styles.full}>Destination<input name="destination" placeholder="e.g. Bohemian Switzerland" type="text" /></label>
          <label>Date<input name="date" type="date" /></label>
          <label>Trip type<select name="tripType" defaultValue=""><option value="" disabled>Choose a trip type</option><option>Hiking</option><option>City break</option><option>Relaxation</option><option>Adventure</option><option>Road trip</option></select></label>
          <label>Who did you travel with?<select name="company" defaultValue=""><option value="" disabled>Choose company</option><option>Solo</option><option>Partner</option><option>Friends</option><option>Family</option></select></label>
          <label>Weather<select name="weather" defaultValue=""><option value="" disabled>What was the weather?</option><option>Sunny</option><option>Cloudy</option><option>Rainy</option><option>Snowy</option><option>Mixed</option></select></label>
          <fieldset className={`${styles.full} ${styles.ratingField}`}>
            <legend>Rating</legend>
            <div className={styles.ratingOptions}>
              {[1, 2, 3, 4, 5].map((rating) => <label key={rating}><input name="rating" type="radio" value={rating} /><span><Icon name="star" size={18} />{rating}</span></label>)}
            </div>
          </fieldset>
          <label className={styles.full}>Notes<textarea name="notes" placeholder="The best view, the funniest moment, a place you would return to…" rows={6} /></label>
          <div className={styles.full}>
            <span className={styles.fieldLabel}>Photos</span>
            <div className={styles.upload}>
              <Icon name="camera" size={28} />
              <strong>Photos will live here</strong>
              <p>Image upload will be connected in a future version.</p>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p>Your draft is not saved yet.</p>
          {/* TODO: Enable submission after the backend service is connected. */}
          <button className={buttonStyles.button} disabled type="button">Save Trip</button>
        </div>
      </form>
    </>
  );
}
