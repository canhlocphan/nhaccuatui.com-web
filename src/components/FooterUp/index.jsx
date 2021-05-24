// libs
import React from "react";
// components
import FooterCooperation from "../FooterCooperation";
import FooterAnother from "../FooterAnother";
// others
import "./styles.scss";

const FooterUp = ({ footer }) => (
  <div className="up-footer-wrapper">
    <FooterCooperation footer={footer} />
    <FooterAnother footer={footer} />
  </div>
);

export default FooterUp;
