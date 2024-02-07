import OptionCurrensy from "./OptionCurrensy";
import OptionDarkmode from "./OptionDarkmode";
import OptionLanguages from "./OptionLanguages";
import styles from "./Option.styles";

const Option = () => {
  return (
    <section className={styles.container}>
      <OptionCurrensy />
      <OptionLanguages />
      <OptionDarkmode />
    </section>
  );
};

export default Option;
