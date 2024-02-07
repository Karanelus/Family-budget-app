import { useAppContextContainer } from "../../context/AppContext";
import OptionSelector from "./OptionSelector";
import styles from "./Option.styles";

const OptionLanguages = () => {
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
