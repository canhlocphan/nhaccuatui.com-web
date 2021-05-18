// libs
import React from "react";
// components
import Logo from "../Logo";
import NewVersion from "../NewVersion";
import TopMenu from "../TopMenu";
import UserLogin from "../UserLogin";
import FunctionBox from "../FunctionBox";
import SearchBox from "../SearchBox";
// mocks
import Header from "../../../../mocks/Header";
// others
import "./styles.scss";

const HeaderList = () => (
  <ul className="header-list">
    <Logo></Logo>
    <NewVersion></NewVersion>
    <TopMenu header={Header}></TopMenu>
    <UserLogin></UserLogin>
    <FunctionBox></FunctionBox>
    <SearchBox></SearchBox>
  </ul>
);
export default HeaderList;
