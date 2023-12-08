import { useFamBContextContainer } from "../../../../../context/FamBContext";
import { useEffect, useState } from "react";
import FamBBisPartFeesRender from "./FamBBisPartFeesRender";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "../../../../../svg/AddIcon";

const FamBBisPartFees = () => {
  const { diagramColorPalette, setFeeList } = useFamBContextContainer();
  const [colorNoRepeat, setColorNoRepeat] = useState<string[]>([]);

  const randomColor = (): string => {
    let randomColor = diagramColorPalette[Math.trunc(Math.random() * 9)];
    setColorNoRepeat((prev) => [...prev, randomColor]);

    if (colorNoRepeat.length >= 3) {
      setColorNoRepeat((prev) => prev.slice(1));
    }

    return randomColor;
  };

  useEffect(() => {
    console.log(colorNoRepeat);
  }, [colorNoRepeat]);

  const onClickAddFee = () => {
    setFeeList((prev) => [...prev, { id: uuidv4(), name: "", color: randomColor(), feeCost: 0, isEdited: true }]);
  };

  return (
    <div className="grid place-items-center w-full gap-2">
      <p>Fixed fees</p>
      <section className="w-full flex flex-col gap-2 ">
        <FamBBisPartFeesRender />
      </section>
      <button
        onClick={onClickAddFee}
        className="py-1 px-2 bg-gray-400 rounded-md grid place-items-center h-8 aspect-square"
      >
        <AddIcon fill="black" />
      </button>
    </div>
  );
};

export default FamBBisPartFees;
