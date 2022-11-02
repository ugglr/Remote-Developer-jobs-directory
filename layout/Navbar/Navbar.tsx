import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import DrawerNavItem from "./DrawerNavItem";
import styles from "./Navbar.module.scss";
import NavbarItem from "./NavbarItem";

const rightSideLinks = [
  {
    title: "job boards.",
    href: "/job-boards",
  },
  {
    title: "remote companies.",
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

const Navbar = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <>
      <div
        className={[styles.overlay, expanded && styles.overlayExpanded].join(
          " "
        )}
      >
        <div className={styles.overlayContentContainer}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "5vh",
            }}
          >
            <h1 />
            <button type="button" onClick={() => setExpanded(false)}>
              <div className={styles.iconContainer}>
                <FiX className={styles.icon} />
              </div>
            </button>
          </div>

          {rightSideLinks.map(({ title, href }) => {
            return (
              <DrawerNavItem
                key={title}
                {...{
                  title,
                  href,
                  onClick: () => {
                    console.log("clicked");
                    setExpanded(false);
                  },
                }}
              />
            );
          })}
        </div>
      </div>
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
        <div className={styles.menuContainer}>
          <button onClick={() => setExpanded(true)} type="button">
            <div className={styles.iconContainer}>
              <FiMenu className={styles.icon} />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
