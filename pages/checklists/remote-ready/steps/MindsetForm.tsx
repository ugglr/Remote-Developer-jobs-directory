import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";

import styles from "./Forms.module.scss";

type FormData = {
  mindsetValue: boolean;
};

type FormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const STEP = "mindset";
const MindsetForm: React.FC<FormProps> = ({ mindsetValue, updateFields }) => {
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
          checked={mindsetValue}
          onChange={() => {
            updateFields({ mindsetValue: !mindsetValue });
          }}
        />
      </div>
    </WizardFormStep>
  );
};

export default MindsetForm;
