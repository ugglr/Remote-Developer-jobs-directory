import styles from "./CategoryCard.module.scss";

type Props = {
  title: string;
  body: string;
};
const CategoryCard: React.FC<Props> = ({ title, body }) => (
  <div className={styles.container}>
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
);

export default CategoryCard;
