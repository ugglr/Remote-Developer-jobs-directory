import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";

import styles from "./Forms.module.scss";

type FormData = {
  voiceQualityValue: boolean;
};

type FormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const STEP = "voice-quality";
const VoiceQualityForm: React.FC<FormProps> = ({
  voiceQualityValue,
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
          checked={voiceQualityValue}
          onChange={() => {
            updateFields({ voiceQualityValue: !voiceQualityValue });
          }}
        />
      </div>
    </WizardFormStep>
  );
};

export default VoiceQualityForm;
