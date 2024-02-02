import FamBGarfPartDiagramm from "./Grafic/FamBGarfPartDiagramm";
import FamBGrafPartCombinerRender from "./Parts/FamBGrafPartCombinerRender";
import language from "../../language/language.json";
import { useAppContextContainer } from "../../context/AppContext";

const FamBGrafPartRender = () => {
  const { languagesChoise } = useAppContextContainer();

  return (
    <section className="mx-16 my-12 flex h-section w-section flex-col content-center rounded-3xl bg-zinc-500 bg-gradient-to-br px-8 py-6 duration-300 hover:shadow-section dark:bg-zinc-700 dark:text-black dark:hover:shadow-sectionDark">
      <h2 className="mb-4">{language[languagesChoise].title_2}</h2>
      <FamBGarfPartDiagramm />
      <FamBGrafPartCombinerRender />
    </section>
  );
};

export default FamBGrafPartRender;
