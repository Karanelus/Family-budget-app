import StatisticsInfoProcent from "./StatisticsInfoProcent/StatisticsInfoProcent";
import StatisticsInfoSalary from "./StatisticsInfoSalary/StatisticsInfoSalary";

const StaticticsInfo = () => {
  return (
    <div className="md: mx-auto w-3/4">
      <StatisticsInfoSalary />
      <StatisticsInfoProcent />
    </div>
  );
};

export default StaticticsInfo;
