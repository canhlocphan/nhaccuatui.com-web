// libs
import React, { useContext, useRef, useState } from "react";
// components
import ButtonDrawer from "../ButtonDrawer";
import SettingDrawerContent from "../SettingDrawerContent";
// hooks
import useOutsideClick from "../../hooks/useOutslideClick";
// context
import { DrawerContext } from "../../context";
// others
import "./styles.scss";

const SettingDrawer = () => {
  const [onSetting, setOnSetting] = useState(false);
  const handleChangeSetting = () => {
    setOnSetting(!onSetting);
  };
  const ref = useRef();
  useOutsideClick(ref, () => {
    if (onSetting) setOnSetting(false);
  });
  const { defaultThemeColor, handleChangeThemeColor } = useContext(DrawerContext);
  return (
    <div className={`${onSetting ? "setting-drawer-wrapper" : "setting-drawer-wrapper setting"}`} ref={ref}>
      <ButtonDrawer
        onSetting={onSetting}
        handleChangeSetting={handleChangeSetting}
        defaultThemeColor={defaultThemeColor}
      />
      <SettingDrawerContent defaultThemeColor={defaultThemeColor} handleChangeThemeColor={handleChangeThemeColor} />
    </div>
  );
};
export default SettingDrawer;
