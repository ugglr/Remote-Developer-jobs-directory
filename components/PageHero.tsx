import styles from "./PageHero.module.scss";

type Props = {
  title: string;
  title2?: string;
  subtitle?: string;
};
const PageHero: React.FC<Props> = ({ title, title2 = "", subtitle = "" }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    {title2 && <h1 className={styles.title}>{title2}</h1>}
    {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
  </div>
);

export default PageHero;
