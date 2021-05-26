// libs
import React from "react";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const Song = ({ image }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="bg-image" onClick={handleChangePage}>
      <img src={image} alt="bg-img"></img>
    </div>
  );
};

export default Song;
