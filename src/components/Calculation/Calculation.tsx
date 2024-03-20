import styles from "./Calculator.styles";
import CalculatorIncome from "./CalculationIncome/CalculatorIncome";
import CalculationFee from "./CalculationFee/CalculationFee";
import CalculationDateButton from "./CalculationDateButton";
import { useTranslation } from "react-i18next";

const Calculation = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <h1>{t(`TITLE.MAIN`)}</h1>
      <CalculationDateButton />
      <CalculatorIncome />
      <CalculationFee />
    </section>
  );
};

export default Calculation;
