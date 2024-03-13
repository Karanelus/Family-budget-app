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

type currentDateType = {
  year: number;
  month: number;
};

export type expensesListType = {
  id: string;
  name: string;
  color: string;
  feeCost: number;
  isEdited: boolean;
};

type expensesPersonsType = {
  id: string;
  edited: boolean;
  partner: string;
  salary: number;
};

type expensesInfoMonthType = {
  expenses: expensesListType[];
  persons: expensesPersonsType[];
};

type expensesTypeMonth = {
  [key: number]: expensesInfoMonthType;
};

type expensesType = {
  [key: number]: expensesTypeMonth;
};

export type partnersNameType = {
  id: string;
  edited: boolean;
  partner: string;
  salary: number;
};

type AppContextContainerProps = {
  currentDate: currentDateType;
  setCurrentDate: React.Dispatch<React.SetStateAction<currentDateType>>;
  countPercent: (
    wholeValue: number,
    partOfValue: number,
    isSalaryCounting?: boolean,
  ) => number;
  diagramColorPalette: string[];
  expensesList: expensesType;
  setExpensesList: React.Dispatch<React.SetStateAction<expensesType>>;
  languages: string[];
  languagesChoise: "ENG" | "POL" | "BLR";
  setLanguagesChoise: React.Dispatch<
    React.SetStateAction<"ENG" | "POL" | "BLR">
  >;
  htmlElement: DOMTokenList;
  isDateChanging: boolean;
  setIsDateChanging: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkmode: boolean;
  setIsDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContextContainer = createContext({} as AppContextContainerProps);

export const useAppContextContainer = () => {
  return useContext(AppContextContainer);
};

const AppContext = ({ children }: AppContextProps) => {
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

  const date = new Date();

  const [expensesList, setExpensesList] = useLocalStorage<expensesType>(
    "expensesList",
    {
      [date.getFullYear()]: {
        [date.getMonth()]: {
          expenses: [],
          persons: [
            { id: "1", edited: false, partner: "Partner 1", salary: 0 },
            { id: "2", edited: false, partner: "Partner 2", salary: 0 },
          ],
        },
      },
    },
  );
  const [currentDate, setCurrentDate] = useLocalStorage<currentDateType>(
    "currentDate",
    {
      year: 0,
      month: 0,
    },
  );

  useEffect(() => {
    const date = new Date();

    setCurrentDate((prev) => {
      if (prev.year === 0) {
        return { ...prev, year: date.getFullYear(), month: date.getMonth() };
      }
      return prev;
    });

    localStorage.DarkMode === "true"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [currentDate, setCurrentDate]);

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

  const languages: string[] = Object.keys(language);

  const [languagesChoise, setLanguagesChoise] = useLocalStorage<
    "ENG" | "POL" | "BLR"
  >("language", "ENG");

  const htmlElement = document.documentElement.classList;

  const [isDateChanging, setIsDateChanging] = useState<boolean>(false);

  const [isDarkmode, setIsDarkmode] = useLocalStorage<boolean>(
    "DarkMode",
    false,
  );

  return (
    <AppContextContainer.Provider
      value={{
        currentDate,
        setCurrentDate,
        countPercent,
        diagramColorPalette,
        expensesList,
        setExpensesList,
        languages,
        languagesChoise,
        setLanguagesChoise,
        htmlElement,
        isDateChanging,
        setIsDateChanging,
        isDarkmode,
        setIsDarkmode,
      }}
    >
      {children}
    </AppContextContainer.Provider>
  );
};

export default AppContext;
