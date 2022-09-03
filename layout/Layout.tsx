import { ReactNode } from "react";

import styles from "./Layout.module.scss";

type Props = {
  children: ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;
