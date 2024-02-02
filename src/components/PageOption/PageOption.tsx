import PageOptionCurrensy from "./PageOptionCurrensy";
import PageOptionDarkmode from "./PageOptionDarkmode";
import PageOptionLanguages from "./PageOptionLanguages";
import styles from "./PageOption.styles";

const PageOption = () => {
  return (
    <section className={styles.container}>
      <PageOptionCurrensy />
      <PageOptionLanguages />
      <PageOptionDarkmode />
    </section>
  );
};

export default PageOption;
