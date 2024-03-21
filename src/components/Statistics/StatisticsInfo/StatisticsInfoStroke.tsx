type Props = {
  name: string;
  summary: number;
  isPercent?: boolean;
  color?: string;
};

const StatisticsInfoStroke = ({ name, summary, isPercent, color }: Props) => {
  return (
    <article className="relative flex flex-row justify-between">
      <h3>{name}</h3>
      <h3 key={summary} className="animate-sum">
        {summary}
      </h3>
      {isPercent && (
        <div
          style={{ backgroundColor: `${color}` }}
          className="absolute -left-6 aspect-square h-1/2 translate-y-1/2 rounded-full dark:brightness-75"
        ></div>
      )}
    </article>
  );
};

export default StatisticsInfoStroke;
