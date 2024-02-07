import { useAppContextContainer } from "../../context/AppContext";
import styles from "./Calculator.styles";
import language from "../../language/language.json";
import CalculatorIncome from "./CalculationIncome/CalculatorIncome";
import CalculationFee from "./CalculationFee/CalculationFee";

const Calculation = () => {
  const { languagesChoise } = useAppContextContainer();

  return (
    <section className={styles.container}>
      <h1>{language[languagesChoise].title_1}</h1>
      <CalculatorIncome />
      <CalculationFee />
    </section>
  );
};

export default Calculation;
