import { useAppContextContainer } from "../../../context/AppContext";

const FamBGarfPartDiagramm = () => {
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

  const xxxxxxx = countPercent(summarySalary(), summaryFee(), true);

  const statusReport = (): string => {
    let rayPlasing = xxxxxxx;
    let statusReportText = `conic-gradient(#adadad ${rayPlasing}%`;

    if (feeList.length === 0) {
      statusReportText += `, #0000 0`;
    } else {
      feeList.forEach((el) => {
        const yyyyyyy = countPercent(summarySalary(), el.feeCost);
        let nextRay = rayPlasing + yyyyyyy;

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
    <section className="relative mx-auto mb-8 aspect-square w-1/2 dark:brightness-75">
      <article style={componentStyle} className="h-full rounded-full"></article>
    </section>
  );
};

export default FamBGarfPartDiagramm;
