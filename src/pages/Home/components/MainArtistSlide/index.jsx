// libs
import React from "react";
// others
import "./styles.scss";

const MainArtistSlide = ({ image }) => (
  <div className="main-artist-slide">
    <img className="image" src={image} alt="artist"></img>
  </div>
);

export default MainArtistSlide;
