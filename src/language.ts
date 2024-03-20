import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./language/en.json";
import translationPL from "./language/pl.json";
import translationBY from "./language/by.json";

const resources = {
  ENG: {
    translation: translationEN,
  },
  POL: {
    translation: translationPL,
  },
  BLR: {
    translation: translationBY,
  },
};

const defaultLanguage: string = JSON.parse(localStorage.getItem("language")!);

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: "ENG",
  debug: true,
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
