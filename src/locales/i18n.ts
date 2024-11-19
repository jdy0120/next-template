import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as en from "./en";
import * as ko from "./ko";

const resources = {
  en: {
    ...en,
  },
  ko: {
    ...ko,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko",
  fallbackLng: {
    en: ["en"],
    ko: ["ko"],
    default: ["en"],
  },
  debug: true,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export { i18n };
