import { useAppContextContainer } from "../../context/AppContext";
import FamBBisPartFees from "./01_FamilyIncome/Fees/FamBBisPartFees";
import styles from "./Calculator.styles";
import language from "../../language/language.json";
import CalculatorIncome from "./CalculationIncome/CalculatorIncome";

const Calculation = () => {
  const { languagesChoise } = useAppContextContainer();

  return (
    <section className={styles.container}>
      <h1>{language[languagesChoise].title_1}</h1>
      <CalculatorIncome />
      <FamBBisPartFees />
    </section>
  );
};

export default Calculation;
