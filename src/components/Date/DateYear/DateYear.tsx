import { useAppContextContainer } from "../../../context/AppContext";
import ArrowIcon from "../../../svg/ArrowIcon";
import DateButton from "../DateButton";

const DateYear = () => {
  const { isDarkmode, currentDate, setCurrentDate, expensesList } =
    useAppContextContainer();

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
    <section className="flex w-3/4 items-center justify-between">
      <DateButton
        onClickFunction={onClickChangeYear}
        leftArrow={true}
        icon={<ArrowIcon fill={isDarkmode ? "black" : "lightgray"} />}
      />
      <div className="text-center">{currentDate.year}</div>
      <DateButton
        onClickFunction={onClickChangeYear}
        icon={<ArrowIcon fill={isDarkmode ? "black" : "lightgray"} />}
      />
    </section>
  );
};

export default DateYear;
