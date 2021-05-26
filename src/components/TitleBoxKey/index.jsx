// libs
import React from "react";
// hooks
import useRouter from "../../hooks/useRouter";
// others
import "./styles.scss";

const TitleBoxKey = ({ nameTitle }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <h2 className="title-box-key">
      <div className="title" title={nameTitle} onClick={handleChangePage}>
        {nameTitle}
      </div>
    </h2>
  );
};

export default TitleBoxKey;
