import { useAppContextContainer } from "../../../context/AppContext";

type Props = {
  month: string;
  monthNumber: number;
};

const DateMonthUnactive = ({ month, monthNumber }: Props) => {
  const { setExpensesList, currentDate } = useAppContextContainer();

  const addMonth = () => {
    setExpensesList((prev) => ({
      ...prev,
      [currentDate.year]: {
        ...prev[currentDate.year],
        [monthNumber]: {
          expenses: [],
          persons: [
            { id: "1", edited: false, partner: "Partner 1", salary: 0 },
            { id: "2", edited: false, partner: "Partner 2", salary: 0 },
          ],
        },
      },
    }));
  };

  return (
    <li className="opacity-25" onClick={addMonth}>
      {month}
    </li>
  );
};

export default DateMonthUnactive;
