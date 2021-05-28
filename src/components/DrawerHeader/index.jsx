// libs
import React, { useContext } from "react";
// context
import { DrawerContext } from "../../context";
// others
import "./styles.scss";
import { Switch } from "antd";

const DrawerHeader = ({ title }) => {
  const { fixedHeader, setFixedHeader } = useContext(DrawerContext);
  const handleChangeHeader = () => {
    setFixedHeader(!fixedHeader);
  };
  return (
    <div className="drawer-header-wrapper">
      <div className="drawer-header">
        {title}
        <Switch size="small" checked={fixedHeader} onChange={handleChangeHeader} className="drawer-header-switch" />
      </div>
    </div>
  );
};

export default DrawerHeader;
