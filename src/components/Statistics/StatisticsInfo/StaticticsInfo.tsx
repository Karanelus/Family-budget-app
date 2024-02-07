import styles from "../Statistics.styles";
import StatisticsInfoProcent from "./StatisticsInfoProcent/StatisticsInfoProcent";
import StatisticsInfoSalary from "./StatisticsInfoSalary/StatisticsInfoSalary";

const StaticticsInfo = () => {
  return (
    <div className={styles.info.container}>
      <StatisticsInfoSalary />
      <StatisticsInfoProcent />
    </div>
  );
};

export default StaticticsInfo;
