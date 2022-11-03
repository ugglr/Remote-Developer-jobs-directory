import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../../../../content/checklists/remoteReady";
import CheckboxForm from "./CheckboxForm";

type FormProps = {
  checked: boolean;
  listMode: boolean;
  onChange: () => void;
  stepName: string;
};
const FormCard: React.FC<FormProps> = ({
  checked,
  onChange,
  listMode,
  stepName,
}) => {
  const title = stepsMap.get(stepName)?.title;
  const body = stepsMap.get(stepName)?.body;
  const question = stepsMap.get(stepName)?.question ?? "question not passed";
  return (
    <WizardFormStep {...{ title, body, listMode }}>
      <CheckboxForm
        {...{
          listMode,
          name: stepName,
          onChange,
          checked,
          question,
        }}
      />
    </WizardFormStep>
  );
};

export default FormCard;
