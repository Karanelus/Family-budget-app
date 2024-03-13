import styles from "../Date.styles";
import dateMonth from "../Date.data";
import DateMonthActive from "./DateMonthActive";
import { useAppContextContainer } from "../../../context/AppContext";
import DateMonthUnactive from "./DateMonthUnactive";

const DateMonth = () => {
  const { expensesList, currentDate } = useAppContextContainer();

  const stylesShortcut = styles.dateSection.month;

  return (
    <ul className={stylesShortcut.container}>
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
