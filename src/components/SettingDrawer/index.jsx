// libs
import React, { useContext, useRef, useState } from "react";
import classNames from "classnames";
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
  const className = classNames("setting-drawer-wrapper", { setting: !onSetting });
  const ref = useRef();
  useOutsideClick(ref, () => {
    if (onSetting) setOnSetting(false);
  });
  const handleChangeSetting = () => {
    setOnSetting(!onSetting);
  };
  const { defaultThemeColor, handleChangeThemeColor } = useContext(DrawerContext);
  return (
    <div className={className} ref={ref}>
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
