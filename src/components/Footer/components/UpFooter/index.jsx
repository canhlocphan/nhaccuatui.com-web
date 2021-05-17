// libs
import React from "react";

// components
import AnotherFooter from "../AnotherFooter";
import CooperationFooter from "../CooperationFooter";

// others
import "./styles.scss";

const UpFooter = () => (
  <div className="up-footer-wrapper">
    <CooperationFooter />
    <AnotherFooter />
  </div>
);

export default UpFooter;
