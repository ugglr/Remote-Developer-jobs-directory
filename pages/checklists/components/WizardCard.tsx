import styles from "./WizardCard.module.scss";

type Props = {
  title: string;
  body: string;
};
const WizardCard: React.FC<Props> = ({ title, body }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default WizardCard;
