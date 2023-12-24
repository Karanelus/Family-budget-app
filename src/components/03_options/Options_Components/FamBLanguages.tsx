import { useFamBContextContainer } from "../../../context/FamBContext";

const FamBLanguages = () => {
  const { languages, languagesChoise, setLanguagesChoise } =
    useFamBContextContainer();

  const fiteredList = [...languages.filter((lang) => lang !== languagesChoise)];

  return (
    <ul className="group z-20 w-7 dark:text-black">
      <li className="cursor-default">{languagesChoise}</li>
      {fiteredList.map((el, index) => {
        const onClickChangeLanguage = () => {
          if (el === "ENG" || el === "POL" || el === "BLR") {
            setLanguagesChoise(el);
          }
        };

        return (
          <li
            key={index}
            onClick={onClickChangeLanguage}
            style={{ transform: `translateY(calc(100%*${index}))` }}
            className="absolute z-20 cursor-pointer opacity-0 group-hover:opacity-100"
          >
            {el}
          </li>
        );
      })}
    </ul>
  );
};

export default FamBLanguages;
