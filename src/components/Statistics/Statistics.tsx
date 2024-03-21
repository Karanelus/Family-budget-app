import StatisticsDiagram from "./StatisticsDiagram";
import StaticticsInfo from "./StatisticsInfo/StaticticsInfo";
import { useTranslation } from "react-i18next";

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <section className="mx-16 my-12 flex h-section w-section flex-col content-center rounded-3xl bg-zinc-500 bg-gradient-to-br px-8 py-6 duration-300 hover:shadow-section dark:bg-zinc-700 dark:text-black dark:hover:shadow-sectionDark">
      <h2 className="mb-4">{t(`TITLE.STATISTICS`)}</h2>
      <StatisticsDiagram />
      <StaticticsInfo />
    </section>
  );
};

export default Statistics;
