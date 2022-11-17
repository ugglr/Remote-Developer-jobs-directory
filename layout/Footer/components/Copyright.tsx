import { FiGithub } from "react-icons/fi";
import { SiTypescript } from "react-icons/si";

import styles from "./Copyright.module.scss";

const Copyright = () => (
  <div className={styles.copyrightContainer}>
    <p className={styles.copyText}>Built with</p>
    <SiTypescript className={styles.tsIcon} />
    <p className={styles.copyText}>and ☕️. Open-sourced at</p>
    <a href="https://github.com/ugglr/Remote-Junior-Developer-jobs-directory">
      <FiGithub className={styles.ghIcon} />
    </a>
  </div>
);

export default Copyright;
