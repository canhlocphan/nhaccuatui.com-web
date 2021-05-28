// libs
import React from "react";
// components
import ThemeColorContent from "../ThemeColorContent";
// others
import "./styles.scss";

const ThemColor = () => (
  <div className="theme-color-wrapper">
    <div className="theme-color-title">Màu chủ đề</div>
    <ThemeColorContent />
  </div>
);

export default ThemColor;
