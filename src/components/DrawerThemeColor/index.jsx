// libs
import React from "react";
// components
import ThemeColorContent from "../ThemeColorContent";
// others
import "./styles.scss";

const DrawerThemeColor = ({ title, defaultThemeColor, handleChangeThemeColor }) => (
  <div className="theme-color-wrapper">
    <div className="theme-color-title">{title}</div>
    <ThemeColorContent defaultThemeColor={defaultThemeColor} handleChangeThemeColor={handleChangeThemeColor} />
  </div>
);

export default DrawerThemeColor;
