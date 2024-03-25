import { useAppContextContainer } from "../../../context/AppContext";
import DeleteIcon from "../../../svg/DeleteIcon";
import EditIcon from "../../../svg/EditIcon";
import CalculationExpenseUnitButton from "./CalculationExpenseUnitButton";

type Props = {
  feeName: string;
  feeCost: number;
  onChangeFeeCost: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickEdited: () => void;
  onClickDelete: () => void;
};

const CalculationExpenseUnitDefault = ({
  feeName,
  feeCost,
  onChangeFeeCost,
  onClickEdited,
  onClickDelete,
}: Props) => {
  const { isDarkmode } = useAppContextContainer();

  return (
    <article className="flex w-full animate-expense flex-col items-center justify-center md:flex-row md:justify-between">
      <h3>{feeName}</h3>
      <div className="flex w-full flex-row gap-2 md:w-auto">
        <label className="w-full md:w-auto">
          <input
            type="number"
            placeholder="expense"
            onChange={onChangeFeeCost}
            value={feeCost}
            className="w-full rounded-md bg-transparent px-2 py-1 outline outline-2 -outline-offset-1 outline-gray-400 placeholder:text-zinc-600 dark:text-black dark:outline-gray-600 md:w-auto"
          />
        </label>
        <div className="flex h-full gap-2">
          <CalculationExpenseUnitButton
            onClickFunction={onClickEdited}
            buttonSVG={<EditIcon fill={isDarkmode ? "black" : "lightgray"} />}
          />
          <CalculationExpenseUnitButton
            onClickFunction={onClickDelete}
            buttonSVG={<DeleteIcon fill={isDarkmode ? "black" : "lightgray"} />}
          />
        </div>
      </div>
    </article>
  );
};

export default CalculationExpenseUnitDefault;
