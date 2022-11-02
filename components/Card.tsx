import { useState } from "react";
import styles from "./Card.module.scss";

type Props = {
  title: string;
  body: string;
  link: string;
};
const Card: React.FC<Props> = ({ title, body, link }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className={styles.card}>
      <div className={styles.leftContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{link}</p>

        <div
          className={[styles.body, expanded && styles.bodyExpanded].join(" ")}
        >
          <p>{body}</p>
        </div>

        <button
          className={styles.btn}
          type="button"
          onClick={() => setExpanded((e) => !e)}
        >
          {expanded ? "collapse" : "See short description..."}
        </button>
      </div>

      <div>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a className={styles.link}>
          <div className={styles.arrow}>→</div>
        </a>
      </div>
    </div>
  );
};

export default Card;

/*

<a href={link} className={styles.link} target="_blank" rel="noopener">

*/
