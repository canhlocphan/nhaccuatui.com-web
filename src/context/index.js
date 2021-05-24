// libs
import React, { useState, createContext } from "react";
import MULTI_LANGUAGE from "../constants/language";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [defaultLanguage, setDefaultLanguage] = useState(MULTI_LANGUAGE.VI);
  const handleChangeVI = () => {
    setDefaultLanguage(MULTI_LANGUAGE.VI);
  };
  const handleChangeEN = () => {
    setDefaultLanguage(MULTI_LANGUAGE.EN);
  };
  const initialProps = {
    defaultLanguage,
    handleChangeEN,
    handleChangeVI,
  };
  return <LanguageContext.Provider value={initialProps}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
