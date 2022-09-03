import styles from "./Card.module.scss";

type Props = {
  title: string;
  body: string;
  link: string;
};
const Card: React.FC<Props> = ({ title, body, link }) => (
  <div className={styles.card}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.body}>{body}</p>
  </div>
);

export default Card;
