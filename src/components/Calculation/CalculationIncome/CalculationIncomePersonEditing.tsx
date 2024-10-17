import { useAppContextContainer } from "../../../context/AppContext";
import ConfirmIcon from "../../../svg/ConfirmIcon";

type Props = {
  reference: React.RefObject<HTMLDivElement>;
  id: string;
  personName: string;
  personSalary: number;
  onChangeEditedName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickEditName: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeSalary: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CalculationIncomePersonEditing = ({
  reference,
  id,
  personName,
  personSalary,
  onChangeEditedName,
  onClickEditName,
  onChangeSalary,
}: Props) => {
  const { isDarkmode } = useAppContextContainer();

  return (
    <div
      ref={reference}
      className="relative before:absolute before:z-10 before:block before:h-[45%] before:w-0 before:origin-right before:-translate-x-1 before:-skew-x-[30deg] before:bg-zinc-500 before:duration-150 before:ease-in before:dark:bg-zinc-700"
    >
      <div className="relative mb-1 grid place-items-center">
        <label>
          <input
            type="text"
            value={personName}
            onChange={onChangeEditedName}
            data-clicked={id}
            className="rounded-md bg-transparent px-1 outline outline-2 -outline-offset-1 outline-gray-400 dark:text-black dark:outline-gray-600"
          />
        </label>
        <button
          onClick={onClickEditName}
          data-clicked={id}
          className="absolute -right-8 top-0 size-6 rounded-md bg-transparent p-1 outline outline-2 -outline-offset-1 outline-gray-400 dark:outline-gray-600"
        >
          <ConfirmIcon fill={isDarkmode ? "black" : "lightgray"} />
        </button>
      </div>
      <label>
        <input
          type="number"
          placeholder="Salary"
          value={personSalary}
          onChange={onChangeSalary}
          data-clicked={id}
          className="h-8 rounded-md bg-transparent px-2 py-1 outline outline-2 -outline-offset-1 outline-gray-400 dark:text-black dark:outline-gray-600"
        />
      </label>
    </div>
  );
};

export default CalculationIncomePersonEditing;
