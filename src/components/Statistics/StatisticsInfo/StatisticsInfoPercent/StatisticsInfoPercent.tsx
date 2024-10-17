import { useAppContextContainer } from "../../../../context/AppContext";
import { useTranslation } from "react-i18next";
import StatisticsInfoStroke from "../StatisticsInfoStroke";
import StatisticsInfoPercentFee from "./StatisticsInfoPercentFee";

const StatisticsInfoPercent = () => {
  const { currentDate, expensesList, countPercent } = useAppContextContainer();
  const { t } = useTranslation();

  const expensesListShortcut =
    expensesList[currentDate.year][currentDate.month];

  const percentName = t(`STATISTICS_INFO.PERCENT`);

  const summarySalary = expensesListShortcut.persons.reduce(
    (a, b) => a + b.salary,
    0,
  );

  const summaryFee = expensesListShortcut.expenses.reduce(
    (a, b) => a + b.feeCost,
    0,
  );

  const percent = countPercent(summarySalary, summaryFee);

  return (
    <>
      <StatisticsInfoStroke
        name={percentName}
        summary={percent}
        isPercent={true}
        color="#adadad"
      />
      <section
        data-scroll
        className="-ml-12 h-56 w-[calc(100%+3rem)] overflow-scroll pl-12"
      >
        <StatisticsInfoPercentFee salaryCounting={summarySalary} />
      </section>
    </>
  );
};

export default StatisticsInfoPercent;
