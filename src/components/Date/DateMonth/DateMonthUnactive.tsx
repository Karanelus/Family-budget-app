type Props = {
  month: string;
};

const DateMonthUnactive = ({ month }: Props) => {
  return <li className="cursor-not-allowed opacity-25">{month}</li>;
};

export default DateMonthUnactive;
