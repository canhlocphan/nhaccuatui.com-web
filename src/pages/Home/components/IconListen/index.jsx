// libs
import React from "react";

// others
import "./styles.scss";
import { CustomerServiceOutlined, CaretRightOutlined, HeartOutlined } from "@ant-design/icons";

const IconListen = (props) => (
  <div className="icon-listen">
    {props.actionSong === false ? (
      <>
        <CustomerServiceOutlined className="icon" />
        {` ${props.view}`}
      </>
    ) : (
      <>
        <HeartOutlined className="icon-action" />
        <CaretRightOutlined className="icon-action" />
      </>
    )}
  </div>
);

export default IconListen;
