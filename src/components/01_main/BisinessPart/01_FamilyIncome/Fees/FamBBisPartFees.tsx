import { useFamBContextContainer } from "../../../../../context/FamBContext";
import { useEffect } from "react";
import FamBBisPartFeesRender from "./FamBBisPartFeesRender";
import { v4 as uuidv4 } from "uuid";

const FamBBisPartFees = () => {
  const { diagramColorPalette, feeList, setFeeList } = useFamBContextContainer();
  const randomColor = (): string => {
    return diagramColorPalette[Math.trunc(Math.random() * 9)];
  };

  useEffect(() => {
    console.log(feeList);
  }, [feeList]);

  const onClickAddFee = () => {
    setFeeList((prev) => [...prev, { id: uuidv4(), name: "", color: randomColor(), feeCost: 0, isEdited: true }]);
    console.log(feeList);
  };

  return (
    <div className="grid place-items-center w-full gap-2">
      <p>Fixed fees</p>
      <section className="w-full flex flex-col gap-2 ">
        <FamBBisPartFeesRender />
      </section>
      <button onClick={onClickAddFee} className="py-1 px-2 bg-slate-500 rounded-md grid place-items-center h-8">
        <p>Add additional fee</p>
      </button>
    </div>
  );
};

export default FamBBisPartFees;
