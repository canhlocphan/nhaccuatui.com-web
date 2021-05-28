// libs
import React from "react";
// components
import DrawerLanguageContent from "../DrawerLanguageContent";
// others
import "./styles.scss";

const DrawerLanguage = ({ title, defaultLanguage }) => (
  <div className="language-wrapper">
    <div className="language-title">{title}</div>
    <DrawerLanguageContent defaultLanguage={defaultLanguage} />
  </div>
);

export default DrawerLanguage;
