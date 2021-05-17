// libs
import React from "react";

// components

// mocks
import SeparationLine from "../SeparationLine";
import InfoCompany from "../InfoCompany";

// others
import "./styles.scss";
import FooterNavigation from "../FooterNavigation";

const AnotherFooter = () => (
  <div className="another-footer-wrapper">
    <FooterNavigation></FooterNavigation>
    <SeparationLine></SeparationLine>
    <InfoCompany></InfoCompany>
  </div>
);

export default AnotherFooter;
