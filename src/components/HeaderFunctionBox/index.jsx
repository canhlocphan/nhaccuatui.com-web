// libs
import React, { useContext } from "react";
import { LanguageContext } from "../../context";
// others
import "./styles.scss";

const HeaderFunctionBox = () => {
  const { handleChangeVI, handleChangeEN } = useContext(LanguageContext);
  return (
    <li className="function">
      <div className="function-listen" title="Vietnamese" onClick={handleChangeVI}>
        VI
      </div>
      <div className="function-upload" title="English" onClick={handleChangeEN}>
        EN
      </div>
    </li>
  );
};
export default HeaderFunctionBox;
