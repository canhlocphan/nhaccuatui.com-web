// libs
import React, { useContext } from "react";
import styled from "styled-components";
// components
import HeaderList from "../HeaderList";
// context
import { DrawerContext } from "../../context";
// others
import "./styles.scss";

const HeaderWrapper = styled.div`
  position: ${(props) => (props.fixedHeader ? "fixed" : "absolute")};
`;

const Header = () => {
  const { fixedHeader } = useContext(DrawerContext);
  return (
    <HeaderWrapper className="header-wrapper" fixedHeader={fixedHeader}>
      <div className="header">
        <HeaderList />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
