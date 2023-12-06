import { feeListType, partnersNameType, useFamBContextContainer } from "../../../../context/FamBContext";

type FamBGrafPartCombinerSumUseType = {
  summarySalaryFunc: (partnerObject: partnersNameType) => number;
  summaryFeeFunc: (feeArray: feeListType[]) => number;
  summaryRestFunc: (summarySalaryFunc: number, summaryFeeFunc: number) => number;
};

const FamBGrafPartCombinerSumUse = ({
  summarySalaryFunc,
  summaryFeeFunc,
  summaryRestFunc,
}: FamBGrafPartCombinerSumUseType) => {
  const { feeList, partnersInfo } = useFamBContextContainer();

  return (
    <article className=" flex flex-row justify-between mb-4">
      <h3>For family use</h3>
      <h3 key={summaryRestFunc(summarySalaryFunc(partnersInfo), summaryFeeFunc(feeList))} className="animate-sum">
        {summaryRestFunc(summarySalaryFunc(partnersInfo), summaryFeeFunc(feeList))}
      </h3>
    </article>
  );
};

export default FamBGrafPartCombinerSumUse;
