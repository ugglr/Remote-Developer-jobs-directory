import { FiTwitter } from "react-icons/fi";
import { twitterUrl } from "../../../constants";

import styles from "./Socials.module.scss";

const Socials = () => (
  <div className={styles.container}>
    <a
      className={styles.iconContainer}
      href={`${twitterUrl}`}
      target="_blank"
      rel="noreferrer"
    >
      <FiTwitter className={styles.icon} />
    </a>
  </div>
);

export default Socials;
