import { useAppContextContainer } from "../../context/AppContext";
import MoonIcon from "../../svg/MoonIcon";
import SunIcon from "../../svg/SunIcon";

const OptionDarkmode = () => {
  const { htmlElement, isDarkmode, setIsDarkmode } = useAppContextContainer();

  const onClickChangeColorMode = () => {
    htmlElement.toggle("dark");
    setIsDarkmode((prev) => !prev);
  };

  const currentIcon = isDarkmode ? (
    <MoonIcon fill="black" />
  ) : (
    <SunIcon fill="white" />
  );

  return (
    <div
      onClick={onClickChangeColorMode}
      className="group w-7 cursor-pointer dark:text-black"
    >
      {currentIcon}
    </div>
  );
};

export default OptionDarkmode;
