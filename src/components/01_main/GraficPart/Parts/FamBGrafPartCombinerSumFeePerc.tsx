import { partnersNameType, useFamBContextContainer } from "../../../../context/FamBContext";

type FamBGrafPartCombinerSumFeePercType = {
  summarySalaryFunc: (partnerObject: partnersNameType) => number;
};

const FamBGrafPartCombinerSumFeePerc = ({ summarySalaryFunc }: FamBGrafPartCombinerSumFeePercType) => {
  const { feeList, partnersInfo, feePercentCount } = useFamBContextContainer();

  return (
    <>
      {feeList.map((el, index) => {
        if (el.name !== "" && !el.isEdited) {
          return (
            <article key={index} className=" flex flex-row justify-between relative">
              <h3>{el.name}</h3>
              <h3 key={feePercentCount(summarySalaryFunc(partnersInfo), el.feeCost)} className="animate-sum">
                {feePercentCount(summarySalaryFunc(partnersInfo), el.feeCost)}
              </h3>
              <div
                style={{ backgroundColor: el.color }}
                className="absolute aspect-square h-1/2 rounded-full -left-6 translate-y-1/2 border-slate-900"
              ></div>
            </article>
          );
        } else return null;
      })}
    </>
  );
};

export default FamBGrafPartCombinerSumFeePerc;
