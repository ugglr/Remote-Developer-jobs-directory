import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";

import styles from "./Forms.module.scss";

type FormData = {
  screenSharingValue: boolean;
};

type FormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const STEP = "screen-sharing";
const ScreenSharingForm: React.FC<FormProps> = ({
  screenSharingValue,
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
          checked={screenSharingValue}
          onChange={() => {
            updateFields({ screenSharingValue: !screenSharingValue });
          }}
        />
      </div>
    </WizardFormStep>
  );
};

export default ScreenSharingForm;
