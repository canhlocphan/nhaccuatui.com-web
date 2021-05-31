// libs
import React from "react";
// components
import BackgroundVideo from "../BackgroundVideo";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const BackgroundSmallMV = ({ songName, image, id }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="small-mv-bg" title={songName} onClick={handleChangePage}>
      <div className="overlay"></div>
      <div className="small-mv-rank">{id}</div>
      <BackgroundVideo image={image} songName={songName}></BackgroundVideo>
    </div>
  );
};

export default BackgroundSmallMV;
