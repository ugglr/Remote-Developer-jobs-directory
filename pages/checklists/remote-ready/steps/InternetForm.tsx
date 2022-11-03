import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";

import styles from "./Forms.module.scss";

type FormData = {
  internetValue: boolean;
};

type FormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const STEP = "internet";
const InternetForm: React.FC<FormProps> = ({ internetValue, updateFields }) => {
  const content = stepsMap.get(STEP);
  return (
    <WizardFormStep {...{ title: content?.title, body: content?.body }}>
      <div className={styles.formContainer}>
        <label className={styles.question} htmlFor={STEP}>
          {content?.question}
        </label>
        <input
          className={styles.checkbox}
          type="checkbox"
          name={STEP}
          checked={internetValue}
          onChange={() => {
            updateFields({ internetValue: !internetValue });
          }}
        />
      </div>
    </WizardFormStep>
  );
};

export default InternetForm;
