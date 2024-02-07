import styles from "../Statistics.styles";

type Props = {
  name: string;
  summary: number;
  isPercent?: boolean;
  color?: string;
};

const StartisticsInfoStroke = ({ name, summary, isPercent, color }: Props) => {
  const stylesShortcut = styles.info.stroke;

  return (
    <article className={stylesShortcut.line}>
      <h3>{name}</h3>
      <h3 key={summary} className="animate-sum">
        {summary}
      </h3>
      {isPercent && (
        <div
          style={{ backgroundColor: `${color}` }}
          className={stylesShortcut.color}
        ></div>
      )}
    </article>
  );
};

export default StartisticsInfoStroke;
