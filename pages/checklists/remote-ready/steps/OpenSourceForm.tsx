import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";

import styles from "./Forms.module.scss";

type FormData = {
  openSourceValue: boolean;
};

type FormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const OpenSourceForm: React.FC<FormProps> = ({
  openSourceValue,
  updateFields,
}) => {
  const content = stepsMap.get("open-source");
  return (
    <WizardFormStep {...{ title: content?.title, body: content?.body }}>
      <div className={styles.formContainer}>
        <label className={styles.question} htmlFor="github">
          {content?.question}
        </label>
        <input
          className={styles.checkbox}
          type="checkbox"
          name="github"
          checked={openSourceValue}
          onChange={(e) => {
            updateFields({ openSourceValue: !openSourceValue });
          }}
        />
      </div>
    </WizardFormStep>
  );
};

export default OpenSourceForm;
