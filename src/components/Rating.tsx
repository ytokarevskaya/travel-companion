import { Icon } from "./Icon";
import styles from "./Rating.module.css";

export function Rating({ value }: { value: number }) {
  return (
    <span className={styles.rating} aria-label={`${value} out of 5 stars`}>
      <Icon name="star" size={15} />
      <span>{value}.0</span>
    </span>
  );
}
