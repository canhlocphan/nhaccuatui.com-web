// libs
import React from "react";

// components
import DetailInfoCompany from "../DetailInfoCompany";
import IconPermission from "../IconPermission";
import IconPermissionDCMA from "../IconPermissionDCMA";
import LogoCompany from "../LogoCompany";

// others
import "./styles.scss";

const InfoCompany = () => (
  <div className="info-company-wrapper">
    <LogoCompany></LogoCompany>
    <DetailInfoCompany></DetailInfoCompany>
    <IconPermission></IconPermission>
    <IconPermissionDCMA></IconPermissionDCMA>
  </div>
);

export default InfoCompany;
