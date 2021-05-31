// libs
import React from "react";
import classNames from "classnames";
// others
import "./styles.scss";

const ButtonTab = ({ active, id, titleName, setTypeMusic }) => {
  const className = classNames("btn-tab", { active });
  return (
    <div
      className={className}
      title={titleName}
      onClick={() => {
        setTypeMusic(id);
      }}
    >
      {titleName}
    </div>
  );
};

export default ButtonTab;
