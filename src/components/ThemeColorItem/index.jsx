// libs
import React from "react";
// others
import "./styles.scss";
import { CheckOutlined } from "@ant-design/icons";

const ThemeColorItem = ({ color, defaultThemeColor, handleChangeThemeColor }) => (
  <li className="theme-color-item" style={{ background: `${color}` }} onClick={() => handleChangeThemeColor(color)}>
    {color === defaultThemeColor ? <CheckOutlined /> : <></>}
  </li>
);

export default ThemeColorItem;
