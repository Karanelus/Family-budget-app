import { useAppContextContainer } from "../../../context/AppContext";

type Props = {
  month: string;
  monthNumber: number;
};

const DateMonthActive = ({ month, monthNumber }: Props) => {
  const { setCurrentDate } = useAppContextContainer();

  const onClickChangeMonth = () => {
    setCurrentDate((prev) => ({ ...prev, month: monthNumber }));
  };

  return (
    <li
      className="cursor-pointer rounded-sm hover:bg-zinc-700 dark:hover:bg-zinc-500"
      onClick={onClickChangeMonth}
    >
      {month}
    </li>
  );
};

export default DateMonthActive;
