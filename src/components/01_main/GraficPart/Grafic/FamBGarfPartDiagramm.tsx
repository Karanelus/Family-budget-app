import { useFamBContextContainer } from "../../../../context/FamBContext";

const FamBGarfPartDiagramm = () => {
  const { feeList, feePercentCount, partnersInfo, percentCounting } =
    useFamBContextContainer();

  const summarySalary = partnersInfo.salary_1 + partnersInfo.salary_2;
  const summaryFee = (): number => {
    let sum = 0;

    feeList.forEach((el) => {
      sum += el.feeCost;
    });

    return sum;
  };

  const statusReport = (): string => {
    let rayPlasing = Number(percentCounting(summarySalary, summaryFee()));
    let statusReportText = `conic-gradient(#adadad ${rayPlasing}%`;

    if (feeList.length === 0) {
      statusReportText += `, #0000 0`;
    } else {
      feeList.forEach((el) => {
        let nextRay =
          rayPlasing + Number(feePercentCount(summarySalary, el.feeCost));

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
