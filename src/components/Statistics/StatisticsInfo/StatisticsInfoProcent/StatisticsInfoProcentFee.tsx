import { useAppContextContainer } from "../../../../context/AppContext";
import StatisticsInfoStroke from "../StatisticsInfoStroke";

type Props = {
  salaryCounting: () => number;
};

const StatisticsInfoProcentFee = ({ salaryCounting }: Props) => {
  const { expensesList, currentDate, countPercent } = useAppContextContainer();

  return (
    <>
      {expensesList[currentDate.year][currentDate.month].expenses.map(
        (expense) => {
          const feePercent = countPercent(salaryCounting(), expense.feeCost);

          if (expense.isEdited) {
            return null;
          }

          return (
            <StatisticsInfoStroke
              key={expense.name}
              name={expense.name}
              summary={feePercent}
              isPercent={true}
              color={expense.color}
            />
          );
        },
      )}
    </>
  );
};

export default StatisticsInfoProcentFee;
