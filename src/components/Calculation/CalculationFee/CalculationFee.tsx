import { useAppContextContainer } from "../../../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "../../../svg/AddIcon";
import CalculationFeeUnitButton from "./CalculationFeeUnitButton";
import useLocalStorage from "../../../hooks/useLocalStorage.hook";
import CalculationFeeUnits from "./CalculationFeeUnits";
import { useTranslation } from "react-i18next";

const CalculationFee = () => {
  const { diagramColorPalette, isDarkmode, setExpensesList, currentDate } =
    useAppContextContainer();
  const { t } = useTranslation();

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
    }

    setColorNoRepeat((prev) => [...prev, randomColor]);
    return randomColor;
  };

  const onClickAddFee = () => {
    setExpensesList((prev) => ({
      ...prev,
      [currentDate.year]: {
        [currentDate.month]: {
          expenses: [
            ...prev[currentDate.year][currentDate.month].expenses,
            {
              id: uuidv4(),
              name: "",
              color: randomColor(),
              feeCost: 0,
              isEdited: true,
            },
          ],
          persons: [...prev[currentDate.year][currentDate.month].persons],
        },
      },
    }));
  };

  return (
    <article className="grid w-full place-items-center gap-2">
      <p>{t(`TITLE.FIXED_EXPENSES`)}</p>
      <CalculationFeeUnits />
      <CalculationFeeUnitButton
        onClickFunction={onClickAddFee}
        buttonSVG={<AddIcon fill={isDarkmode ? "black" : "lightgray"} />}
      />
    </article>
  );
};

export default CalculationFee;
