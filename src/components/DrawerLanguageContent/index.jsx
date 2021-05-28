// libs
import React, { useContext } from "react";
// components
import DrawerLanguageContentItem from "../DrawerLanguageContentItem";
// context
import { DrawerContext } from "../../context";
// others
import "./styles.scss";

const DrawerLanguageContent = ({ defaultLanguage }) => {
  const { handleChangeVI, handleChangeEN } = useContext(DrawerContext);
  const [vi, en] = defaultLanguage.language.split("-");
  return (
    <div className="language-content-wrapper">
      <div className="language-content">
        <DrawerLanguageContentItem languageTitle={vi} handleChangeLang={handleChangeVI} />
        <DrawerLanguageContentItem languageTitle={en} handleChangeLang={handleChangeEN} />
      </div>
    </div>
  );
};

export default DrawerLanguageContent;
