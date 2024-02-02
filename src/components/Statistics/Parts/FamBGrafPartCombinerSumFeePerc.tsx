import {
  partnersNameType,
  useAppContextContainer,
} from "../../../context/AppContext";

type FamBGrafPartCombinerSumFeePercType = {
  summarySalaryFunc: (partnerObject: partnersNameType[]) => number;
};

const FamBGrafPartCombinerSumFeePerc = ({
  summarySalaryFunc,
}: FamBGrafPartCombinerSumFeePercType) => {
  const { countPercent, feeList, partnersInfo } = useAppContextContainer();

  return (
    <>
      {feeList.map((el, index) => {
        if (el.name !== "" && !el.isEdited) {
          const procentCount = countPercent(
            summarySalaryFunc(partnersInfo),
            el.feeCost,
          );

          return (
            <article
              key={index}
              className=" relative flex flex-row justify-between"
            >
              <h3>{el.name}</h3>
              <h3 key={procentCount} className="animate-sum">
                {procentCount}
              </h3>
              <div
                style={{ backgroundColor: el.color }}
                className="absolute -left-6 aspect-square h-1/2 translate-y-1/2 rounded-full border-slate-900 dark:brightness-75"
              ></div>
            </article>
          );
        } else return null;
      })}
    </>
  );
};

export default FamBGrafPartCombinerSumFeePerc;
