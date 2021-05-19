// libs
import React from "react";

// components
import FooterDetailContact from "../FooterDetailContact";

// others
import "./styles.scss";

const FooterListContact = () => (
  <ul className="list-contact-wrapper">
    <FooterDetailContact>
      Tầng 19, Tòa nhà The 678 Tower, Số 67 đường Hoàng Văn Thái, phường Tân Phú, quận 7, TP HCM.
    </FooterDetailContact>
    <FooterDetailContact>support@nct.vn</FooterDetailContact>
    <FooterDetailContact>(028) 3868 7979</FooterDetailContact>
    <FooterDetailContact className="text-copyright">© NCT Corp. All rights reserved</FooterDetailContact>
  </ul>
);

export default FooterListContact;
