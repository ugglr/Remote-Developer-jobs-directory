import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";

import styles from "./Forms.module.scss";

type FormData = {
  environmentValue: boolean;
};

type FormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const STEP = "environment";
const EnvironmentForm: React.FC<FormProps> = ({
  environmentValue,
  updateFields,
}) => {
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
          checked={environmentValue}
          onChange={() => {
            updateFields({ environmentValue: !environmentValue });
          }}
        />
      </div>
    </WizardFormStep>
  );
};

export default EnvironmentForm;
