// libs
import React from "react";
// components
import FooterNavigation from "../FooterNavigation";
import FooterSeparationLine from "../FooterSeparationLine";
import FooterInfoCompany from "../FooterInfoCompany";
// others
import "./styles.scss";

const FooterAnother = ({ footer }) => (
  <div className="another-footer-wrapper">
    <FooterNavigation footer={footer} />
    <FooterSeparationLine />
    <FooterInfoCompany footer={footer} />
  </div>
);

export default FooterAnother;
