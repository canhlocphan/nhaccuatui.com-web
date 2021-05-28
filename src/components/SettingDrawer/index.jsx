// libs
import React, { useState } from "react";
// components
import ButtonDrawer from "../ButtonDrawer";
import SettingDrawerContent from "../SettingDrawerContent";
// others
import "./styles.scss";

const SettingDrawer = () => {
  const [onSetting, setOnSetting] = useState(false);
  const handleChangeSetting = () => {
    setOnSetting(!onSetting);
  };
  return (
    <div className={`${onSetting ? "setting-drawer-wrapper" : "setting-drawer-wrapper setting"}`}>
      <ButtonDrawer onSetting={onSetting} handleChangeSetting={handleChangeSetting} />
      <SettingDrawerContent />
    </div>
  );
};
export default SettingDrawer;
