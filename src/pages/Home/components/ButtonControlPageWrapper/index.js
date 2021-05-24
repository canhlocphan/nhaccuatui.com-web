// libs
import React from "react";
// components
import ButtonControlPage from "../ButtonControlPage";
// others
import "./styles.scss";

const ButtonControlPageWrapper = ({ page, setPage }) => (
  <div className="btn-control-page-wrapper">
    <ButtonControlPage page={page} setPage={setPage} />
  </div>
);

export default ButtonControlPageWrapper;
