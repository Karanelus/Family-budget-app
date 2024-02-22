import styles from "./Date.styles";

type Props = {
  onClickFunction: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon: React.ReactNode;
  closeButton?: boolean;
  leftArrow?: boolean;
};

const DateButton = ({
  onClickFunction,
  icon,
  closeButton,
  leftArrow,
}: Props) => {
  const stylesShortcut = styles.dateSection.button;
  const buttonStyle = closeButton
    ? stylesShortcut.close
    : `${stylesShortcut.arrow} ${leftArrow && stylesShortcut.leftArrow}`;

  return (
    <button onClick={onClickFunction} className={buttonStyle}>
      {icon}
    </button>
  );
};

export default DateButton;
