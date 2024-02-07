type Props = {
  onClickFunction: () => void;
  spaceIndex: number;
  selectorText: string;
};

const OptionSelector = ({
  onClickFunction,
  spaceIndex,
  selectorText,
}: Props) => {
  return (
    <li
      onClick={onClickFunction}
      style={{ transform: `translateY(calc(100%*${spaceIndex}))` }}
      className="absolute z-20 cursor-pointer opacity-0 group-hover:opacity-100"
    >
      {selectorText}
    </li>
  );
};

export default OptionSelector;
