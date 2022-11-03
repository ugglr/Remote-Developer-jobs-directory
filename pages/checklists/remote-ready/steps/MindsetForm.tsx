import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";
import CheckboxForm from "./CheckboxForm";

import styles from "./Forms.module.scss";

type FormData = {
  mindsetValue: boolean;
};

type FormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
  listMode: boolean;
};

const stepName = "mindset";
const MindsetForm: React.FC<FormProps> = ({
  mindsetValue,
  updateFields,
  listMode,
}) => {
  const content = stepsMap.get(stepName);
  const onChange = () => {
    updateFields({ mindsetValue: !mindsetValue });
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
          checked: mindsetValue,
          question: content?.question ?? "question not passed",
        }}
      />
    </WizardFormStep>
  );
};

export default MindsetForm;
