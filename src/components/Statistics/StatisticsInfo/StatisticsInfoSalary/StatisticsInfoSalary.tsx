import { useAppContextContainer } from "../../../../context/AppContext";
import language from "../../../../language/language.json";
import StartisticsInfoStroke from "../StartisticsInfoStroke";

const StatisticsInfoSalary = () => {
  const { expensesList, currentDate, languagesChoise } =
    useAppContextContainer();

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
      name: language[languagesChoise]["title_2--sumSalary"],
      summary: salaryCounting(),
    },
    {
      name: language[languagesChoise]["title_2--sumFee"],
      summary: outgoesCounting(),
    },
    {
      name: language[languagesChoise]["title_2--forFamUse"],
      summary: salaryCounting() - outgoesCounting(),
    },
  ];

  return (
    <article className="mb-4 w-full">
      {salaryInfoLines.map((line) => (
        <StartisticsInfoStroke name={line.name} summary={line.summary} />
      ))}
    </article>
  );
};

export default StatisticsInfoSalary;
