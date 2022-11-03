import Link from "next/link";
import styles from "./CategoryCard.module.scss";

type Props = {
  title: string;
  body: string;
  href: string;
};
const CategoryCard: React.FC<Props> = ({ title, body, href = "/" }) => (
  <Link {...{ href }}>
    <a className={styles.link}>
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.body}>{body}</p>
        </div>

        <div className={styles.btn}>→</div>
      </div>
    </a>
  </Link>
);

export default CategoryCard;
