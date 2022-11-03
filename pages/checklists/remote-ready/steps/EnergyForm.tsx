import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";

import styles from "./Forms.module.scss";

type FormData = {
  energyValue: boolean;
};

type FormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const STEP = "voice-quality";
const EnergyForm: React.FC<FormProps> = ({ energyValue, updateFields }) => {
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
          checked={energyValue}
          onChange={() => {
            updateFields({ energyValue: !energyValue });
          }}
        />
      </div>
    </WizardFormStep>
  );
};

export default EnergyForm;
