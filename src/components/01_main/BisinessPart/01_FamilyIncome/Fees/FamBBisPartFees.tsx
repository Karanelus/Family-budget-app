import { useFamBContextContainer } from "../../../../../context/FamBContext";
import { useEffect } from "react";
import FamBBisPartFeesRender from "./FamBBisPartFeesRender";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "../../../../../svg/AddIcon";
import useLocalStorage from "../../../../../hooks/useLocalStorage";
import language from "../../../../../language/language.json";

const FamBBisPartFees = () => {
  const { diagramColorPalette, setFeeList, languagesChoise, isDarkmode } = useFamBContextContainer();
  const [colorNoRepeat, setColorNoRepeat] = useLocalStorage<string[]>("colorPalette", []);

  const randomColor = (): string => {
    if (colorNoRepeat.length >= 3) {
      setColorNoRepeat((prev) => prev.slice(1));
    }

    const randomColor = diagramColorPalette[Math.trunc(Math.random() * (diagramColorPalette.length - 1))];

    if (colorNoRepeat.some((el) => el === randomColor)) {
      let newRandomColorArray = [...diagramColorPalette];
      colorNoRepeat.forEach((color) =>
        newRandomColorArray.filter((elem) => {
          return elem !== color;
        })
      );

      const newRandomColor = newRandomColorArray[Math.trunc(Math.random() * (newRandomColorArray.length - 1))];
      console.log(newRandomColorArray);

      setColorNoRepeat((prev) => [...prev, newRandomColor]);

      return newRandomColor;
    } else {
      setColorNoRepeat((prev) => [...prev, randomColor]);

      return randomColor;
    }
  };

  useEffect(() => {
    console.log(colorNoRepeat);
  }, [colorNoRepeat]);

  const onClickAddFee = () => {
    setFeeList((prev) => [...prev, { id: uuidv4(), name: "", color: randomColor(), feeCost: 0, isEdited: true }]);
  };

  return (
    <div className="grid place-items-center w-full gap-2">
      <p>{language[languagesChoise]["title_1--fixedFee"]}</p>
      <section className="w-full flex flex-col gap-2 ">
        <FamBBisPartFeesRender />
      </section>
      <button
        onClick={onClickAddFee}
        className="py-1 px-2 bg-gray-400 dark:bg-gray-600 rounded-md grid place-items-center h-8 aspect-square "
      >
        <AddIcon fill={isDarkmode ? "#999999" : "black"} />
      </button>
    </div>
  );
};

export default FamBBisPartFees;
