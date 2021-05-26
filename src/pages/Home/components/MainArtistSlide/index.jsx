// libs
import React from "react";
// hooks
import useRouter from "../../../../hooks/useRouter";
// others
import "./styles.scss";

const MainArtistSlide = ({ image }) => {
  const { history } = useRouter();
  const handleChangePage = () => {
    history.push("/about");
  };
  return (
    <div className="main-artist-slide" onClick={handleChangePage}>
      <img className="image" src={image} alt="artist"></img>
    </div>
  );
};

export default MainArtistSlide;
