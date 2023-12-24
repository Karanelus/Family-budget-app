import FamBCurrensyChange from "./Options_Components/FamBCurrensyChange";
import FamBDarkmodeOption from "./Options_Components/FamBDarkmodeOption";
import FamBLanguages from "./Options_Components/FamBLanguages";

const FamBOptionsRender = () => {
  return (
    <section className="absolute right-6 top-6 flex flex-row items-center justify-center gap-4 rounded-xl bg-zinc-500 px-4 py-1 duration-300 hover:shadow-section dark:bg-zinc-700 dark:hover:shadow-sectionDark">
      <FamBCurrensyChange />
      <FamBLanguages />
      <FamBDarkmodeOption />
    </section>
  );
};

export default FamBOptionsRender;
