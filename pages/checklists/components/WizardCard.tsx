import { ReactNode } from "react";

import styles from "./WizardCard.module.scss";

type Props = {
  step: ReactNode;
  isFirstStep: boolean;
  isLastStep: boolean;
  onBack: () => void;
};
const WizardCard: React.FC<Props> = ({
  step,
  onBack,
  isFirstStep,
  isLastStep,
}) => {
  return (
    <div className={styles.container}>
      {step}

      <div className={styles.btnContainer}>
        {!isFirstStep ? (
          <button className={styles.backBtn} type="button" onClick={onBack}>
            ← back
          </button>
        ) : (
          <div />
        )}
        <button
          className={[styles.btn, isLastStep && styles.btnFinish].join(" ")}
          type="submit"
        >
          {isLastStep ? "Finish ✓" : "Next step →"}
        </button>
      </div>
    </div>
  );
};

export default WizardCard;
