import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";
import CheckboxForm from "./CheckboxForm";

type GithubData = {
  githubValue: boolean;
};

type GithubFormProps = GithubData & {
  listMode: boolean;
  updateFields: (fields: Partial<GithubData>) => void;
};
const stepName = "github";
const GithubForm: React.FC<GithubFormProps> = ({
  githubValue,
  updateFields,
  listMode,
}) => {
  const content = stepsMap.get(stepName);
  const onChange = () => {
    updateFields({ githubValue: !githubValue });
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
          checked: githubValue,
          question: content?.question ?? "question not passed",
        }}
      />
    </WizardFormStep>
  );
};

export default GithubForm;
