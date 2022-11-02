import Link from "next/link";

import styles from "./DrawerNavItem.module.scss";

type Props = {
  title: string;
  href: string;
  onClick: () => void;
};
const DrawerNavItem: React.FC<Props> = ({ title, href, onClick }) => (
  <Link {...{ href, onClick, legacyBehavior: false }}>
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  </Link>
);

export default DrawerNavItem;
