import { useAppContextContainer } from "../../context/AppContext";
import CalendarIcon from "../../svg/CalendarIcon";

const CalculationDateButton = () => {
  const { isDarkmode, setIsDateChanging } = useAppContextContainer();

  const onClickDateChange = () => {
    setIsDateChanging(true);
  };

  return (
    <button
      title="Choose other date"
      onClick={onClickDateChange}
      className="absolute right-8 top-6 size-10 rounded-md bg-transparent p-2 outline outline-2 -outline-offset-1 outline-gray-400 hover:cursor-pointer dark:outline-gray-600"
    >
      <CalendarIcon fill={isDarkmode ? "black" : "lightgray"} />
    </button>
  );
};

export default CalculationDateButton;
