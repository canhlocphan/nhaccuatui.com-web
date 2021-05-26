// libs
import React from "react";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const SlideDefaultMainDefault = ({ imageDefault }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return <div className="main-slide" style={{ background: `url(${imageDefault})` }} onClick={handleChangePage}></div>;
};

export default SlideDefaultMainDefault;
