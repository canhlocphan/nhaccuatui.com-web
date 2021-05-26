// libs
import React from "react";
// components
import FooterUp from "../FooterUp";
import FooterCopyright from "../FooterCopyright";
// mocks
import FooterSource from "../../mocks/Footer";
// others
import "./styles.scss";

const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer">
      <FooterUp footer={FooterSource}></FooterUp>
    </div>
    <FooterCopyright />
  </div>
);

export default Footer;
