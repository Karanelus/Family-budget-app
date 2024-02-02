type Props = {
  fill: string;
};

const ConfirmIcon = ({ fill = `black` }: Props) => {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill={fill}
    >
      <path d="m2.67 7.63 2.79 2.78 7.87-7.87 1.52 1.52-9.39 9.4-4.31-4.31 1.52-1.52z" />
    </svg>
  );
};

export default ConfirmIcon;
