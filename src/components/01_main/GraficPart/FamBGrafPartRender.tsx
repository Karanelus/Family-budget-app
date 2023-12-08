import FamBGarfPartDiagramm from "./Grafic/FamBGarfPartDiagramm";
import FamBGrafPartCombinerRender from "./Parts/FamBGrafPartCombinerRender";

const FamBGrafPartRender = () => {
  return (
    <section className="px-8 py-6 mx-16 my-12 bg-gradient-to-br bg-zinc-500 rounded-3xl w-section h-section flex flex-col content-center hover:shadow-section duration-300">
      <h2 className="mb-4">Statistics</h2>
      <FamBGarfPartDiagramm />
      <FamBGrafPartCombinerRender />
    </section>
  );
};

export default FamBGrafPartRender;
