import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";

import styles from "./Forms.module.scss";

type FormData = {
  portfolioValue: boolean;
};

type FormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const PortfolioForm: React.FC<FormProps> = ({
  portfolioValue,
  updateFields,
}) => {
  const content = stepsMap.get("portfolio");
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
          checked={portfolioValue}
          onChange={(e) => {
            updateFields({ portfolioValue: !portfolioValue });
          }}
        />
      </div>
    </WizardFormStep>
  );
};

export default PortfolioForm;
