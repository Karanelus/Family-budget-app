import { useFamBContextContainer } from "../../../context/FamBContext";

const FamBLanguages = () => {
  const { languages, languagesChoise, setLanguagesChoise } = useFamBContextContainer();

  const fiteredList = [...languages.filter((lang) => lang !== languagesChoise)];

  return (
    <ul className="w-7 dark:text-black z-20 group">
      <li>{languagesChoise}</li>
      {fiteredList.map((el, index) => {
        const onClickChangeLanguage = () => {
          if (el === "ENG" || el === "POL" || el === "RUS") {
            setLanguagesChoise(el);
          }
        };
        console.log(el);

        return (
          <li
            key={index}
            onClick={onClickChangeLanguage}
            className="cursor-pointer absolute z-20 opacity-0 group-hover:opacity-100"
            style={{ transform: `translateY(calc(100%*${index}))` }}
          >
            {el}
          </li>
        );
      })}
    </ul>
  );
};

export default FamBLanguages;
