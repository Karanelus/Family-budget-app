import FamBDarkmodeOption from "./Options_Components/FamBDarkmodeOption";
import FamBLanguages from "./Options_Components/FamBLanguages";

const FamBOptionsRender = () => {
  return (
    <section className="absolute bg-zinc-500 dark:bg-zinc-700 flex flex-row py-1 px-4 right-6 top-6 gap-4 rounded-xl hover:shadow-section dark:hover:shadow-sectionDark duration-300 justify-center items-center">
      <div className="w-fill dark:text-black cursor-not-allowed" title="Coming soon">
        PLN
      </div>
      <FamBLanguages />
      <FamBDarkmodeOption />
    </section>
  );
};

export default FamBOptionsRender;
