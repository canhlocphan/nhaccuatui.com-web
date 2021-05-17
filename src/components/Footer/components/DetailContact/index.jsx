// libs
import React from "react";

// others
import "./styles.scss";

const DetailContact = (props) => (
  <li className="detail-contact">
    <a href="https://goo.gl/maps/QLUWVMBJvYZuY7nx7" target="_blank" rel="noreferrer">
      {props.children}
    </a>
  </li>
);

export default DetailContact;
