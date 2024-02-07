import styles from "./Statistics.styles";
import language from "../../language/language.json";
import { useAppContextContainer } from "../../context/AppContext";
import StatisticsDiagram from "./StatisticsDiagram";
import StaticticsInfo from "./StatisticsInfo/StaticticsInfo";

const Statistics = () => {
  const { languagesChoise } = useAppContextContainer();

  return (
    <section className={styles.container}>
      <h2 className="mb-4">{language[languagesChoise].title_2}</h2>
      <StatisticsDiagram />
      <StaticticsInfo />
    </section>
  );
};

export default Statistics;
