import WizardFormStep from "../../components/WizardFormStep";
import { stepsMap } from "../steps";
import CheckboxForm from "./CheckboxForm";

type FormData = {
  blogValue: boolean;
};

type FormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
  listMode: boolean;
};

const stepName = "blog";
const BlogForm: React.FC<FormProps> = ({
  blogValue,
  updateFields,
  listMode,
}) => {
  const content = stepsMap.get(stepName);
  const onChange = () => {
    updateFields({ blogValue: !blogValue });
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
          checked: blogValue,
          question: content?.question ?? "question not passed",
        }}
      />
    </WizardFormStep>
  );
};

export default BlogForm;
