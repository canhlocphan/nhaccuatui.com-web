// libs
import React from "react";
// others
import "./styles.scss";

const ButtonTab = ({ active, id, titleName, setTypeMusic }) => (
  <div
    className={`${active ? "btn-tab active" : "btn-tab"}`}
    title={titleName}
    onClick={() => {
      setTypeMusic(id);
    }}
  >
    {titleName}
  </div>
);

export default ButtonTab;
