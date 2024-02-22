type Props = {
  fill: string;
};

const CloseIcon = ({ fill = "black" }: Props) => {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill={fill}
    >
      <path d="m4.12 6.137 1.521-1.52 7 7-1.52 1.52z" />
      <path d="m4.12 11.61 7.001-7 1.52 1.52-7 7z" />
    </svg>
  );
};

export default CloseIcon;
