import { useAppContextContainer } from "../../../context/AppContext";
import EditIcon from "../../../svg/EditIcon";
import styles from "../Calculator.styles";

type Props = {
  reference: React.RefObject<HTMLDivElement>;
  id: string;
  personName: string;
  personSalary: number;
  onClickEditName: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeSalary: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CalculationIncomePersonDefault = ({
  reference,
  id,
  personName,
  personSalary,
  onClickEditName,
  onChangeSalary,
}: Props) => {
  const { isDarkmode } = useAppContextContainer();
  const stylePersonContainer = styles.incomeSection.person;

  return (
    <div ref={reference} className={stylePersonContainer.container}>
      <div className="relative">
        <p className="text-center">{personName}</p>
        <button
          onClick={onClickEditName}
          data-clicked={id}
          className={stylePersonContainer.editButton}
        >
          <EditIcon fill={isDarkmode ? "black" : "lightgray"} />
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

export default CalculationIncomePersonDefault;
