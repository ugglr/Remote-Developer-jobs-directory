import styles from "./Forms.module.scss";

const CheckboxForm: React.FC<{
  name: string;
  question: string;
  checked: boolean;
  listMode: boolean;
  onChange: () => void;
}> = ({ name, question, checked, onChange, listMode }) => (
  <div
    className={[
      styles.formContainer,
      listMode && styles.listModeFormContainer,
      checked && styles.checkedFormContainer,
    ].join(" ")}
  >
    <label
      className={[styles.question, listMode && styles.listModeQuestion].join(
        " "
      )}
      htmlFor={name}
    >
      {question}
    </label>
    <input
      className={[styles.checkbox, listMode && styles.listModeCheckbox].join(
        " "
      )}
      type="checkbox"
      name={name}
      // eslint-disable-next-line react/no-unknown-property
      checked={checked}
      onChange={onChange}
    />
  </div>
);

export default CheckboxForm;
