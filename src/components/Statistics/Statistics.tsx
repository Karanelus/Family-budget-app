import styles from "./Statistics.styles";
import StatisticsDiagram from "./StatisticsDiagram";
import StaticticsInfo from "./StatisticsInfo/StaticticsInfo";
import { useTranslation } from "react-i18next";

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <h2 className="mb-4">{t(`TITLE.STATISTICS`)}</h2>
      <StatisticsDiagram />
      <StaticticsInfo />
    </section>
  );
};

export default Statistics;
