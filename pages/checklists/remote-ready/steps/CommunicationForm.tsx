import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";

import styles from "./Forms.module.scss";

type FormData = {
  communicationValue: boolean;
};

type FormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const STEP = "communication";
const CommunicationForm: React.FC<FormProps> = ({
  communicationValue,
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
          checked={communicationValue}
          onChange={() => {
            updateFields({ communicationValue: !communicationValue });
          }}
        />
      </div>
    </WizardFormStep>
  );
};

export default CommunicationForm;
