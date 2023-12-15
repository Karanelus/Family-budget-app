import { useContext, ReactNode, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import language from "../language/language.json";

type FamBContextProps = {
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
  partner_1: string;
  salary_1: number;
  partner_2: string;
  salary_2: number;
};

type FamBContextContProps = {
  diagramColorPalette: string[];
  feeList: feeListType[];
  feePercentCount: (feeCount: number, percentCount: number) => string;
  setFeeList: React.Dispatch<React.SetStateAction<feeListType[]>>;
  languages: string[];
  languagesChoise: "ENG" | "POL" | "RUS";
  setLanguagesChoise: React.Dispatch<React.SetStateAction<"ENG" | "POL" | "RUS">>;
  htmlElement: DOMTokenList;
  isDarkmode: boolean;
  setIsDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
  partnersInfo: partnersNameType;
  setPartnersInfo: React.Dispatch<React.SetStateAction<partnersNameType>>;
  percentCounting: (maxUnit: number, minUnit: number) => string;
};

const FamBContextContainer = createContext({} as FamBContextContProps);

export const useFamBContextContainer = () => {
  return useContext(FamBContextContainer);
};

const FamBContext = ({ children }: FamBContextProps) => {
  const [feeList, setFeeList] = useLocalStorage<feeListType[]>("feeList", []);
  const [partnersInfo, setPartnersInfo] = useLocalStorage<partnersNameType>("nameList", {
    partner_1: "Partner 1",
    salary_1: 0,
    partner_2: "Partner 2",
    salary_2: 0,
  });
  const percentCounting = (maxUnit: number, minUnit: number): string => {
    return (((maxUnit - minUnit) / maxUnit) * 100).toFixed(2);
  };
  const feePercentCount = (feeCount: number, percentCount: number): string => {
    return ((percentCount / feeCount) * 100).toFixed(2);
  };
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
  const [isDarkmode, setIsDarkmode] = useLocalStorage<boolean>("DarkMode", false);
  const languages: string[] = Object.keys(language);
  const [languagesChoise, setLanguagesChoise] = useLocalStorage<"ENG" | "POL" | "RUS">("language", "ENG");

  return (
    <FamBContextContainer.Provider
      value={{
        diagramColorPalette,
        feeList,
        feePercentCount,
        setFeeList,
        languages,
        languagesChoise,
        setLanguagesChoise,
        htmlElement,
        isDarkmode,
        setIsDarkmode,
        partnersInfo,
        setPartnersInfo,
        percentCounting,
      }}
    >
      {children}
    </FamBContextContainer.Provider>
  );
};

export default FamBContext;
