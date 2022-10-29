import styles from "./Card.module.scss";

type Props = {
  title: string;
  body: string;
  link: string;
};
const Card: React.FC<Props> = ({ title, body, link }) => (
  // Keep referrer so sites can see where traffic is coming from.
  // eslint-disable-next-line react/jsx-no-target-blank
  <a href={link} className={styles.link} target="_blank" rel="noopener">
    <div className={styles.card}>
      <div className={styles.left}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.body}>{body}</p>
      </div>
      <div className={styles.right}>
        <h3 className={styles.arrow}>→</h3>
      </div>
    </div>
  </a>
);

export default Card;
