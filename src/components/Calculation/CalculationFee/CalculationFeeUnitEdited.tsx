import { useAppContextContainer } from "../../../context/AppContext";
import ConfirmIcon from "../../../svg/ConfirmIcon";
import DeleteIcon from "../../../svg/DeleteIcon";
import CalculationFeeUnitButton from "./CalculationFeeUnitButton";

type Props = {
  feeName: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitName: (e: React.FormEvent<HTMLFormElement>) => void;
  onClickEdited: () => void;
  onClickDelete: () => void;
};

const CalculationFeeUnitEdited = ({
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
            className="w-full rounded-md bg-gray-400 px-2 py-1 text-black placeholder:text-zinc-500 dark:bg-gray-600 dark:text-black"
          />
        </label>
        <CalculationFeeUnitButton
          onClickFunction={onClickEdited}
          buttonSVG={<ConfirmIcon fill={isDarkmode ? "#999999" : "black"} />}
        />
        <CalculationFeeUnitButton
          onClickFunction={onClickDelete}
          buttonSVG={<DeleteIcon fill={isDarkmode ? "#999999" : "black"} />}
        />
      </form>
    </article>
  );
};

export default CalculationFeeUnitEdited;
