import { useAppContextContainer } from "../../../../context/AppContext";
import StartisticsInfoStroke from "../StartisticsInfoStroke";

type Props = {
  salaryCounting: () => number;
};

const StatisticsInfoProcentFee = ({ salaryCounting }: Props) => {
  const { feeList, countPercent } = useAppContextContainer();

  return (
    <>
      {feeList.map((expense) => {
        const feePercent = countPercent(salaryCounting(), expense.feeCost);

        if (expense.isEdited) {
          return null;
        }

        return (
          <StartisticsInfoStroke
            name={expense.name}
            summary={feePercent}
            isPercent={true}
            color={expense.color}
          />
        );
      })}
    </>
  );
};

export default StatisticsInfoProcentFee;
