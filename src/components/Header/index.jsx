// libs
import React, { useContext } from "react";
// components
import HeaderList from "../HeaderList";
// context
import { DrawerContext } from "../../context";
// others
import "./styles.scss";

const Header = () => {
  const { fixedHeader } = useContext(DrawerContext);
  return (
    <div className="header-wrapper" style={{ position: `${fixedHeader ? "fixed" : "absolute"}` }}>
      <div className="header">
        <HeaderList />
      </div>
    </div>
  );
};

export default Header;
