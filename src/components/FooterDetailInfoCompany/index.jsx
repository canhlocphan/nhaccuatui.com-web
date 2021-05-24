// libs
import React from "react";
// others
import "./styles.scss";

const FooterDetailInfoCompany = ({ footer }) => (
  <ul className="detail-info-company">
    <li className="f-name">Công ty cổ phần N C T</li>
    {footer.map(({ id, title }) => (
      <li className="f-detail" key={id}>
        {title}
      </li>
    ))}
  </ul>
);

export default FooterDetailInfoCompany;
