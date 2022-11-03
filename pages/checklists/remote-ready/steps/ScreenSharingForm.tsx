import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";
import CheckboxForm from "./CheckboxForm";

type FormData = {
  screenSharingValue: boolean;
};

type FormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
  listMode: boolean;
};

const stepName = "screen-sharing";
const ScreenSharingForm: React.FC<FormProps> = ({
  screenSharingValue,
  updateFields,
  listMode,
}) => {
  const content = stepsMap.get(stepName);
  const onChange = () => {
    updateFields({ screenSharingValue: !screenSharingValue });
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
          checked: screenSharingValue,
          question: content?.question ?? "question not passed",
        }}
      />
    </WizardFormStep>
  );
};

export default ScreenSharingForm;
