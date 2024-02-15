import {
  useContext,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage.hook";
import language from "../language/language.json";

type AppContextProps = {
  children: ReactNode;
};

export type feeListType = {
  id: string;
  name: string;
  color: string;
  feeCost: number;
  isEdited: boolean;
};

export type partnersNameType = {
  id: string;
  edited: boolean;
  partner: string;
  salary: number;
};

type currensyListType = {
  [key: string]: number;
};

type currensyStateType = {
  currensyName: string[];
  currensyPast: string;
  currensyCurrent: string;
  currensyCourse: number;
};

type AppContextContainerProps = {
  countPercent: (
    wholeValue: number,
    partOfValue: number,
    isSalaryCounting?: boolean,
  ) => number;
  currensyList: currensyListType;
  currensyState: currensyStateType;
  setCurrensyState: React.Dispatch<React.SetStateAction<currensyStateType>>;
  diagramColorPalette: string[];
  feeList: feeListType[];
  setFeeList: React.Dispatch<React.SetStateAction<feeListType[]>>;
  languages: string[];
  languagesChoise: "ENG" | "POL" | "BLR";
  setLanguagesChoise: React.Dispatch<
    React.SetStateAction<"ENG" | "POL" | "BLR">
  >;
  htmlElement: DOMTokenList;
  isDarkmode: boolean;
  setIsDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
  partnersInfo: partnersNameType[];
  setPartnersInfo: React.Dispatch<React.SetStateAction<partnersNameType[]>>;
};

const AppContextContainer = createContext({} as AppContextContainerProps);

export const useAppContextContainer = () => {
  return useContext(AppContextContainer);
};

const AppContext = ({ children }: AppContextProps) => {
  const [feeList, setFeeList] = useLocalStorage<feeListType[]>("feeList", []);

  const [partnersInfo, setPartnersInfo] = useLocalStorage<partnersNameType[]>(
    "nameList",
    [
      { id: "1", edited: false, partner: "Partner 1", salary: 0 },
      { id: "2", edited: false, partner: "Partner 2", salary: 0 },
    ],
  );

  const diagramColorPalette: string[] = [
    "#ff4600",
    "#ffff00",
    "#ba00ff",
    "#ff0000",
    "#ff7f00",
    "#00aeae",
    "#feb300",
    "#7308a5",
    "#0000ff",
    "#00ff00",
  ];

  const htmlElement = document.documentElement.classList;

  const [isDarkmode, setIsDarkmode] = useLocalStorage<boolean>(
    "DarkMode",
    false,
  );

  const languages: string[] = Object.keys(language);

  const [languagesChoise, setLanguagesChoise] = useLocalStorage<
    "ENG" | "POL" | "BLR"
  >("language", "ENG");

  const [currensyState, setCurrensyState] = useLocalStorage<currensyStateType>(
    "currensyState",
    {
      currensyName: ["PLN", "BYN", "EUR", "USD"],
      currensyPast: "PLN",
      currensyCurrent: "PLN",
      currensyCourse: 1,
    },
  );

  const [currensyList, setCurrensyList] = useState<currensyListType>({});

  const countPercent = (
    wholeValue: number,
    partOfValue: number,
    isSalaryCounting?: boolean,
  ): number => {
    let countedValue: number;

    if (isSalaryCounting) {
      countedValue = Number(
        (((wholeValue - partOfValue) / wholeValue) * 100).toFixed(2),
      );

      return countedValue;
    }
    countedValue = Number(((partOfValue / wholeValue) * 100).toFixed(2));

    return countedValue;
  };

  useEffect(() => {
    const getCurrensy = async () => {
      const BASE_API_URL = `http://data.fixer.io/api/latest?access_key=e1425794f4eddef4c3e2d8a4c4fb4446`;

      const resp = await fetch(BASE_API_URL);
      const data = await resp.json();

      setCurrensyList(data.rates);
    };

    getCurrensy();
    setCurrensyState((prev) => ({ ...prev, currensyCourse: 1 }));

    localStorage.DarkMode === "true"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [setCurrensyState]);

  return (
    <AppContextContainer.Provider
      value={{
        countPercent,
        currensyList,
        currensyState,
        setCurrensyState,
        diagramColorPalette,
        feeList,
        setFeeList,
        languages,
        languagesChoise,
        setLanguagesChoise,
        htmlElement,
        isDarkmode,
        setIsDarkmode,
        partnersInfo,
        setPartnersInfo,
      }}
    >
      {children}
    </AppContextContainer.Provider>
  );
};

export default AppContext;
