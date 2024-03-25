import { useAppContextContainer } from "../../../context/AppContext";
import ConfirmIcon from "../../../svg/ConfirmIcon";
import DeleteIcon from "../../../svg/DeleteIcon";
import CalculationExpenseUnitButton from "./CalculationExpenseUnitButton";

type Props = {
  feeName: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitName: (e: React.FormEvent<HTMLFormElement>) => void;
  onClickEdited: () => void;
  onClickDelete: () => void;
};

const CalculationExpenseUnitEdited = ({
  feeName,
  onChangeName,
  onSubmitName,
  onClickEdited,
  onClickDelete,
}: Props) => {
  const { isDarkmode } = useAppContextContainer();

  return (
    <article className="animate-expense">
      <form onSubmit={onSubmitName} className="flex w-full flex-row gap-2">
        <label className="w-full">
          <input
            type="text"
            placeholder="Name the item"
            value={feeName}
            onChange={onChangeName}
            className="w-full rounded-md bg-transparent px-2 py-1 outline outline-2 -outline-offset-1 outline-gray-400 placeholder:text-zinc-500 dark:outline-gray-600"
          />
        </label>
        <CalculationExpenseUnitButton
          onClickFunction={onClickEdited}
          buttonSVG={<ConfirmIcon fill={isDarkmode ? "black" : "lightgray"} />}
        />
        <CalculationExpenseUnitButton
          onClickFunction={onClickDelete}
          buttonSVG={<DeleteIcon fill={isDarkmode ? "black" : "lightgray"} />}
        />
      </form>
    </article>
  );
};

export default CalculationExpenseUnitEdited;
