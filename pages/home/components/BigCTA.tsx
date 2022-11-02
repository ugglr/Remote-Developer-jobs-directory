import Link from "next/link";

import styles from "./BigCta.module.scss";

const BigCTA = () => (
  <div className={styles.container}>
    <Link href={"/checklists/remote-ready"}>
      <a className={styles.link}>
        <div className={styles.content}>
          <div>
            <h2 className={styles.title}>Are you remote ready?</h2>

            <p className={styles.body}>
              Go through the remote ready wizard and get some helpful tips
            </p>
          </div>

          <div className={styles.btn}>→</div>
        </div>
      </a>
    </Link>
  </div>
);

export default BigCTA;
