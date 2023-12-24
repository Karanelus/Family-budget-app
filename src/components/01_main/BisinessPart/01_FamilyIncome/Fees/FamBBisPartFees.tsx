import { useFamBContextContainer } from "../../../../../context/FamBContext";
import FamBBisPartFeesRender from "./FamBBisPartFeesRender";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "../../../../../svg/AddIcon";
import useLocalStorage from "../../../../../hooks/useLocalStorage";
import language from "../../../../../language/language.json";

const FamBBisPartFees = () => {
  const { diagramColorPalette, setFeeList, languagesChoise, isDarkmode } =
    useFamBContextContainer();
  const [colorNoRepeat, setColorNoRepeat] = useLocalStorage<string[]>(
    "colorPalette",
    [],
  );

  const randomColor = (): string => {
    if (colorNoRepeat.length >= 3) {
      setColorNoRepeat((prev) => prev.slice(1));
    }

    const randomColor =
      diagramColorPalette[
        Math.trunc(Math.random() * (diagramColorPalette.length - 1))
      ];

    if (colorNoRepeat.some((el) => el === randomColor)) {
      let newRandomColorArray = [...diagramColorPalette];
      colorNoRepeat.forEach((color) =>
        newRandomColorArray.filter((elem) => {
          return elem !== color;
        }),
      );

      const newRandomColor =
        newRandomColorArray[
          Math.trunc(Math.random() * (newRandomColorArray.length - 1))
        ];

      setColorNoRepeat((prev) => [...prev, newRandomColor]);

      return newRandomColor;
    } else {
      setColorNoRepeat((prev) => [...prev, randomColor]);

      return randomColor;
    }
  };

  const onClickAddFee = () => {
    setFeeList((prev) => [
      ...prev,
      {
        id: uuidv4(),
        name: "",
        color: randomColor(),
        feeCost: 0,
        isEdited: true,
      },
    ]);
  };

  return (
    <div className="grid w-full place-items-center gap-2">
      <p>{language[languagesChoise]["title_1--fixedFee"]}</p>
      <section className="flex w-full flex-col gap-2 ">
        <FamBBisPartFeesRender />
      </section>
      <button
        onClick={onClickAddFee}
        className="grid aspect-square h-8 place-items-center rounded-md bg-gray-400 px-2 py-1 dark:bg-gray-600"
      >
        <AddIcon fill={isDarkmode ? "#999999" : "black"} />
      </button>
    </div>
  );
};

export default FamBBisPartFees;
