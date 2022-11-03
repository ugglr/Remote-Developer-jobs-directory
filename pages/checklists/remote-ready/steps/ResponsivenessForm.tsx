import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";
import CheckboxForm from "./CheckboxForm";

import styles from "./Forms.module.scss";

type FormData = {
  responsivenessValue: boolean;
};

type FormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
  listMode: boolean;
};

const stepName = "responsiveness";
const ResponsivenessForm: React.FC<FormProps> = ({
  responsivenessValue,
  updateFields,
  listMode,
}) => {
  const content = stepsMap.get(stepName);
  const onChange = () => {
    updateFields({ responsivenessValue: !responsivenessValue });
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
          checked: responsivenessValue,
          question: content?.question ?? "question not passed",
        }}
      />
    </WizardFormStep>
  );
};

export default ResponsivenessForm;
