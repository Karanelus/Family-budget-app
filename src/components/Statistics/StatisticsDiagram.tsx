import { useAppContextContainer } from "../../context/AppContext";
import styles from "./Statistics.styles";

const StatisticsDiagram = () => {
  const { countPercent, feeList, partnersInfo } = useAppContextContainer();

  const summarySalary = () => {
    let sumSalary = 0;
    partnersInfo.forEach((person) => {
      sumSalary += person.salary;
    });
    return sumSalary;
  };

  const summaryFee = (): number => {
    let sum = 0;

    feeList.forEach((el) => {
      sum += el.feeCost;
    });

    return sum;
  };

  const countPosition = countPercent(summarySalary(), summaryFee(), true);

  const statusReport = (): string => {
    let rayPlasing = countPosition;
    let statusReportText = `conic-gradient(#adadad ${rayPlasing}%`;

    if (feeList.length === 0) {
      statusReportText += `, #0000 0`;
    } else {
      feeList.forEach((el) => {
        const nextRayPlasing = countPercent(summarySalary(), el.feeCost);
        let nextRay = rayPlasing + nextRayPlasing;

        statusReportText += `,${el.color} ${rayPlasing}% ${nextRay}%`;
        rayPlasing = nextRay;
      });
    }

    statusReportText += `)`;

    return statusReportText;
  };

  const componentStyle = {
    background: statusReport(),
  };

  return (
    <section className={styles.diagram}>
      <article style={componentStyle} className="h-full rounded-full"></article>
    </section>
  );
};

export default StatisticsDiagram;
