import { useAppContextContainer } from "../../../../context/AppContext";
import StartisticsInfoStroke from "../StartisticsInfoStroke";

type Props = {
  salaryCounting: () => number;
};

const StatisticsInfoProcentFee = ({ salaryCounting }: Props) => {
  const { feeList, countPercent } = useAppContextContainer();

  return (
    <>
      {feeList.map((fee) => {
        const feePercent = countPercent(salaryCounting(), fee.feeCost);

        return (
          <StartisticsInfoStroke
            name={fee.name}
            summary={feePercent}
            isPercent={true}
            color={fee.color}
          />
        );
      })}
    </>
  );
};

export default StatisticsInfoProcentFee;
