import { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

import styles from "./Layout.module.scss";

type Props = {
  children: ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => (
  <div className={styles.layout}>
    <Navbar />
    <div className={styles.content}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
