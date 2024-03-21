import dateMonth from "../Date.data";
import DateMonthActive from "./DateMonthActive";
import { useAppContextContainer } from "../../../context/AppContext";
import DateMonthUnactive from "./DateMonthUnactive";

const DateMonth = () => {
  const { expensesList, currentDate } = useAppContextContainer();

  return (
    <ul className="grid w-full grid-cols-3 grid-rows-4 gap-3 text-center">
      {dateMonth.map((month, index) =>
        expensesList[currentDate.year][index] ? (
          <DateMonthActive month={month.monthName} />
        ) : (
          <DateMonthUnactive month={month.monthName} />
        ),
      )}
    </ul>
  );
};

export default DateMonth;
