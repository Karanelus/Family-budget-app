import { useAppContextContainer } from "../../../context/AppContext";
import ArrowIcon from "../../../svg/ArrowIcon";
import DateButton from "../DateButton";
import styles from "../Date.styles";

type Props = {};

const DateYear = (props: Props) => {
  const { isDarkmode } = useAppContextContainer();
  const stylesShortcut = styles.dateSection.year;

  const onClickFuckYourMom = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.contains("rotate-180")
      ? alert("left")
      : alert("right");
  };

  return (
    <section className={stylesShortcut.container}>
      <DateButton
        onClickFunction={onClickFuckYourMom}
        leftArrow={true}
        icon={<ArrowIcon fill={isDarkmode ? "ligthgray" : "#999999"} />}
      />
      <div className="text-center">2024</div>
      <DateButton
        onClickFunction={onClickFuckYourMom}
        icon={<ArrowIcon fill={isDarkmode ? "ligthgray" : "#999999"} />}
      />
    </section>
  );
};

export default DateYear;
