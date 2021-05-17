// libs
import React from "react";

// others
import "./styles.scss";

const ButtonTab = (props) => (
  <div
    className={`${props.active ? "btn-tab active" : "btn-tab"}`}
    title={props.children}
    onClick={() => {
      props.setTypeMusic(props.id);
    }}
  >
    {props.children}
  </div>
);

export default ButtonTab;
