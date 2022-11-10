import { useState } from "react";
import { Company } from "../pages/companies";
import styles from "./Card.module.scss";

type Props = {
  company: Company;
};
const CompanyCard: React.FC<Props> = ({ company }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const { name, url, description, careersUrl } = company;
  return (
    <div className={styles.card}>
      <div className={styles.leftContainer}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.subtitle}>{url}</p>

        <div
          className={[styles.body, expanded && styles.bodyExpanded].join(" ")}
        >
          <p>{description}</p>
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
        <a href={careersUrl} target="_blank" className={styles.link}>
          <div className={styles.arrow}>→</div>
        </a>
      </div>
    </div>
  );
};

export default CompanyCard;
