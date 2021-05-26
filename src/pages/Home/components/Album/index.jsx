// libs
import React from "react";
// hooks
import useRouter from "../../../../hooks/useRouter";
// components
import AlbumActionInfo from "../AlbumActionInfo";
// others
import "./styles.scss";

const Album = ({ view, image }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="album" onClick={handleChangePage}>
      <AlbumActionInfo view={view} />
      <img className="avatar" src={image} alt="avatar"></img>
    </div>
  );
};

export default Album;
