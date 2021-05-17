// libs
import React from "react";

// component footer
import CopyrightFooter from "./components/CopyrightFooter";
import UpFooter from "./components/UpFooter";

// others
import "./styles.scss";

const Footer = () => (
  <div className="footer-wrapper">
    <UpFooter></UpFooter>
    <CopyrightFooter />
  </div>
);

export default Footer;
