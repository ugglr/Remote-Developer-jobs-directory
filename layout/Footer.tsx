import { FiGithub } from "react-icons/fi";
import { SiTypescript } from "react-icons/si";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <h2 className={styles.title}>Remote</h2>
      <h2 className={styles.title}>Developer</h2>
      <h2 className={styles.title}>Jobs directory.</h2>
    </div>
    <div className={styles.copyrightContainer}>
      <p className={styles.copyText}>Built with</p>
      <SiTypescript className={styles.tsIcon} />
      <p className={styles.copyText}>and ☕️. Open-sourced at</p>
      <a href="https://github.com/ugglr/Remote-Junior-Developer-jobs-directory">
        <FiGithub className={styles.ghIcon} />
      </a>
    </div>
  </footer>
);

export default Footer;
