import styles from "../Calculator.styles";

type Props = {
  onClickFunction: () => void;
  buttonSVG: JSX.Element;
};

const CalculationFeeUnitButton = ({ onClickFunction, buttonSVG }: Props) => {
  return (
    <button onClick={onClickFunction} className={styles.button}>
      {buttonSVG}
    </button>
  );
};

export default CalculationFeeUnitButton;
