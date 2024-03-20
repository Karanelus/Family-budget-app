import { useAppContextContainer } from "../../../context/AppContext";
import ArrowIcon from "../../../svg/ArrowIcon";
import DateButton from "../DateButton";
import styles from "../Date.styles";

const DateYear = () => {
  const { isDarkmode, currentDate, setCurrentDate, expensesList } =
    useAppContextContainer();
  const stylesShortcut = styles.dateSection.year;

  const onClickChangeYear = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.classList.contains("rotate-180")) {
      if (currentDate.year - 1 in expensesList) {
        setCurrentDate((prev) => ({ ...prev, year: prev.year - 1 }));
      }
    }

    if (currentDate.year + 1 in expensesList) {
      setCurrentDate((prev) => ({ ...prev, year: prev.year + 1 }));
    }
  };

  return (
    <section className={stylesShortcut.container}>
      <DateButton
        onClickFunction={onClickChangeYear}
        leftArrow={true}
        icon={<ArrowIcon fill={isDarkmode ? "ligthgray" : "#999999"} />}
      />
      <div className="text-center">{currentDate.year}</div>
      <DateButton
        onClickFunction={onClickChangeYear}
        icon={<ArrowIcon fill={isDarkmode ? "ligthgray" : "#999999"} />}
      />
    </section>
  );
};

export default DateYear;
