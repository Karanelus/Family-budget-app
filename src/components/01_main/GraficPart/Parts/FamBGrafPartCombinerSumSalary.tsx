import {
  partnersNameType,
  useFamBContextContainer,
} from "../../../../context/FamBContext";
import language from "../../../../language/language.json";

type FamBGrafPartCombinerSumSalaryType = {
  summarySalaryFunc: (partnerObject: partnersNameType) => number;
};

const FamBGrafPartCombinerSumSalary = ({
  summarySalaryFunc,
}: FamBGrafPartCombinerSumSalaryType) => {
  const { languagesChoise, partnersInfo } = useFamBContextContainer();

  return (
    <article className=" flex flex-row justify-between">
      <h3>{language[languagesChoise]["title_2--sumSalary"]}</h3>
      <h3 key={summarySalaryFunc(partnersInfo)} className="animate-sum">
        {summarySalaryFunc(partnersInfo)}
      </h3>
    </article>
  );
};

export default FamBGrafPartCombinerSumSalary;
