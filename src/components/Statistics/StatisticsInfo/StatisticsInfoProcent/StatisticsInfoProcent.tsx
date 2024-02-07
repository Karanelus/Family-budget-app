import { useAppContextContainer } from "../../../../context/AppContext";
import StartisticsInfoStroke from "../StartisticsInfoStroke";
import language from "../../../../language/language.json";
import StatisticsInfoProcentFee from "./StatisticsInfoProcentFee";

const StatisticsInfoProcent = () => {
  const { languagesChoise, partnersInfo, feeList, countPercent } =
    useAppContextContainer();

  const procentName = language[languagesChoise]["title_2--perc"];
  const salaryCounting = (): number => {
    let sum = 0;

    partnersInfo.forEach((partner) => {
      sum += partner.salary;
    });

    return sum;
  };
  const outgoesCounting = (): number => {
    let sum = 0;

    feeList.forEach((fee) => {
      sum += fee.feeCost;
    });

    return sum;
  };

  const procent = countPercent(salaryCounting(), outgoesCounting());

  return (
    <div className="w-full">
      <StartisticsInfoStroke
        name={procentName}
        summary={procent}
        isPercent={true}
        color="#adadad"
      />
      <StatisticsInfoProcentFee salaryCounting={salaryCounting} />
    </div>
  );
};

export default StatisticsInfoProcent;
