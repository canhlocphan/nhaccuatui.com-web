// libs
import React, { useState, createContext } from "react";
// constants
import MULTI_LANGUAGE from "../constants/language";

export const DrawerContext = createContext();

const DrawerProvider = ({ children }) => {
  const [defaultLanguage, setDefaultLanguage] = useState(MULTI_LANGUAGE.VI);
  const [defaultThemeColor, setDefaultThemeColor] = useState("#177ddc");
  const [fixedHeader, setFixedHeader] = useState(true);
  const handleChangeVI = () => {
    setDefaultLanguage(MULTI_LANGUAGE.VI);
  };
  const handleChangeEN = () => {
    setDefaultLanguage(MULTI_LANGUAGE.EN);
  };
  const handleChangeThemeColor = (color) => {
    setDefaultThemeColor(color);
  };
  const initialProps = {
    defaultLanguage,
    handleChangeEN,
    handleChangeVI,
    defaultThemeColor,
    handleChangeThemeColor,
    fixedHeader,
    setFixedHeader,
  };
  return <DrawerContext.Provider value={initialProps}>{children}</DrawerContext.Provider>;
};

export default DrawerProvider;
