import { useAppContextContainer } from "../../../context/AppContext";
import DeleteIcon from "../../../svg/DeleteIcon";
import EditIcon from "../../../svg/EditIcon";
import styles from "../Calculator.styles";
import CalculationFeeUnitButton from "./CalculationFeeUnitButton";

type Props = {
  feeName: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickEdited: () => void;
  onClickDelete: () => void;
};

const CalculationFeeUnitEdited = ({
  feeName,
  onChangeName,
  onClickEdited,
  onClickDelete,
}: Props) => {
  const { isDarkmode } = useAppContextContainer();
  const stylesShortcut = styles.feeSection.edited;

  return (
    <article className={stylesShortcut.constainer}>
      <label className="w-full">
        <input
          type="text"
          placeholder="Name the item"
          value={feeName}
          onChange={onChangeName}
          className={stylesShortcut.input}
        />
      </label>
      <CalculationFeeUnitButton
        onClickFunction={onClickEdited}
        buttonSVG={<EditIcon fill={isDarkmode ? "#999999" : "black"} />}
      />
      <CalculationFeeUnitButton
        onClickFunction={onClickDelete}
        buttonSVG={<DeleteIcon fill={isDarkmode ? "#999999" : "black"} />}
      />
    </article>
  );
};

export default CalculationFeeUnitEdited;
