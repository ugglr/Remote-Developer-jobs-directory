import Link from "next/link";

import styles from "./Logo.module.scss";

const Logo = () => (
  <Link href="/" legacyBehavior={false}>
    <h1 className={styles.logo}>RDJD</h1>
  </Link>
);

export default Logo;
