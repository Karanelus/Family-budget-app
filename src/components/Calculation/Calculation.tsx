import CalculatorIncome from "./CalculationIncome/CalculatorIncome";
import CalculationExpense from "./CalculationExpenses/CalculationExpense";
import CalculationDateButton from "./CalculationDateButton";
import { useTranslation } from "react-i18next";

const Calculation = () => {
  const { t } = useTranslation();

  return (
    <section className="relative mx-16 my-12 h-section w-section rounded-3xl bg-zinc-500 bg-gradient-to-br px-8 py-6 duration-300 hover:shadow-section dark:bg-zinc-700 dark:text-black dark:hover:shadow-sectionDark">
      <h1>{t(`TITLE.MAIN`)}</h1>
      <CalculationDateButton />
      <CalculatorIncome />
      <CalculationExpense />
    </section>
  );
};

export default Calculation;
