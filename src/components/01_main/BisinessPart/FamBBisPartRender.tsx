import FamBBisPartFees from "./01_FamilyIncome/Fees/FamBBisPartFees";
import FamBBisPartIncome from "./01_FamilyIncome/FamBBisPartIncome";
import language from "../../../language/language.json";
import { useFamBContextContainer } from "../../../context/FamBContext";

const FamBBisPartRender = () => {
  const { languagesChoise } = useFamBContextContainer();

  return (
    <section className="mx-16 my-12 h-section w-section rounded-3xl bg-zinc-500 bg-gradient-to-br  px-8 py-6 duration-300 hover:shadow-section dark:bg-zinc-700 dark:text-black dark:hover:shadow-sectionDark">
      <h1 className="mb-4">{language[languagesChoise].title_1}</h1>
      <FamBBisPartIncome />
      <FamBBisPartFees />
    </section>
  );
};

export default FamBBisPartRender;
