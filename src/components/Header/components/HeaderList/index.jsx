// libs
import React from "react";

// components
import Logo from "../Logo";
import NewVersion from "../NewVersion";
import MenuTop from "../MenuTop";
import UserLogin from "../UserLogin";
import FunctionBox from "../FunctionBox";
import SearchBox from "../SearchBox";

// others
import "./styles.scss";

const HeaderList = () => (
  <ul className="header-list">
    <Logo></Logo>
    <NewVersion></NewVersion>
    <MenuTop></MenuTop>
    <UserLogin></UserLogin>
    <FunctionBox></FunctionBox>
    <SearchBox></SearchBox>
  </ul>
);
export default HeaderList;
