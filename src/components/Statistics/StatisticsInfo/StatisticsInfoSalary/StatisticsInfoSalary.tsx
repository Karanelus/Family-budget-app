import { useTranslation } from "react-i18next";
import { useAppContextContainer } from "../../../../context/AppContext";
import StatisticsInfoStroke from "../StatisticsInfoStroke";

const StatisticsInfoSalary = () => {
  const { expensesList, currentDate } = useAppContextContainer();

  const { t } = useTranslation();

  const expensesListShortcut =
    expensesList[currentDate.year][currentDate.month];

  const summarySalary = expensesListShortcut.persons.reduce(
    (a, b) => a + b.salary,
    0,
  );

  const summaryFee = expensesListShortcut.expenses.reduce(
    (a, b) => a + b.feeCost,
    0,
  );

  const salaryInfoLines = [
    {
      name: t(`STATISTICS_INFO.SUM_SALARY`),
      summary: summarySalary,
    },
    {
      name: t(`STATISTICS_INFO.SUM_EXPENSES`),
      summary: summaryFee,
    },
    {
      name: t(`STATISTICS_INFO.FAMILY_USE`),
      summary: summarySalary - summaryFee,
    },
  ];

  return (
    <section className="mb-4 w-full">
      {salaryInfoLines.map((line) => (
        <StatisticsInfoStroke
          key={line.name}
          name={line.name}
          summary={line.summary}
        />
      ))}
    </section>
  );
};

export default StatisticsInfoSalary;
