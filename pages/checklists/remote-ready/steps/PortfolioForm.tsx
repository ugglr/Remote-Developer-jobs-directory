import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";
import CheckboxForm from "./CheckboxForm";

type FormData = {
  portfolioValue: boolean;
};

type FormProps = FormData & {
  listMode: boolean;
  updateFields: (fields: Partial<FormData>) => void;
};
const stepName = "portfolio";
const PortfolioForm: React.FC<FormProps> = ({
  portfolioValue,
  updateFields,
  listMode,
}) => {
  const content = stepsMap.get(stepName);
  const onChange = () => {
    updateFields({ portfolioValue: !portfolioValue });
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
          checked: portfolioValue,
          question: content?.question ?? "question not passed",
        }}
      />
    </WizardFormStep>
  );
};

export default PortfolioForm;
