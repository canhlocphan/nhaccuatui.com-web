// libs
import React from "react";
// components
import ThemeColorItem from "../ThemeColorItem";
// others
import "./styles.scss";

const ThemeColorContent = () => (
  <div className="theme-color-content-wrapper">
    <ul className="theme-color-content">
      <ThemeColorItem />
    </ul>
  </div>
);

export default ThemeColorContent;
