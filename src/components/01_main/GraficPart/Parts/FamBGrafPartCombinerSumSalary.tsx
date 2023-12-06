import { partnersNameType, useFamBContextContainer } from "../../../../context/FamBContext";

type FamBGrafPartCombinerSumSalaryType = {
  summarySalaryFunc: (partnerObject: partnersNameType) => number;
};

const FamBGrafPartCombinerSumSalary = ({ summarySalaryFunc }: FamBGrafPartCombinerSumSalaryType) => {
  const { partnersInfo } = useFamBContextContainer();

  return (
    <article className=" flex flex-row justify-between">
      <h3>Summary salary</h3>
      <h3 key={summarySalaryFunc(partnersInfo)} className="animate-sum">
        {summarySalaryFunc(partnersInfo)}
      </h3>
    </article>
  );
};

export default FamBGrafPartCombinerSumSalary;
