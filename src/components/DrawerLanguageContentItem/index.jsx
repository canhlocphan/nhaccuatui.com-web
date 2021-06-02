// libs
import React from "react";
// others
import "./styles.scss";
import { Checkbox } from "antd";

const DrawerLanguageContentItem = ({ languageTitle, handleChangeLang }) => {
  const checked = languageTitle === "English" || languageTitle === "Tiếng Việt";
  return (
    <div className="language-content-item" onClick={handleChangeLang}>
      <Checkbox checked={checked} />
      <div className="language-content-item-title">{languageTitle}</div>
    </div>
  );
};

export default DrawerLanguageContentItem;
