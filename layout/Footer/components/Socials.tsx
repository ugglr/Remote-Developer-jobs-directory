import { FiTwitter } from "react-icons/fi";

import styles from "./Socials.module.scss";

const Socials = () => (
  <div className={styles.container}>
    <a
      className={styles.iconContainer}
      href="https://twitter.com/remoet_dev"
      target="_blank"
      rel="noreferrer"
    >
      <FiTwitter className={styles.icon} />
    </a>
  </div>
);

export default Socials;
