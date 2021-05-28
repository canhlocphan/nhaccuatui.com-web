// libs
import React from "react";
// others
import "./styles.scss";
import { CloseOutlined, SettingOutlined } from "@ant-design/icons";

const ButtonDrawer = ({ onSetting, handleChangeSetting }) => (
  <div className="btn-drawer-wrapper" onClick={handleChangeSetting}>
    {onSetting ? <CloseOutlined className="btn-drawer" /> : <SettingOutlined className="btn-drawer" />}
  </div>
);
export default ButtonDrawer;
