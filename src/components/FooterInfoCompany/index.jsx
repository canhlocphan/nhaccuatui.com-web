// libs
import React from "react";
// components
import FooterLogoCompany from "../FooterLogoCompany";
import FooterDetailInfoCompany from "../FooterDetailInfoCompany";
import FooterIconPermission from "../FooterIconPermission";
import FooterIconPermissionDCMA from "../FooterIconPermissionDCMA";
// others
import "./styles.scss";

const FooterInfoCompany = ({ footer }) => (
  <div className="info-company-wrapper">
    <FooterLogoCompany />
    <FooterDetailInfoCompany footer={footer.infoCompany} />
    <FooterIconPermission />
    <FooterIconPermissionDCMA />
  </div>
);

export default FooterInfoCompany;
