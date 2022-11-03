import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";

import styles from "./Forms.module.scss";

type GithubData = {
  githubValue: boolean;
};

type GithubFormProps = GithubData & {
  updateFields: (fields: Partial<GithubData>) => void;
};

const GithubForm: React.FC<GithubFormProps> = ({
  githubValue,
  updateFields,
}) => {
  const content = stepsMap.get("github");
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
          checked={githubValue}
          onChange={(e) => {
            updateFields({ githubValue: !githubValue });
          }}
        />
      </div>
    </WizardFormStep>
  );
};

export default GithubForm;
