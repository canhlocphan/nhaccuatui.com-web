// libs
import React from "react";
// components
import DropdownMenu from "../DropdownMenu";
// others
import "./styles.scss";

const TopMenu = ({ header }) => (
  <>
    {header.HeaderList.map(({ id, name, list }) => {
      if (name === "Khác")
        return (
          <li className="more" list={list}>
            <DropdownMenu list={list}></DropdownMenu>
          </li>
        );
      return (
        <li key={id} style={{ paddingTop: "3px" }} list={list}>
          {name}
          <DropdownMenu list={list}></DropdownMenu>
        </li>
      );
    })}
  </>
);
export default TopMenu;
