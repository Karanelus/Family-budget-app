import { useAppContextContainer } from "../../../context/AppContext";
import ConfirmIcon from "../../../svg/ConfirmIcon";
import styles from "../Calculator.styles";

type Props = {
  reference: React.RefObject<HTMLDivElement>;
  id: string;
  personName: string;
  personSalary: number;
  onChageEditedName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickEditName: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeSalary: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CalculationIncomePersonEditing = ({
  reference,
  id,
  personName,
  personSalary,
  onChageEditedName,
  onClickEditName,
  onChangeSalary,
}: Props) => {
  const { isDarkmode } = useAppContextContainer();
  const stylePersonContainer = styles.incomeSection.person;

  return (
    <div ref={reference} className={stylePersonContainer.container}>
      <div className={stylePersonContainer.nameInput.editing.container}>
        <label>
          <input
            type="text"
            value={personName}
            onChange={onChageEditedName}
            data-clicked={id}
            className={stylePersonContainer.nameInput.editing.text}
          />
        </label>
        <button
          onClick={onClickEditName}
          data-clicked={id}
          className={stylePersonContainer.editButton}
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
          className={stylePersonContainer.salaryInput}
        />
      </label>
    </div>
  );
};

export default CalculationIncomePersonEditing;
