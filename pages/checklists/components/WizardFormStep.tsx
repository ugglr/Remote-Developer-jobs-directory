import { ReactNode } from "react";
import styles from "./WizardFormStep.module.scss";

type Props = {
  title: string | undefined;
  body: string | undefined;
  listMode: boolean;
  children: ReactNode;
};
const WizardFormStep: React.FC<Props> = ({
  title = "Title not passed",
  body = "body not passed",
  listMode,
  children,
}) => {
  return (
    <div className={[listMode && styles.container].join(" ")}>
      <h2
        className={[styles.title, listMode && styles.listModeTitle].join(" ")}
      >
        {title}
      </h2>
      <p className={[styles.body, listMode && styles.listModeBody].join(" ")}>
        {body}
      </p>
      {children}
    </div>
  );
};

export default WizardFormStep;
