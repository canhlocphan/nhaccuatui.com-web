// libs
import React from "react";
import styled from "styled-components";
// others
import "./styles.scss";
import { CheckOutlined } from "@ant-design/icons";

const ColorItem = styled.div`
  background: ${(props) => props.color};
`;

const ThemeColorItem = ({ color, defaultThemeColor, handleChangeThemeColor }) => (
  <ColorItem className="theme-color-item" color={color} onClick={() => handleChangeThemeColor(color)}>
    {color === defaultThemeColor ? <CheckOutlined /> : <></>}
  </ColorItem>
);

export default ThemeColorItem;
