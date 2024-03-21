import { useAppContextContainer } from "../../context/AppContext";

const StatisticsDiagram = () => {
  const { countPercent, expensesList, currentDate } = useAppContextContainer();

  const expensesListShortcut =
    expensesList[currentDate.year][currentDate.month];

  const summarySalary = () => {
    let sumSalary = 0;
    expensesListShortcut.persons.forEach((person) => {
      sumSalary += person.salary;
    });
    return sumSalary;
  };

  const summaryFee = (): number => {
    let sum = 0;

    expensesListShortcut.expenses.forEach((expense) => {
      sum += expense.feeCost;
    });

    return sum;
  };

  const countPosition = countPercent(summarySalary(), summaryFee(), true);

  const statusReport = (): string => {
    let rayPlasing = countPosition;
    let statusReportText = `conic-gradient(#adadad ${rayPlasing}%`;

    if (expensesListShortcut.expenses.length === 0) {
      statusReportText += `, #0000 0`;
    } else {
      expensesListShortcut.expenses.forEach((expense) => {
        const nextRayPlasing = countPercent(summarySalary(), expense.feeCost);
        let nextRay = rayPlasing + nextRayPlasing;

        statusReportText += `,${expense.color} ${rayPlasing}% ${nextRay}%`;
        rayPlasing = nextRay;
      });
    }

    statusReportText += `)`;

    return statusReportText;
  };

  const componentStyle = {
    background: statusReport(),
  };

  return (
    <section className="relative mx-auto mb-8 aspect-square w-1/2 dark:brightness-75">
      <article style={componentStyle} className="h-full rounded-full"></article>
    </section>
  );
};

export default StatisticsDiagram;
