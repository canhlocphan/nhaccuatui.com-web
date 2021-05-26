// libs
import React from "react";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const TitleContentHundred = ({ title }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="title-content" title={title} onClick={handleChangePage}>
      {title}
    </div>
  );
};

export default TitleContentHundred;
