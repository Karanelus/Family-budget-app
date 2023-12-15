import { useFamBContextContainer } from "../../../context/FamBContext";
import FamBGarfPartDiagramm from "./Grafic/FamBGarfPartDiagramm";
import FamBGrafPartCombinerRender from "./Parts/FamBGrafPartCombinerRender";
import language from "../../../language/language.json";

const FamBGrafPartRender = () => {
  const { languagesChoise } = useFamBContextContainer();

  return (
    <section className="px-8 py-6 mx-16 my-12 bg-gradient-to-br bg-zinc-500 dark:bg-zinc-700 dark:text-black rounded-3xl w-section h-section flex flex-col content-center hover:shadow-section dark:hover:shadow-sectionDark duration-300">
      <h2 className="mb-4">{language[languagesChoise].title_2}</h2>
      <FamBGarfPartDiagramm />
      <FamBGrafPartCombinerRender />
    </section>
  );
};

export default FamBGrafPartRender;
