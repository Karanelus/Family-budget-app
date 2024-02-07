import { useAppContextContainer } from "../../../../context/AppContext";
import language from "../../../../language/language.json";
import StartisticsInfoStroke from "../StartisticsInfoStroke";

const StatisticsInfoSalary = () => {
  const { feeList, languagesChoise, partnersInfo } = useAppContextContainer();

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
