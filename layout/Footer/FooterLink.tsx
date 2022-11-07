import Link from "next/link";

import styles from "./FooterLink.module.scss";

type Props = {
  title: string;
  href: string;
};
const FooterLink: React.FC<Props> = ({ title, href }) => (
  <Link {...{ href, legacyBehavior: false }}>
    <h3 className={styles.title}>{title}</h3>
  </Link>
);

export default FooterLink;
