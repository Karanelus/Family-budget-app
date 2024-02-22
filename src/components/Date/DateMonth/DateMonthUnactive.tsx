type Props = {
  month: string;
};

const DateMonthUnactive = ({ month }: Props) => {
  return <li className="cursor-not-allowed opacity-75">{month}</li>;
};

export default DateMonthUnactive;
