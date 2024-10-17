import { useAppContextContainer } from "../../context/AppContext";

const StatisticsDiagram = () => {
  const { countPercent, expensesList, currentDate } = useAppContextContainer();

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

  const countPosition = countPercent(summarySalary, summaryFee, true);

  const statusReport = (): string => {
    let rayPlacing = countPosition;
    let statusReportText = `conic-gradient(#adadad ${rayPlacing}%`;

    if (expensesListShortcut.expenses.length === 0) {
      statusReportText += `, #0000 0`;
    } else {
      expensesListShortcut.expenses.forEach((expense) => {
        const nextRayPlacing = countPercent(summarySalary, expense.feeCost);
        let nextRay = rayPlacing + nextRayPlacing;

        statusReportText += `,${expense.color} ${rayPlacing}% ${nextRay}%`;
        rayPlacing = nextRay;
      });
    }

    statusReportText += `)`;

    return statusReportText;
  };

  const componentStyle = {
    background: statusReport(),
  };

  return (
    <section className="relative mx-auto mb-8 aspect-square w-full dark:brightness-75">
      <article style={componentStyle} className="h-full rounded-full"></article>
    </section>
  );
};

export default StatisticsDiagram;
