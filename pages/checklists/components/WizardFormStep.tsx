import { ReactNode } from "react";
import styles from "./WizardFormStep.module.scss";

type Props = {
  title: string | undefined;
  body: string | undefined;
  children: ReactNode;
};
const WizardFormStep: React.FC<Props> = ({
  title = "Title not passed",
  body = "body not passed",
  children,
}) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      {children}
    </div>
  );
};

export default WizardFormStep;
