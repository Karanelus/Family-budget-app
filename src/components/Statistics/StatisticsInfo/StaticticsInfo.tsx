import StatisticsInfoProcent from "./StatisticsInfoProcent/StatisticsInfoProcent";
import StatisticsInfoSalary from "./StatisticsInfoSalary/StatisticsInfoSalary";

const StaticticsInfo = () => {
  return (
    <div className="mx-auto w-3/4 md:w-1/2">
      <StatisticsInfoSalary />
      <StatisticsInfoProcent />
    </div>
  );
};

export default StaticticsInfo;
