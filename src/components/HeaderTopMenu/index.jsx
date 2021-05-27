// libs
import React from "react";
// components
import HeaderDropdownMenu from "../HeaderDropdownMenu";
// others
import "./styles.scss";

const HeaderTopMenu = ({ header }) => (
  <>
    {header.HeaderList.map(({ id, name, list }) => {
      if (name === "Khác") return <li className="more" key={id}></li>;
      return (
        <li key={id} style={{ paddingTop: "3px" }} list={list}>
          {name}
          <HeaderDropdownMenu list={list}></HeaderDropdownMenu>
        </li>
      );
    })}
  </>
);
export default HeaderTopMenu;
