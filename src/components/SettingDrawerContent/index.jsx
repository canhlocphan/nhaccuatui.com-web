// libs
import React, { useContext } from "react";
// components
import DrawerLanguage from "../DrawerLanguage";
import DrawerThemeColor from "../DrawerThemeColor";
import DrawerHeader from "../DrawerHeader";
// context
import { DrawerContext } from "../../context";
// others
import "./styles.scss";

const SettingDrawerContent = ({ defaultThemeColor, handleChangeThemeColor }) => {
  const { defaultLanguage } = useContext(DrawerContext);
  const [langTitle, themeTitle, fixedHeader] = defaultLanguage.drawer.split("-");
  return (
    <div className="setting-drawer-content-wrapper">
      <div className="setting-drawer-content">
        <DrawerLanguage title={langTitle} defaultLanguage={defaultLanguage} />
        <DrawerThemeColor
          title={themeTitle}
          defaultThemeColor={defaultThemeColor}
          handleChangeThemeColor={handleChangeThemeColor}
        />
        <DrawerHeader title={fixedHeader} />
      </div>
    </div>
  );
};

export default SettingDrawerContent;
