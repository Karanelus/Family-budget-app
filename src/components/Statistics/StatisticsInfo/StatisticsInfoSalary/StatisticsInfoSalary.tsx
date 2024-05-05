import { useTranslation } from "react-i18next";
import { useAppContextContainer } from "../../../../context/AppContext";
import StatisticsInfoStroke from "../StatisticsInfoStroke";

const StatisticsInfoSalary = () => {
  const { expensesList, currentDate } = useAppContextContainer();

  const { t } = useTranslation();

  const expensesListShortcut =
    expensesList[currentDate.year][currentDate.month];

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

  const salaryInfoLines = [
    {
      name: t(`STATISTICS_INFO.SUM_SALARY`),
      summary: salaryCounting(),
    },
    {
      name: t(`STATISTICS_INFO.SUM_EXPENSES`),
      summary: outgoesCounting(),
    },
    {
      name: t(`STATISTICS_INFO.FAMILY_USE`),
      summary: salaryCounting() - outgoesCounting(),
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
