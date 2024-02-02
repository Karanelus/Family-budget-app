import { useAppContextContainer } from "../../context/AppContext";
import PageOptionSelector from "./PageOptionSelector";
import styles from "./PageOption.styles";

const PageOptionLanguages = () => {
  const { languages, languagesChoise, setLanguagesChoise } =
    useAppContextContainer();

  const fiteredList = [...languages.filter((lang) => lang !== languagesChoise)];

  return (
    <ul className={styles.containerOption}>
      <li className="cursor-default">{languagesChoise}</li>
      {fiteredList.map((el, index) => {
        const onClickChangeLanguage = () => {
          if (el === "ENG" || el === "POL" || el === "BLR") {
            setLanguagesChoise(el);
          }
        };

        return (
          <PageOptionSelector
            key={index}
            onClickFunction={onClickChangeLanguage}
            spaceIndex={index}
            selectorText={el}
          />
        );
      })}
    </ul>
  );
};

export default PageOptionLanguages;
