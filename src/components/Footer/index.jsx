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
    <FooterUp footer={FooterSource}></FooterUp>
    <FooterCopyright />
  </div>
);

export default Footer;
