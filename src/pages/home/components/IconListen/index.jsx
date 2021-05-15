// libs
import React from "react";

// others
import "./styles.scss";
import { CustomerServiceOutlined } from "@ant-design/icons";

const IconListen = (props) => (
  <div className="icon-listen">
    <CustomerServiceOutlined className="icon" />
    {` ${props.view}`}
  </div>
);

export default IconListen;
