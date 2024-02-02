import {
  feeListType,
  useAppContextContainer,
} from "../../../context/AppContext";
import language from "../../../language/language.json";

type FamBGrafPartCombinerSumSalaryType = {
  summaryFeeFunc: (feeArray: feeListType[]) => number;
};

const FamBGrafPartCombinerSumFee = ({
  summaryFeeFunc,
}: FamBGrafPartCombinerSumSalaryType) => {
  const { feeList, languagesChoise } = useAppContextContainer();

  return (
    <article className=" flex flex-row justify-between border-b-2 dark:border-black">
      <h3>{language[languagesChoise]["title_2--sumFee"]}</h3>
      <h3 key={summaryFeeFunc(feeList)} className="animate-sum">
        {summaryFeeFunc(feeList)}
      </h3>
    </article>
  );
};

export default FamBGrafPartCombinerSumFee;
