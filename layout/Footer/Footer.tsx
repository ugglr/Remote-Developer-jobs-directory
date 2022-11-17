import styles from "./Footer.module.scss";
import Copyright from "./components/Copyright";
import FooterLink from "./components/FooterLink";
import IssuesWelcomeBadge from "./components/IssuesWelcomeBadge";
import Socials from "./components/Socials";

const internalLinks = [
  { title: "job boards.", href: "/job-boards" },
  { title: "remote companies.", href: "/remote-companies" },
  { title: "freelancing.", href: "/freelancing" },
  { title: "communities.", href: "/communities" },
];

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.leftContent}>
        <h2 className={styles.title}>Remoet</h2>
        <h2 className={styles.title}>Developer</h2>
        <h2 className={styles.title}>Jobs directory.</h2>

        <div className={styles.linksContainer}>
          {internalLinks.map(({ title, href }) => (
            <FooterLink key={title} {...{ href, title }} />
          ))}
        </div>
      </div>
      <div className={styles.rightContent}>
        <IssuesWelcomeBadge />
      </div>
    </div>

    <Socials />

    <Copyright />
  </footer>
);

export default Footer;
