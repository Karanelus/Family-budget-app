import { useAppContextContainer } from "../../context/AppContext";
import OptionSelector from "./OptionSelector";
import styles from "./Option.styles";
import { useTranslation } from "react-i18next";

const OptionLanguages = () => {
  const { languages, languagesChoise, setLanguagesChoise } =
    useAppContextContainer();
  const { i18n } = useTranslation();
  const fiteredList = [...languages.filter((lang) => lang !== languagesChoise)];

  return (
    <ul className={styles.containerOption}>
      <li className="cursor-default">{languagesChoise}</li>
      {fiteredList.map((el, index) => {
        const onClickChangeLanguage = () => {
          if (el === "ENG" || el === "POL" || el === "BLR") {
            setLanguagesChoise(el);
            i18n.changeLanguage(el);
          }
        };

        return (
          <OptionSelector
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

export default OptionLanguages;
