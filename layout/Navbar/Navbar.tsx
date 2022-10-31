import styles from "./Navbar.module.scss";
import NavbarItem from "./NavbarItem";

const rightSideLinks = [
  {
    title: "job boards.",
    href: "/job-boards",
  },
  {
    title: "remote companies",
    href: "/remote-companies",
  },
  {
    title: "freelancing.",
    href: "/freelancing",
  },
  {
    title: "communities.",
    href: "/communities",
  },
];

const Navbar = () => (
  <div className={styles.container}>
    <NavbarItem title="RDJD" href="/" />

    <div className={styles.rightContainer}>
      {rightSideLinks.map(({ title, href }, index) => {
        const isLast = index === rightSideLinks.length - 1;
        return (
          <>
            <NavbarItem key={title} {...{ title, href }} />
            {!isLast && <div className={styles.itemSpacing} />}
          </>
        );
      })}
    </div>
  </div>
);

export default Navbar;
