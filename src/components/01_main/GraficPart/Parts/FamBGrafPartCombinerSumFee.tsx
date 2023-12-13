import { feeListType, useFamBContextContainer } from "../../../../context/FamBContext";

type FamBGrafPartCombinerSumSalaryType = {
  summaryFeeFunc: (feeArray: feeListType[]) => number;
};

const FamBGrafPartCombinerSumFee = ({ summaryFeeFunc }: FamBGrafPartCombinerSumSalaryType) => {
  const { feeList } = useFamBContextContainer();

  return (
    <article className=" flex flex-row justify-between border-b-2 dark:border-black">
      <h3>Summary fee</h3>
      <h3 key={summaryFeeFunc(feeList)} className="animate-sum">
        {summaryFeeFunc(feeList)}
      </h3>
    </article>
  );
};

export default FamBGrafPartCombinerSumFee;
