import { useFamBContextContainer } from "../../../context/FamBContext";
import MoonIcon from "../../../svg/MoonIcon";
import SunIcon from "../../../svg/SunIcon";

const FamBDarkmodeOption = () => {
  const { htmlElement, isDarkmode, setIsDarkmode } = useFamBContextContainer();

  const onClickChangeColorMode = () => {
    htmlElement.toggle("dark");
    setIsDarkmode((prev) => !prev);
  };

  return (
    <div onClick={onClickChangeColorMode} className=" aspect-square w-6 cursor-pointer">
      {isDarkmode ? <MoonIcon fill="black" /> : <SunIcon fill="white" />}
    </div>
  );
};

export default FamBDarkmodeOption;
