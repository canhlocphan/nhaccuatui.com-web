// libs
import React from "react";
import styled from "styled-components";
// components
import HeaderDropdownMenu from "../HeaderDropdownMenu";
// others
import "./styles.scss";

const HeaderItem = styled.li`
  paddingtop: "3px";
`;

const HeaderTopMenu = ({ header }) => (
  <>
    {header.HeaderList.map(({ id, name, list }) => {
      if (name === "Khác") return <li className="more" key={id}></li>;
      return (
        <HeaderItem key={id} list={list}>
          {name}
          <HeaderDropdownMenu list={list}></HeaderDropdownMenu>
        </HeaderItem>
      );
    })}
  </>
);
export default HeaderTopMenu;
