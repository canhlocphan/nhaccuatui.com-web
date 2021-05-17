// libs
import React from "react";

// components
import HeaderList from "./components/HeaderList";

// others
import "./styles.scss";

const Header = () => (
  <div className="header-wrapper">
    <div className="header">
      <HeaderList />
    </div>
  </div>
);

export default Header;
