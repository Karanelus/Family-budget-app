import { useAppContextContainer } from "../../../context/AppContext";
import DateMonthActionButton from "./DateMonthActionButton";

type Props = {
  month: string;
  monthNumber: number;
};

const DateMonthActive = ({ month, monthNumber }: Props) => {
  const { expensesList, setExpensesList, currentDate } =
    useAppContextContainer();

  const onClickRemoveMonth = () => {
    const newExpensesList = { ...expensesList };
    console.log(newExpensesList);
    delete newExpensesList[currentDate.year][monthNumber];
    setExpensesList(newExpensesList);
  };

  return (
    <>
      <DateMonthActionButton
        isMonthExist={true}
        actionFunction={onClickRemoveMonth}
        monthNumber={monthNumber}
        isActive={true}
        month={month}
      />
    </>
  );
};

export default DateMonthActive;
