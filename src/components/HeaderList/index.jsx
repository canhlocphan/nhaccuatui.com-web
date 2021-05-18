// libs
import React from "react";
// components
import HeaderLogo from "../HeaderLogo";
import HeaderNewVersion from "../HeaderNewVersion";
import HeaderTopMenu from "../HeaderTopMenu";
import HeaderUserLogin from "../HeaderUserLogin";
import HeaderFunctionBox from "../HeaderFunctionBox";
import HeaderSearchBox from "../HeaderSearchBox";
// mocks
import Header from "../../mocks/Header";
// others
import "./styles.scss";

const HeaderList = () => (
  <ul className="header-list">
    <HeaderLogo />
    <HeaderNewVersion />
    <HeaderTopMenu header={Header} />
    <HeaderUserLogin />
    <HeaderFunctionBox />
    <HeaderSearchBox />
  </ul>
);
export default HeaderList;
