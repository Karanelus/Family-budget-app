import OptionCurrency from "./OptionCurrency";
import OptionDarkmode from "./OptionDarkmode";
import OptionLanguages from "./OptionLanguages";

const Option = () => {
  return (
    <section className="absolute right-6 top-6 z-50 flex flex-row items-center justify-center gap-4 rounded-xl bg-zinc-500 px-4 py-1 duration-300 hover:shadow-section dark:bg-zinc-700 dark:hover:shadow-sectionDark">
      <OptionCurrency />
      <OptionLanguages />
      <OptionDarkmode />
    </section>
  );
};

export default Option;
