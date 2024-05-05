import { useAppContextContainer } from "../../../../context/AppContext";
import { useTranslation } from "react-i18next";
import StatisticsInfoStroke from "../StatisticsInfoStroke";
import StatisticsInfoProcentFee from "./StatisticsInfoProcentFee";

const StatisticsInfoProcent = () => {
  const { currentDate, expensesList, countPercent } = useAppContextContainer();
  const { t } = useTranslation();

  const expensesListShortcut =
    expensesList[currentDate.year][currentDate.month];

  const procentName = t(`STATISTICS_INFO.PERCENT`);
  const salaryCounting = (): number => {
    let sum = 0;

    expensesListShortcut.persons.forEach((partner) => {
      sum += partner.salary;
    });

    return sum;
  };
  const outgoesCounting = (): number => {
    let sum = 0;

    expensesListShortcut.expenses.forEach((expense) => {
      sum += expense.feeCost;
    });

    return sum;
  };

  const procent = countPercent(salaryCounting(), outgoesCounting());

  return (
    <>
      <StatisticsInfoStroke
        name={procentName}
        summary={procent}
        isPercent={true}
        color="#adadad"
      />
      <section
        data-scroll
        className="-ml-12 h-56 w-[calc(100%+3rem)] overflow-scroll pl-12"
      >
        <StatisticsInfoProcentFee salaryCounting={salaryCounting} />
      </section>
    </>
  );
};

export default StatisticsInfoProcent;
