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
  const buttonStyle = closeButton
    ? "absolute right-2 top-2 size-6 rounded-sm p-[0.125rem] text-xs outline outline-2 -outline-offset-1 outline-gray-400 dark:outline-gray-600 bg-transparent grid place-items-center"
    : `"size-6 rounded-sm text-xs grid place-items-center" ${
        leftArrow && "rotate-180"
      }`;

  return (
    <button onClick={onClickFunction} className={buttonStyle}>
      {icon}
    </button>
  );
};

export default DateButton;
