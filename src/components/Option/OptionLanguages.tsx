import { useAppContextContainer } from "../../context/AppContext";
import { useTranslation } from "react-i18next";
import OptionSelector from "./OptionSelector";

const OptionLanguages = () => {
  const { languages, languagesChoise, setLanguagesChoise } =
    useAppContextContainer();
  const { i18n } = useTranslation();
  const fiteredList = [...languages.filter((lang) => lang !== languagesChoise)];

  return (
    <ul className="group w-7 dark:text-black">
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
