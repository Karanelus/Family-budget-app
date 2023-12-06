import { useFamBContextContainer } from "../../../../context/FamBContext";

const FamBGarfPartDiagramm = () => {
  const { feeList, feePercentCount, partnersInfo, percentCounting } = useFamBContextContainer();

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
    let statusReportText = `conic-gradient(gray ${rayPlasing}%`;

    if (feeList.length === 0) {
      statusReportText += `, #0000 0`;
    } else {
      feeList.forEach((el) => {
        let nextRay = rayPlasing + Number(feePercentCount(summarySalary, el.feeCost));

        statusReportText += `,${el.color} ${rayPlasing}% ${nextRay}%`;
        rayPlasing = nextRay;
      });
    }

    statusReportText += `)`;

    return statusReportText;
  };

  console.log(statusReport());

  const componentStyle = {
    mask: "radial-gradient(farthest-side,#0000 75%,#000 75%",
    background: statusReport(),
  };

  return (
    <section className="relative aspect-square w-1/2 mx-auto mb-8">
      <article style={componentStyle} className="h-full rounded-full"></article>
    </section>
  );
};

export default FamBGarfPartDiagramm;
