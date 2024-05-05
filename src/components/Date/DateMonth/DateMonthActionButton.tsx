import { useAppContextContainer } from "../../../context/AppContext";
import AddIcon from "../../../svg/AddIcon";
import CloseIcon from "../../../svg/CloseIcon";

type Props = {
  actionFunction: () => void;
  isActive: boolean;
  isMonthExist?: boolean;
  month: string;
  monthNumber?: number;
};

const DateMonthActionButton = ({
  actionFunction,
  isActive,
  isMonthExist,
  month,
  monthNumber,
}: Props) => {
  const { isDarkmode, setCurrentDate } = useAppContextContainer();

  const outlineColor = isActive
    ? "left-0 outline-red-400 dark:outline-red-600"
    : "right-0 outline-gray-400 dark:outline-black";

  const monthColor = isMonthExist
    ? "group/button cursor-pointer relative rounded-sm"
    : "group/button relative text-white/25 dark:text-black/25";

  const onClickChangeMonth = () => {
    if (isActive) setCurrentDate((prev) => ({ ...prev, month: monthNumber! }));
    return;
  };

  return (
    <li className={monthColor}>
      <span onClick={onClickChangeMonth}>{month}</span>
      <button
        className={
          "absolute top-1 size-2 translate-y-1/2 rounded-full opacity-0 outline outline-1 outline-offset-2 delay-300 group-hover/button:opacity-100 dark:outline-black " +
          outlineColor
        }
        onClick={actionFunction}
      >
        {isActive ? (
          <CloseIcon fill={isDarkmode ? "#dc2626" : "#f87171"} />
        ) : (
          <AddIcon fill={isDarkmode ? "black" : "#9ca3af"} />
        )}
      </button>
    </li>
  );
};

export default DateMonthActionButton;
