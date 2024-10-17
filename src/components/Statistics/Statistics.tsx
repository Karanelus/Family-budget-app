import { useTranslation } from "react-i18next";
import StatisticsDiagram from "./StatisticsDiagram";
import StatisticsInfo from "./StatisticsInfo/StaticticsInfo";

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <section className="mx-16 my-12 flex h-section w-section flex-col content-center rounded-3xl bg-zinc-500 bg-gradient-to-br px-8 py-6 duration-300 hover:shadow-section dark:bg-zinc-700 dark:text-black dark:hover:shadow-sectionDark">
      <h2 className="mb-4">{t(`TITLE.STATISTICS`)}</h2>
      <section className=" mx-auto h-[calc(100%-3.25rem)] w-1/2">
        <StatisticsDiagram />
        <StatisticsInfo />
      </section>
    </section>
  );
};

export default Statistics;
