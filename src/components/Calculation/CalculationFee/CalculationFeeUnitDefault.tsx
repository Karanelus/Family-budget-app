import { useAppContextContainer } from "../../../context/AppContext";
import DeleteIcon from "../../../svg/DeleteIcon";
import EditIcon from "../../../svg/EditIcon";
import styles from "../Calculator.styles";
import CalculationFeeUnitButton from "./CalculationFeeUnitButton";

type Props = {
  feeName: string;
  feeCost: number;
  onChangeFeeCost: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickEdited: () => void;
  onClickDelete: () => void;
};

const CalculationFeeUnitDefault = ({
  feeName,
  feeCost,
  onChangeFeeCost,
  onClickEdited,
  onClickDelete,
}: Props) => {
  const { isDarkmode } = useAppContextContainer();
  const stylesShortcut = styles.feeSection.default;

  return (
    <article className={stylesShortcut.constainer}>
      <h3>{feeName}</h3>
      <div className={stylesShortcut.functionPart}>
        <label className="w-full md:w-auto">
          <input
            type="number"
            placeholder="expense"
            onChange={onChangeFeeCost}
            value={feeCost}
            className={stylesShortcut.input}
          />
        </label>
        <div className={stylesShortcut.buttonContainer}>
          <CalculationFeeUnitButton
            onClickFunction={onClickEdited}
            buttonSVG={<EditIcon fill={isDarkmode ? "#999999" : "black"} />}
          />
          <CalculationFeeUnitButton
            onClickFunction={onClickDelete}
            buttonSVG={<DeleteIcon fill={isDarkmode ? "#999999" : "black"} />}
          />
        </div>
      </div>
    </article>
  );
};

export default CalculationFeeUnitDefault;
