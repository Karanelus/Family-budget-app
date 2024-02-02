import { feeListType, partnersNameType } from "../../../context/AppContext";
import FamBGrafPartCombinerSumFee from "./FamBGrafPartCombinerSumFee";
import FamBGrafPartCombinerSumFeePerc from "./FamBGrafPartCombinerSumFeePerc";
import FamBGrafPartCombinerSumSalary from "./FamBGrafPartCombinerSumSalary";
import FamBGrafPartCombinerSumUse from "./FamBGrafPartCombinerSumUse";
import FamBGrafPartCombinerSumUsePerc from "./FamBGrafPartCombinerSumUsePerc";

const FamBGrafPartCombinerRender = () => {
  const summarySalary = (partnerArray: partnersNameType[]): number => {
    let sumSalary = 0;

    partnerArray.forEach((person) => {
      sumSalary += person.salary;
    });

    return sumSalary;
  };
  const summaryFee = (feeArray: feeListType[]): number => {
    let sum = 0;

    feeArray.forEach((el) => {
      sum += el.feeCost;
    });

    return sum;
  };
  const summaryRest = (summarySalary: number, summaryFee: number): number => {
    return summarySalary - summaryFee;
  };

  return (
    <div className="mx-auto w-3/4 md:w-1/2 ">
      <FamBGrafPartCombinerSumSalary summarySalaryFunc={summarySalary} />
      <FamBGrafPartCombinerSumFee summaryFeeFunc={summaryFee} />
      <FamBGrafPartCombinerSumUse
        summaryFeeFunc={summaryFee}
        summarySalaryFunc={summarySalary}
        summaryRestFunc={summaryRest}
      />
      <FamBGrafPartCombinerSumUsePerc
        summarySalaryFunc={summarySalary}
        summaryFeeFunc={summaryFee}
      />
      <FamBGrafPartCombinerSumFeePerc summarySalaryFunc={summarySalary} />
    </div>
  );
};

export default FamBGrafPartCombinerRender;
