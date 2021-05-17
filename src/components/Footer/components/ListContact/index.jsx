// libs
import React from "react";

// components
import DetailContact from "../DetailContact";

// others
import "./styles.scss";

const ListContact = () => (
  <ul className="list-contact-wrapper">
    <DetailContact>
      Tầng 19, Tòa nhà The 678 Tower, Số 67 đường Hoàng Văn Thái, phường Tân Phú, quận 7, TP HCM.
    </DetailContact>
    <DetailContact>support@nct.vn</DetailContact>
    <DetailContact>(028) 3868 7979</DetailContact>
    <DetailContact className="text-copyright">© NCT Corp. All rights reserved</DetailContact>
  </ul>
);

export default ListContact;
