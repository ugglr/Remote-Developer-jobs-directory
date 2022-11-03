import Link from "next/link";

import styles from "./NavbarItem.module.scss";

type Props = {
  title: string;
  href: string;
};
const NavbarItem: React.FC<Props> = ({ title, href }) => (
  <Link href={href}>
    <a className={styles.item}>
      <p>{title}</p>
    </a>
  </Link>
);

export default NavbarItem;
