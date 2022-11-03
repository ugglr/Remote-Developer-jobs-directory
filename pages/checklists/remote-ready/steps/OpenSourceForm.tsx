import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";
import CheckboxForm from "./CheckboxForm";

import styles from "./Forms.module.scss";

type FormData = {
  openSourceValue: boolean;
};

type FormProps = FormData & {
  listMode: boolean;
  updateFields: (fields: Partial<FormData>) => void;
};
const stepName = "open-source";
const OpenSourceForm: React.FC<FormProps> = ({
  listMode,
  openSourceValue,
  updateFields,
}) => {
  const content = stepsMap.get(stepName);
  const onChange = () => {
    updateFields({ openSourceValue: !openSourceValue });
  };

  return (
    <WizardFormStep
      {...{ title: content?.title, body: content?.body, listMode }}
    >
      <CheckboxForm
        {...{
          listMode,
          name: stepName,
          onChange,
          checked: openSourceValue,
          question: content?.question ?? "question not passed",
        }}
      />
    </WizardFormStep>
  );
};

export default OpenSourceForm;
