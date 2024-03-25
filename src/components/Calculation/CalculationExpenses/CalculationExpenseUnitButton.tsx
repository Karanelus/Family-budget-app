type Props = {
  onClickFunction: () => void;
  buttonSVG: JSX.Element;
};

const CalculationExpenseUnitButton = ({
  onClickFunction,
  buttonSVG,
}: Props) => {
  return (
    <button
      onClick={onClickFunction}
      className="aspect-square size-8 rounded-md bg-transparent px-2 py-1 outline outline-2 -outline-offset-1 outline-gray-400 dark:outline-gray-600"
    >
      {buttonSVG}
    </button>
  );
};

export default CalculationExpenseUnitButton;
