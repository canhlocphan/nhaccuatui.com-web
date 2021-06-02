// libs
import React from "react";
// components
import ThemeColorItem from "../ThemeColorItem";
// constants
import COLOR_LIST from "../../constants/themColor";
// others
import "./styles.scss";

const ThemeColorContent = ({ defaultThemeColor, handleChangeThemeColor }) => (
  <div className="theme-color-content-wrapper">
    <ul className="theme-color-content">
      {COLOR_LIST.COLOR.map(({ id, color }) => (
        <ThemeColorItem
          key={id}
          color={color}
          defaultThemeColor={defaultThemeColor}
          handleChangeThemeColor={handleChangeThemeColor}
        />
      ))}
    </ul>
  </div>
);
export default ThemeColorContent;
