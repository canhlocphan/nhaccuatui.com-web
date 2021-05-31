// libs
import React from "react";
// components
import BackgroundVideo from "../BackgroundVideo";
import LargeVideoInformation from "../LargeVideoInformation";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const MV = ({ image, songName, title, id }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <li className="mv-wrapper">
      <div className="mv" onClick={handleChangePage}>
        <div className="overlay"></div>
        <div className="mv-rank">{id}</div>
        <BackgroundVideo image={image} />
        <LargeVideoInformation songName={songName} title={title} />
      </div>
    </li>
  );
};

export default MV;
