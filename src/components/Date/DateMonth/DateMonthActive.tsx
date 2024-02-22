type Props = {
  month: string;
};

const DateMonthActive = ({ month }: Props) => {
  return (
    <li className="cursor-pointer rounded-sm hover:bg-zinc-700 dark:hover:bg-zinc-500">
      {month}
    </li>
  );
};

export default DateMonthActive;
