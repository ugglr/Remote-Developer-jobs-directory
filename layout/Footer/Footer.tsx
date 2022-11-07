import styles from "./Footer.module.scss";
import Copyright from "./CopyRight";
import FooterLink from "./FooterLink";
import { FiGitPullRequest } from "react-icons/fi";

const links = [
  { title: "job boards.", href: "/job-boards" },
  { title: "remote companies.", href: "/remote-companies" },
  { title: "freelancing.", href: "/freelancing" },
  { title: "communities.", href: "/communities" },
];
const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.leftContent}>
        <h2 className={styles.title}>Remote</h2>
        <h2 className={styles.title}>Developer</h2>
        <h2 className={styles.title}>Jobs directory.</h2>

        <div className={styles.linksContainer}>
          {links.map(({ title, href }) => (
            <FooterLink key={title} {...{ href, title }} />
          ))}
        </div>
      </div>
      <div className={styles.rightContent}>
        <FiGitPullRequest />
        <h3>Issues welcome!</h3>
      </div>
    </div>

    <Copyright />
  </footer>
);

export default Footer;
