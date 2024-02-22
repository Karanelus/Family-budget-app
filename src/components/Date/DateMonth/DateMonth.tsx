import styles from "../Date.styles";
import dateMonth from "../Date.data";
import DateMonthActive from "./DateMonthActive";
// import DateMonthUnactive from "./DateMonthUnactive";

const DateMonth = () => {
  const stylesShortcut = styles.dateSection.month;

  return (
    <ul className={stylesShortcut.container}>
      {dateMonth.map((month) => (
        <DateMonthActive month={month.monthName} />
        // <DateMonthUnactive month={month.monthName} />
      ))}
    </ul>
  );
};

export default DateMonth;
