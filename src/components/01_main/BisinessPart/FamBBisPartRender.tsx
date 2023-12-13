import FamBBisPartFees from "./01_FamilyIncome/Fees/FamBBisPartFees";
import FamBBisPartIncome from "./01_FamilyIncome/FamBBisPartIncome";

const FamBBisPartRender = () => {
  return (
    <section className="px-8 py-6 mx-16 my-12 bg-gradient-to-br bg-zinc-500 dark:bg-zinc-700  dark:text-black rounded-3xl w-section h-section hover:shadow-section dark:hover:shadow-sectionDark duration-300">
      <h1 className="mb-4">Count your family budget</h1>
      <FamBBisPartIncome />
      <FamBBisPartFees />
    </section>
  );
};

export default FamBBisPartRender;
