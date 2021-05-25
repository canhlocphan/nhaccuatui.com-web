// libs
import React from "react";
// components
import MainArtistSlide from "../MainArtistSlide";
import MainArtitsInfo from "../MainArtistInfo";
// others
import "./styles.scss";

const MainTrendArtist = ({ image, artist }) => (
  <div className="main-trend-artist">
    <MainArtistSlide image={image} />
    <MainArtitsInfo artist={artist} />
  </div>
);

export default MainTrendArtist;
