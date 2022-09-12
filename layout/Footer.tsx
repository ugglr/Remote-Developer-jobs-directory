import styles from "./Footer.module.scss";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <h2 className={styles.title}>Remote</h2>
      <h2 className={styles.title}>Developer</h2>
      <h2 className={styles.title}>Jobs directory.</h2>
    </div>
  </footer>
);

export default Footer;
