import StatisticsInfoPercent from "./StatisticsInfoPercent/StatisticsInfoPercent";
import StatisticsInfoSalary from "./StatisticsInfoSalary/StatisticsInfoSalary";

const StatisticsInfo = () => {
  return (
    <div className="md: mx-auto w-3/4">
      <StatisticsInfoSalary />
      <StatisticsInfoPercent />
    </div>
  );
};

export default StatisticsInfo;
