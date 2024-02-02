import styles from "../Calculator.styles";
import CalculationIncomePerson from "./CalculationIncomePerson";

const CalculatorIncome = () => {
  return (
    <article className={styles.incomeSection.container}>
      <CalculationIncomePerson />
    </article>
  );
};

export default CalculatorIncome;
