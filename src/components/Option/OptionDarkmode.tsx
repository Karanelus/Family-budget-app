import { useAppContextContainer } from "../../context/AppContext";
import MoonIcon from "../../svg/MoonIcon";
import SunIcon from "../../svg/SunIcon";
import styles from "./Option.styles";

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
      className={styles.containerOption + " cursor-pointer"}
    >
      {currentIcon}
    </div>
  );
};

export default OptionDarkmode;
