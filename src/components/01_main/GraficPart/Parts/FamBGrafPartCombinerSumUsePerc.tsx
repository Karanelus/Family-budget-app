import {
  feeListType,
  partnersNameType,
  useFamBContextContainer,
} from "../../../../context/FamBContext";
import language from "../../../../language/language.json";

type FamBGrafPartCombinerSumUseType = {
  summarySalaryFunc: (partnerObject: partnersNameType) => number;
  summaryFeeFunc: (feeArray: feeListType[]) => number;
};

const FamBGrafPartCombinerSumUsePerc = ({
  summarySalaryFunc,
  summaryFeeFunc,
}: FamBGrafPartCombinerSumUseType) => {
  const { feeList, languagesChoise, partnersInfo, percentCounting } =
    useFamBContextContainer();

  return (
    <article className=" relative flex flex-row justify-between border-b-2 dark:border-black">
      <h3>{language[languagesChoise]["title_2--perc"]}</h3>
      <h3
        key={percentCounting(
          summarySalaryFunc(partnersInfo),
          summaryFeeFunc(feeList),
        )}
        className="animate-sum"
      >
        {percentCounting(
          summarySalaryFunc(partnersInfo),
          summaryFeeFunc(feeList),
        )}
      </h3>
      <div
        style={{ backgroundColor: "#adadad" }}
        className="absolute -left-6 aspect-square h-1/2 translate-y-1/2 rounded-full dark:brightness-75"
      ></div>
    </article>
  );
};

export default FamBGrafPartCombinerSumUsePerc;
