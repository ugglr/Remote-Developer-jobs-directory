import { FiGitPullRequest } from "react-icons/fi";

import styles from "./IssuesWelcomeBadge.module.scss";

const IssuesWelcomeBadge: React.FC = () => (
  <a
    href="https://github.com/ugglr/Remote-Junior-Developer-jobs-directory/issues"
    target="_blank"
    rel="noreferrer"
  >
    <div className={styles.circle}>
      <FiGitPullRequest className={styles.prIcon} />
      <h3 className={styles.prText}>issues</h3>
      <h3 className={styles.prText}>welcome</h3>
    </div>
  </a>
);

export default IssuesWelcomeBadge;
